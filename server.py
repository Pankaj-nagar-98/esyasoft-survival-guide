"""
Esyasoft Survival & Thriving Guide - Backend Server & Grievance REST API
Provides SQLite persistence, live Excel CSV register synchronization, file attachment handling,
and REST endpoints for complaint management.
"""

import os
import sys
import json
import sqlite3
import csv
import base64
import uuid
from datetime import datetime
from urllib.parse import urlparse, parse_qs
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
UPLOADS_DIR = os.path.join(BASE_DIR, "uploads")
DB_PATH = os.path.join(DATA_DIR, "complaints.db")
EXCEL_CSV_PATH = os.path.join(DATA_DIR, "grievances_master.csv")

os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(UPLOADS_DIR, exist_ok=True)

# Authority routing lookup
AUTHORITY_MAP = {
    "Maintenance": "Campus Facilities & Maintenance Department",
    "Food": "Cafeteria & Catering Oversight Committee",
    "PHO": "Sanitation & Housekeeping Department",
    "Fire and Safety": "Campus Safety & EHS Officer",
    "Technical": "IT Infrastructure & Systems Desk",
    "Other": "HR & Employee Relations Grievance Cell"
}

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_database():
    """Initialize SQLite database tables and seed sample complaints if empty."""
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS complaints (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ticket_id TEXT UNIQUE NOT NULL,
        subject TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT NOT NULL,
        priority TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'Pending',
        assigned_authority TEXT NOT NULL,
        reporter_name TEXT NOT NULL,
        reporter_email TEXT NOT NULL,
        reporter_role TEXT NOT NULL,
        attachment_name TEXT,
        attachment_url TEXT,
        attachment_size INTEGER,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS complaint_activity_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ticket_id TEXT NOT NULL,
        title TEXT NOT NULL,
        message TEXT NOT NULL,
        author_name TEXT NOT NULL,
        author_role TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (ticket_id) REFERENCES complaints(ticket_id) ON DELETE CASCADE
    )
    """)
    conn.commit()

    # Seed data if complaints table is empty
    cursor.execute("SELECT COUNT(*) FROM complaints")
    count = cursor.fetchone()[0]
    if count == 0:
        seed_complaints = [
            {
                "ticket_id": "ESY-GRV-1001",
                "subject": "Executive Training Hall AC temperature erratic and dripping condensation",
                "category": "Maintenance",
                "description": "The central split AC unit in Room 204 near the podium is fluctuating between 16C and 28C with water droplets dripping near electrical raceways.",
                "priority": "High",
                "status": "In Progress",
                "assigned_authority": AUTHORITY_MAP["Maintenance"],
                "reporter_name": "Batch 2026 Engineer",
                "reporter_email": "fresher@esyasoft.com",
                "reporter_role": "fresher",
                "attachment_name": None,
                "attachment_url": None,
                "attachment_size": 0,
                "created_at": "2026-09-24 10:15:00",
                "updated_at": "2026-09-25 14:30:00",
                "logs": [
                    ("Grievance Submitted", "Grievance logged by Batch 2026 Engineer via Campus Portal.", "Batch 2026 Engineer", "fresher", "2026-09-24 10:15:00"),
                    ("Routed to Authority", "Auto-assigned to Campus Facilities & Maintenance Department.", "System Dispatch", "system", "2026-09-24 10:15:05"),
                    ("Technician Assigned", "HVAC technician inspects drain pipe and thermostat sensor calibration.", "Maintenance Supervisor", "admin", "2026-09-25 14:30:00")
                ]
            },
            {
                "ticket_id": "ESY-GRV-1002",
                "subject": "Breakfast pooris and chutney replenishment delay on 25th September",
                "category": "Food",
                "description": "During the 8:00 AM - 8:30 AM peak breakfast rush, hot items ran out for 20 minutes causing engineers to rush biometric check-in.",
                "priority": "Medium",
                "status": "Resolved",
                "assigned_authority": AUTHORITY_MAP["Food"],
                "reporter_name": "Batch 2026 Engineer",
                "reporter_email": "fresher@esyasoft.com",
                "reporter_role": "fresher",
                "attachment_name": None,
                "attachment_url": None,
                "attachment_size": 0,
                "created_at": "2026-09-25 08:50:00",
                "updated_at": "2026-09-26 11:00:00",
                "logs": [
                    ("Grievance Submitted", "Grievance logged by Batch 2026 Engineer.", "Batch 2026 Engineer", "fresher", "2026-09-25 08:50:00"),
                    ("Routed to Authority", "Forwarded to Cafeteria & Catering Oversight Committee.", "System Dispatch", "system", "2026-09-25 08:50:02"),
                    ("Resolution Confirmed", "Adya Foods catering management added an extra buffer warmer station starting at 07:45 AM daily.", "Pankaj (Administrator)", "admin", "2026-09-26 11:00:00")
                ]
            },
            {
                "ticket_id": "ESY-GRV-1003",
                "subject": "Second floor washroom sanitizer dispensers empty and hand dryer failure",
                "category": "PHO",
                "description": "Sanitizer dispensers near Lab Level 2 are depleted, and the electric hand dryer unit has lost power.",
                "priority": "High",
                "status": "In Progress",
                "assigned_authority": AUTHORITY_MAP["PHO"],
                "reporter_name": "Pankaj (Administrator)",
                "reporter_email": "admin@esyasoft.com",
                "reporter_role": "admin",
                "attachment_name": None,
                "attachment_url": None,
                "attachment_size": 0,
                "created_at": "2026-09-26 09:30:00",
                "updated_at": "2026-09-26 11:15:00",
                "logs": [
                    ("Grievance Submitted", "Audit observation logged by Pankaj (Administrator).", "Pankaj (Administrator)", "admin", "2026-09-26 09:30:00"),
                    ("Routed to Authority", "Auto-dispatched to Sanitation & Housekeeping Department (PHO).", "System Dispatch", "system", "2026-09-26 09:30:01"),
                    ("Housekeeping Work Order", "Refills dispatched. Electrician scheduled for hand dryer wiring repair.", "PHO Shift Lead", "admin", "2026-09-26 11:15:00")
                ]
            },
            {
                "ticket_id": "ESY-GRV-1004",
                "subject": "Emergency fire exit stairway door latch sticking on Level 1",
                "category": "Fire and Safety",
                "description": "The push-bar fire exit door on the South Wing Level 1 requires excessive force to unlatch. Needs immediate lubrication and panic bar alignment.",
                "priority": "High",
                "status": "Resolved",
                "assigned_authority": AUTHORITY_MAP["Fire and Safety"],
                "reporter_name": "Pankaj (Administrator)",
                "reporter_email": "admin@esyasoft.com",
                "reporter_role": "admin",
                "attachment_name": None,
                "attachment_url": None,
                "attachment_size": 0,
                "created_at": "2026-09-24 16:00:00",
                "updated_at": "2026-09-25 10:00:00",
                "logs": [
                    ("Grievance Submitted", "Safety ticket submitted by Pankaj (Administrator).", "Pankaj (Administrator)", "admin", "2026-09-24 16:00:00"),
                    ("Routed to Authority", "Priority notification sent to Campus Safety & EHS Officer.", "System Dispatch", "system", "2026-09-24 16:00:01"),
                    ("Safety Sign-Off", "Panic hardware inspected, lubricated, and certified smooth unlatch under 15N force.", "Campus Safety Officer", "admin", "2026-09-25 10:00:00")
                ]
            },
            {
                "ticket_id": "ESY-GRV-1005",
                "subject": "DLMS/COSEM test simulator port 4059 blocked on training Wi-Fi network",
                "category": "Technical",
                "description": "Engineers attempting to connect to meter simulator virtual gateways are encountering timeout errors on training subnet SSID.",
                "priority": "Medium",
                "status": "Pending",
                "assigned_authority": AUTHORITY_MAP["Technical"],
                "reporter_name": "Batch 2026 Engineer",
                "reporter_email": "fresher@esyasoft.com",
                "reporter_role": "fresher",
                "attachment_name": None,
                "attachment_url": None,
                "attachment_size": 0,
                "created_at": "2026-09-27 09:15:00",
                "updated_at": "2026-09-27 09:15:00",
                "logs": [
                    ("Grievance Submitted", "Technical issue filed by Batch 2026 Engineer.", "Batch 2026 Engineer", "fresher", "2026-09-27 09:15:00"),
                    ("Routed to Authority", "Auto-routed to IT Infrastructure & Systems Desk.", "System Dispatch", "system", "2026-09-27 09:15:02")
                ]
            }
        ]

        for item in seed_complaints:
            cursor.execute("""
            INSERT INTO complaints (
                ticket_id, subject, category, description, priority, status,
                assigned_authority, reporter_name, reporter_email, reporter_role,
                attachment_name, attachment_url, attachment_size, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                item["ticket_id"], item["subject"], item["category"], item["description"],
                item["priority"], item["status"], item["assigned_authority"],
                item["reporter_name"], item["reporter_email"], item["reporter_role"],
                item["attachment_name"], item["attachment_url"], item["attachment_size"],
                item["created_at"], item["updated_at"]
            ))

            for log in item["logs"]:
                cursor.execute("""
                INSERT INTO complaint_activity_logs (
                    ticket_id, title, message, author_name, author_role, created_at
                ) VALUES (?, ?, ?, ?, ?, ?)
                """, (item["ticket_id"], log[0], log[1], log[2], log[3], log[4]))

        conn.commit()

    conn.close()
    sync_excel_csv_register()

def sync_excel_csv_register():
    """Generates a Microsoft Excel-compatible CSV file with UTF-8 BOM."""
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT 
        c.ticket_id,
        c.created_at,
        c.category,
        c.priority,
        c.status,
        c.assigned_authority,
        c.reporter_name,
        c.reporter_email,
        c.reporter_role,
        c.subject,
        c.description,
        COALESCE(c.attachment_name, 'None') as attachment,
        (SELECT title || ': ' || message FROM complaint_activity_logs WHERE ticket_id = c.ticket_id ORDER BY id DESC LIMIT 1) as latest_update
    FROM complaints c
    ORDER BY c.id DESC
    """)
    rows = cursor.fetchall()
    conn.close()

    fieldnames = [
        "Grievance Number",
        "Date Filed",
        "Category",
        "Priority",
        "Status",
        "Assigned Authority",
        "Reporter Name",
        "Reporter Email",
        "Reporter Role",
        "Subject",
        "Description",
        "Attachment",
        "Latest Timeline Update"
    ]

    with open(EXCEL_CSV_PATH, mode="w", newline="", encoding="utf-8-sig") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(fieldnames)
        for r in rows:
            writer.writerow([
                r["ticket_id"],
                r["created_at"],
                r["category"],
                r["priority"],
                r["status"],
                r["assigned_authority"],
                r["reporter_name"],
                r["reporter_email"],
                r["reporter_role"],
                r["subject"],
                r["description"],
                r["attachment"],
                r["latest_update"] or "Ticket Logged"
            ])

class EsyasoftRequestHandler(SimpleHTTPRequestHandler):
    """Custom HTTP Request Handler supporting Static Files and REST API."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()
        self.wfile.write(json.dumps(data, indent=2).encode("utf-8"))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        # API: Export complaints to Excel CSV
        if path == "/api/complaints/export":
            sync_excel_csv_register()
            if os.path.exists(EXCEL_CSV_PATH):
                with open(EXCEL_CSV_PATH, "rb") as f:
                    csv_bytes = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "text/csv; charset=utf-8")
                self.send_header("Content-Disposition", 'attachment; filename="esyasoft_grievances_master.csv"')
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(csv_bytes)
                return
            else:
                self._send_json(404, {"error": "Excel register not generated"})
                return

        # API: Query complaints with filters
        if path == "/api/complaints":
            reporter = query.get("reporter", [None])[0]
            status = query.get("status", [None])[0]
            category = query.get("category", [None])[0]
            priority = query.get("priority", [None])[0]
            search = query.get("search", [None])[0]

            sql = "SELECT * FROM complaints WHERE 1=1"
            params = []

            if reporter and reporter != "all":
                sql += " AND reporter_email = ?"
                params.append(reporter.strip().lower())
            if status and status != "all":
                sql += " AND status = ?"
                params.append(status.strip())
            if category and category != "all":
                sql += " AND category = ?"
                params.append(category.strip())
            if priority and priority != "all":
                sql += " AND priority = ?"
                params.append(priority.strip())
            if search and search.strip():
                term = f"%{search.strip()}%"
                sql += " AND (ticket_id LIKE ? OR subject LIKE ? OR description LIKE ? OR assigned_authority LIKE ?)"
                params.extend([term, term, term, term])

            sql += " ORDER BY id DESC"

            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute(sql, params)
            rows = cursor.fetchall()

            complaints = []
            for r in rows:
                c_dict = dict(r)
                cursor.execute("""
                SELECT title, message, author_name, author_role, created_at
                FROM complaint_activity_logs
                WHERE ticket_id = ?
                ORDER BY id ASC
                """, (c_dict["ticket_id"],))
                c_dict["activity_logs"] = [dict(log) for log in cursor.fetchall()]
                complaints.append(c_dict)

            conn.close()
            self._send_json(200, {"success": True, "complaints": complaints, "count": len(complaints)})
            return

        # API: Query company insights, news, and posters
        if path == "/api/insights":
            insights_file = os.path.join(DATA_DIR, "insights.json")
            if os.path.exists(insights_file):
                with open(insights_file, "r", encoding="utf-8") as f:
                    data = json.load(f)
                category = query.get("category", [None])[0]
                search = query.get("search", [None])[0]
                stories = data.get("stories", [])

                if category and category != "all":
                    stories = [s for s in stories if s.get("category_slug") == category.strip() or s.get("category") == category.strip()]
                if search and search.strip():
                    term = search.strip().lower()
                    stories = [s for s in stories if term in s.get("title", "").lower() or term in s.get("excerpt", "").lower() or term in s.get("content", "").lower()]

                self._send_json(200, {
                    "success": True,
                    "last_synced": data.get("last_synced"),
                    "social_channels": data.get("social_channels"),
                    "stories": stories,
                    "posters": data.get("posters", [])
                })
                return
            else:
                self._send_json(404, {"error": "Insights data not found"})
                return

        # Fallback to dist production bundle or static file serving
        dist_dir = os.path.join(BASE_DIR, "dist")
        if os.path.exists(dist_dir):
            if path in ["/", "/index.html"]:
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                with open(os.path.join(dist_dir, "index.html"), "rb") as f:
                    self.wfile.write(f.read())
                return

            dist_file = os.path.join(dist_dir, path.lstrip("/"))
            if os.path.isfile(dist_file):
                self.path = "/dist/" + path.lstrip("/")
                return super().do_GET()

            # SPA fallback for client-side routes like /roadmap, /attendance, /campus, etc.
            if not os.path.splitext(path)[1]:
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                with open(os.path.join(dist_dir, "index.html"), "rb") as f:
                    self.wfile.write(f.read())
                return

        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        
        # API: Sync company news and social feeds
        if parsed.path == "/api/insights/sync":
            insights_file = os.path.join(DATA_DIR, "insights.json")
            now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            if os.path.exists(insights_file):
                with open(insights_file, "r", encoding="utf-8") as f:
                    data = json.load(f)
                data["last_synced"] = now_str
                with open(insights_file, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2)
                self._send_json(200, {
                    "success": True,
                    "message": "Company news wire & social feeds successfully synchronized.",
                    "last_synced": now_str,
                    "count": len(data.get("stories", []))
                })
                return

        if parsed.path == "/api/complaints":
            try:
                content_len = int(self.headers.get("Content-Length", 0))
                raw_body = self.rfile.read(content_len).decode("utf-8")
                data = json.loads(raw_body)
            except Exception as e:
                self._send_json(400, {"success": False, "error": f"Invalid JSON payload: {str(e)}"})
                return

            subject = (data.get("subject") or "").strip()
            category = (data.get("category") or "").strip()
            description = (data.get("description") or "").strip()
            priority = (data.get("priority") or "Medium").strip()
            reporter_name = (data.get("reporter_name") or "Batch 2026 Engineer").strip()
            reporter_email = (data.get("reporter_email") or "fresher@esyasoft.com").strip().lower()
            reporter_role = (data.get("reporter_role") or "fresher").strip()
            attachment_name = data.get("attachment_name")
            attachment_base64 = data.get("attachment_base64")
            attachment_size = data.get("attachment_size", 0)

            if not subject or len(subject) < 5:
                self._send_json(400, {"success": False, "error": "Subject must be at least 5 characters."})
                return
            if not description or len(description) < 15:
                self._send_json(400, {"success": False, "error": "Description must be at least 15 characters."})
                return
            if category not in AUTHORITY_MAP:
                category = "Other"

            assigned_authority = data.get("assigned_authority") or AUTHORITY_MAP.get(category, "Campus Operations Desk")

            # Handle file saving if base64 data provided
            attachment_url = None
            if attachment_name and attachment_base64:
                try:
                    clean_filename = f"{uuid.uuid4().hex[:8]}_{os.path.basename(attachment_name)}"
                    file_path = os.path.join(UPLOADS_DIR, clean_filename)
                    if "," in attachment_base64:
                        attachment_base64 = attachment_base64.split(",")[1]
                    file_bytes = base64.b64decode(attachment_base64)
                    with open(file_path, "wb") as f:
                        f.write(file_bytes)
                    attachment_url = f"uploads/{clean_filename}"
                    attachment_size = len(file_bytes)
                except Exception as e:
                    print(f"Attachment save error: {e}")

            now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            conn = get_db_connection()
            cursor = conn.cursor()

            # Generate next unique Grievance Number
            cursor.execute("SELECT id FROM complaints ORDER BY id DESC LIMIT 1")
            last_row = cursor.fetchone()
            next_id = (last_row["id"] + 1) if last_row else 1
            ticket_id = f"ESY-GRV-{1000 + next_id}"

            cursor.execute("""
            INSERT INTO complaints (
                ticket_id, subject, category, description, priority, status,
                assigned_authority, reporter_name, reporter_email, reporter_role,
                attachment_name, attachment_url, attachment_size, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, 'Pending', ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                ticket_id, subject, category, description, priority,
                assigned_authority, reporter_name, reporter_email, reporter_role,
                attachment_name, attachment_url, attachment_size, now_str, now_str
            ))

            # Initial timeline entries
            cursor.execute("""
            INSERT INTO complaint_activity_logs (ticket_id, title, message, author_name, author_role, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (
                ticket_id,
                "Grievance Submitted",
                f"Grievance registered in the official portal by {reporter_name} ({reporter_email}).",
                reporter_name,
                reporter_role,
                now_str
            ))

            cursor.execute("""
            INSERT INTO complaint_activity_logs (ticket_id, title, message, author_name, author_role, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (
                ticket_id,
                "Routed to Authority",
                f"Ticket automatically dispatched to {assigned_authority} for evaluation and SLA tracking.",
                "System Dispatch",
                "system",
                now_str
            ))

            conn.commit()

            # Retrieve complete record
            cursor.execute("SELECT * FROM complaints WHERE ticket_id = ?", (ticket_id,))
            created_row = dict(cursor.fetchone())
            cursor.execute("SELECT title, message, author_name, author_role, created_at FROM complaint_activity_logs WHERE ticket_id = ? ORDER BY id ASC", (ticket_id,))
            created_row["activity_logs"] = [dict(log) for log in cursor.fetchall()]

            conn.close()
            sync_excel_csv_register()

            self._send_json(201, {"success": True, "complaint": created_row, "message": f"Grievance {ticket_id} filed successfully."})
            return

        self._send_json(404, {"error": "Not found"})

    def do_PATCH(self):
        parsed = urlparse(self.path)
        parts = parsed.path.strip("/").split("/")
        
        # Format: /api/complaints/<ticket_id>
        if len(parts) == 3 and parts[0] == "api" and parts[1] == "complaints":
            ticket_id = parts[2]
            try:
                content_len = int(self.headers.get("Content-Length", 0))
                raw_body = self.rfile.read(content_len).decode("utf-8")
                data = json.loads(raw_body)
            except Exception as e:
                self._send_json(400, {"success": False, "error": f"Invalid JSON payload: {str(e)}"})
                return

            new_status = data.get("status")
            note = (data.get("note") or "").strip()
            author_name = (data.get("author_name") or "Pankaj (Administrator)").strip()
            author_role = (data.get("author_role") or "admin").strip()
            now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            conn = get_db_connection()
            cursor = conn.cursor()

            cursor.execute("SELECT * FROM complaints WHERE ticket_id = ?", (ticket_id,))
            complaint = cursor.fetchone()
            if not complaint:
                conn.close()
                self._send_json(404, {"success": False, "error": f"Ticket {ticket_id} not found."})
                return

            if new_status and new_status in ["Pending", "In Progress", "Resolved"]:
                cursor.execute("""
                UPDATE complaints SET status = ?, updated_at = ? WHERE ticket_id = ?
                """, (new_status, now_str, ticket_id))

            if note:
                log_title = f"Status Updated: {new_status}" if new_status else "Investigation Note"
                cursor.execute("""
                INSERT INTO complaint_activity_logs (ticket_id, title, message, author_name, author_role, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """, (ticket_id, log_title, note, author_name, author_role, now_str))

            conn.commit()

            cursor.execute("SELECT * FROM complaints WHERE ticket_id = ?", (ticket_id,))
            updated_row = dict(cursor.fetchone())
            cursor.execute("SELECT title, message, author_name, author_role, created_at FROM complaint_activity_logs WHERE ticket_id = ? ORDER BY id ASC", (ticket_id,))
            updated_row["activity_logs"] = [dict(log) for log in cursor.fetchall()]

            conn.close()
            sync_excel_csv_register()

            self._send_json(200, {"success": True, "complaint": updated_row, "message": f"Ticket {ticket_id} updated successfully."})
            return

        self._send_json(404, {"error": "Not found"})

def run(server_class=HTTPServer, handler_class=EsyasoftRequestHandler, port=PORT):
    init_database()
    server_address = ("", port)
    httpd = server_class(server_address, handler_class)
    print(f"Esyasoft Grievance & Maintenance Server running on port {port} (http://127.0.0.1:{port}/)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()

if __name__ == "__main__":
    run()
