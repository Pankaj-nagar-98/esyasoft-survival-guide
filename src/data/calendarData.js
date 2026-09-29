/**
 * 3-Month Induction Calendar & Visual Milestone Data
 * Batch 2026 Graduate Programme - Esyasoft GCC
 */

export const BEYOND_DAY_30_DATA = {
  title: "What comes next?",
  eyebrow: "BEYOND DAY 30",
  subtitle: "Your first 30 days build the foundation. Your learning journey continues through technical and role-specific specialization.",
  image: "assets/beyond-day-30-milestone.jpg",
  stages: [
    {
      num: 1,
      title: "GET Onboarding",
      isCovered: true,
      description: "Leadership induction, GCC culture, IT & biometrics orientation."
    },
    {
      num: 2,
      title: "Domain Foundation",
      isCovered: true,
      description: "Smart grid AMI, meters portfolio, gas & BESS energy domains."
    },
    {
      num: 3,
      title: "Business / Soft Skills",
      isCovered: true,
      description: "POSH, corporate communications, agile project methodologies."
    },
    {
      num: 4,
      title: "Technical Foundation",
      isCovered: true,
      description: "DLMS protocols, MDMS data pipelines, interval load profiles."
    },
    {
      num: 5,
      title: "Specialization",
      isCovered: false,
      description: "Advanced HES protocols, AI/ML loss audits, SolidWorks & BA tracks."
    },
    {
      num: 6,
      title: "Team / Role Deployment",
      isCovered: false,
      description: "Allocation to live Discom engineering squads & utility client desks."
    }
  ],
  completionStage: {
    title: "Programme Completion",
    description: "Full graduate certification, leadership felicitation & appraisal."
  },
  fullPhases: [
    "01 Leadership Orientation",
    "02 HR & Culture Orientation",
    "03 Domain Foundation",
    "04 Business Capability Development / Soft Skills",
    "05 Technical Foundation",
    "06 Business Analyst Specialization",
    "07 Advanced Technical Specialization",
    "08 AI & ML",
    "09 SolidWorks",
    "10 Programme Closure / Felicitation",
    "11 Buffer / Extension"
  ]
};

export const THREE_MONTH_CALENDAR_DATA = [
  {
    monthId: 1,
    monthName: "Month 1",
    phaseTitle: "Orientation & Technical Foundation",
    dateRange: "07 Sep – 06 Oct",
    dayRange: "Days 01 – 30",
    summary: "Foundational immersion covering leadership orientation, smart metering, domain breadth, and core technical systems.",
    completionStat: "20 of 22 Working Days Tracked",
    weeks: [
      {
        weekNumber: "WEEK 1",
        weekTitle: "Orientation & Domain Foundation",
        dateRange: "07 Sep – 13 Sep",
        completedStatus: "5/5 completed",
        days: [
          { dayNum: "01", dateStr: "Mon 7 Sep", topic: "Leadership Orientation", isCompleted: true, isWeekend: false },
          { dayNum: "02", dateStr: "Tue 8 Sep", topic: "HR & Culture", isCompleted: true, isWeekend: false },
          { dayNum: "03", dateStr: "Wed 9 Sep", topic: "Project Delivery", isCompleted: true, isWeekend: false },
          { dayNum: "04", dateStr: "Thu 10 Sep", topic: "Smart Metering", isCompleted: true, isWeekend: false },
          { dayNum: "05", dateStr: "Fri 11 Sep", topic: "MDMS & Data", isCompleted: true, isWeekend: false },
          { dayNum: "06", dateStr: "Sat 12 Sep", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "07", dateStr: "Sun 13 Sep", topic: "Weekend", isCompleted: false, isWeekend: true }
        ]
      },
      {
        weekNumber: "WEEK 2",
        weekTitle: "Domain & Business Skills",
        dateRange: "14 Sep – 20 Sep",
        completedStatus: "5/5 completed",
        days: [
          { dayNum: "08", dateStr: "Mon 14 Sep", topic: "Domain Learning", isCompleted: true, isWeekend: false },
          { dayNum: "09", dateStr: "Tue 15 Sep", topic: "Meters Portfolio", isCompleted: true, isWeekend: false },
          { dayNum: "10", dateStr: "Wed 16 Sep", topic: "POSH & Soft Skills", isCompleted: true, isWeekend: false },
          { dayNum: "11", dateStr: "Thu 17 Sep", topic: "Self Learning", isCompleted: true, isWeekend: false },
          { dayNum: "12", dateStr: "Fri 18 Sep", topic: "PM & Agile", isCompleted: true, isWeekend: false },
          { dayNum: "13", dateStr: "Sat 19 Sep", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "14", dateStr: "Sun 20 Sep", topic: "Weekend", isCompleted: false, isWeekend: true }
        ]
      },
      {
        weekNumber: "WEEK 3",
        weekTitle: "Energy Domains",
        dateRange: "21 Sep – 27 Sep",
        completedStatus: "5/5 completed",
        days: [
          { dayNum: "15", dateStr: "Mon 21 Sep", topic: "BESS & Comms", isCompleted: true, isWeekend: false },
          { dayNum: "16", dateStr: "Tue 22 Sep", topic: "EV Charging", isCompleted: true, isWeekend: false },
          { dayNum: "17", dateStr: "Wed 23 Sep", topic: "Gas Distribution", isCompleted: true, isWeekend: false },
          { dayNum: "18", dateStr: "Thu 24 Sep", topic: "Business Skills", isCompleted: true, isWeekend: false },
          { dayNum: "19", dateStr: "Fri 25 Sep", topic: "Networking", isCompleted: true, isWeekend: false },
          { dayNum: "20", dateStr: "Sat 26 Sep", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "21", dateStr: "Sun 27 Sep", topic: "Weekend", isCompleted: false, isWeekend: true }
        ]
      },
      {
        weekNumber: "WEEK 4",
        weekTitle: "Technical Foundation",
        dateRange: "28 Sep – 04 Oct",
        completedStatus: "4/4 completed",
        days: [
          { dayNum: "22", dateStr: "Mon 28 Sep", topic: "Technical Foundation", isCompleted: true, isWeekend: false },
          { dayNum: "23", dateStr: "Tue 29 Sep", topic: "Technical Foundation", isCompleted: true, isWeekend: false },
          { dayNum: "24", dateStr: "Wed 30 Sep", topic: "Project Activity", isCompleted: true, isWeekend: false },
          { dayNum: "25", dateStr: "Thu 1 Oct", topic: "Technical Foundation", isCompleted: true, isWeekend: false },
          { dayNum: "26", dateStr: "Fri 2 Oct", topic: "Gandhi Jayanti", isCompleted: false, isWeekend: false, isHoliday: true, holidayName: "National Holiday" },
          { dayNum: "27", dateStr: "Sat 3 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "28", dateStr: "Sun 4 Oct", topic: "Weekend", isCompleted: false, isWeekend: true }
        ]
      },
      {
        weekNumber: "WEEK 5",
        weekTitle: "First-Month Wrap-up",
        dateRange: "05 Oct – 06 Oct",
        completedStatus: "2/2 completed",
        days: [
          { dayNum: "29", dateStr: "Mon 5 Oct", topic: "Programme Activity", isCompleted: true, isWeekend: false },
          { dayNum: "30", dateStr: "Tue 6 Oct", topic: "30-Day Reflection", isCompleted: true, isWeekend: false, isReflection: true }
        ]
      }
    ]
  },
  {
    monthId: 2,
    monthName: "Month 2",
    phaseTitle: "Advanced Technical Specialization & Deep Dive",
    dateRange: "07 Oct – 05 Nov",
    dayRange: "Days 31 – 60",
    summary: "Deep specialization across DLMS/COSEM framing, HES bidirectional telemetry, MDMS VEE engines, AES-128 security, and AT&C loss audits.",
    completionStat: "In Progress (Sprint Active)",
    weeks: [
      {
        weekNumber: "WEEK 6",
        weekTitle: "Smart Grid Architecture & HES Protocols",
        dateRange: "07 Oct – 13 Oct",
        completedStatus: "5/5 completed",
        days: [
          { dayNum: "31", dateStr: "Wed 7 Oct", topic: "DLMS Architecture", isCompleted: true, isWeekend: false },
          { dayNum: "32", dateStr: "Thu 8 Oct", topic: "OBIS Code Profiling", isCompleted: true, isWeekend: false },
          { dayNum: "33", dateStr: "Fri 9 Oct", topic: "HDLC Dissection", isCompleted: true, isWeekend: false },
          { dayNum: "34", dateStr: "Sat 10 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "35", dateStr: "Sun 11 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "36", dateStr: "Mon 12 Oct", topic: "HES Bidirectional", isCompleted: true, isWeekend: false },
          { dayNum: "37", dateStr: "Tue 13 Oct", topic: "RF Mesh & Routing", isCompleted: true, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 7",
        weekTitle: "MDM, VEE & Data Pipeline",
        dateRange: "14 Oct – 20 Oct",
        completedStatus: "4/5 completed",
        days: [
          { dayNum: "38", dateStr: "Wed 14 Oct", topic: "MDMS Ingestion", isCompleted: true, isWeekend: false },
          { dayNum: "39", dateStr: "Thu 15 Oct", topic: "VEE Rule Setup", isCompleted: true, isWeekend: false },
          { dayNum: "40", dateStr: "Fri 16 Oct", topic: "Interval Profiling", isCompleted: true, isWeekend: false },
          { dayNum: "41", dateStr: "Sat 17 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "42", dateStr: "Sun 18 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "43", dateStr: "Mon 19 Oct", topic: "Tamper Analytics", isCompleted: true, isWeekend: false },
          { dayNum: "44", dateStr: "Tue 20 Oct", topic: "Discom CIS Flow", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 8",
        weekTitle: "Security, Encryption & Cloud",
        dateRange: "21 Oct – 27 Oct",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "45", dateStr: "Wed 21 Oct", topic: "HLS Authentication", isCompleted: false, isWeekend: false },
          { dayNum: "46", dateStr: "Thu 22 Oct", topic: "AES-128 Key Gen", isCompleted: false, isWeekend: false },
          { dayNum: "47", dateStr: "Fri 23 Oct", topic: "AWS/Azure Cloud", isCompleted: false, isWeekend: false },
          { dayNum: "48", dateStr: "Sat 24 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "49", dateStr: "Sun 25 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "50", dateStr: "Mon 26 Oct", topic: "Kafka Stream", isCompleted: false, isWeekend: false },
          { dayNum: "51", dateStr: "Tue 27 Oct", topic: "Microservices", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 9",
        weekTitle: "Analytics & Loss Calculations",
        dateRange: "28 Oct – 03 Nov",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "52", dateStr: "Wed 28 Oct", topic: "AT&C Loss Math", isCompleted: false, isWeekend: false },
          { dayNum: "53", dateStr: "Thu 29 Oct", topic: "Energy Balancing", isCompleted: false, isWeekend: false },
          { dayNum: "54", dateStr: "Fri 30 Oct", topic: "Peak Load Mgmt", isCompleted: false, isWeekend: false },
          { dayNum: "55", dateStr: "Sat 31 Oct", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "56", dateStr: "Sun 1 Nov", topic: "Kannada Rajyotsava", isCompleted: false, isWeekend: false, isHoliday: true, holidayName: "State Holiday" },
          { dayNum: "57", dateStr: "Mon 2 Nov", topic: "AI/ML Theft Detect", isCompleted: false, isWeekend: false },
          { dayNum: "58", dateStr: "Tue 3 Nov", topic: "Telemetry Viz", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 10",
        weekTitle: "Mid-Term Immersion Assessment",
        dateRange: "04 Nov – 05 Nov",
        completedStatus: "0/2 upcoming",
        days: [
          { dayNum: "59", dateStr: "Wed 4 Nov", topic: "Mid-Term Sandbox", isCompleted: false, isWeekend: false },
          { dayNum: "60", dateStr: "Thu 5 Nov", topic: "60-Day Review", isCompleted: false, isWeekend: false, isReflection: true }
        ]
      }
    ]
  },
  {
    monthId: 3,
    monthName: "Month 3",
    phaseTitle: "Live Capstone Project & Discom Deployment",
    dateRange: "06 Nov – 05 Dec",
    dayRange: "Days 61 – 90",
    summary: "End-to-end Capstone implementation, Hardware-in-Loop bench testing, utility staging deployment, and graduation felicitation.",
    completionStat: "Upcoming Capstone Phase",
    weeks: [
      {
        weekNumber: "WEEK 11",
        weekTitle: "Capstone Project Inception",
        dateRange: "06 Nov – 12 Nov",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "61", dateStr: "Fri 6 Nov", topic: "Problem Statement", isCompleted: false, isWeekend: false },
          { dayNum: "62", dateStr: "Sat 7 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "63", dateStr: "Sun 8 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "64", dateStr: "Mon 9 Nov", topic: "Architecture Design", isCompleted: false, isWeekend: false },
          { dayNum: "65", dateStr: "Tue 10 Nov", topic: "HIL Lab Setup", isCompleted: false, isWeekend: false },
          { dayNum: "66", dateStr: "Wed 11 Nov", topic: "DLMS Simulator", isCompleted: false, isWeekend: false },
          { dayNum: "67", dateStr: "Thu 12 Nov", topic: "API Testbeds", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 12",
        weekTitle: "Core Development & Testing",
        dateRange: "13 Nov – 19 Nov",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "68", dateStr: "Fri 13 Nov", topic: "Pipeline Dev", isCompleted: false, isWeekend: false },
          { dayNum: "69", dateStr: "Sat 14 Nov", topic: "Diwali Holiday", isCompleted: false, isWeekend: false, isHoliday: true, holidayName: "Festival" },
          { dayNum: "70", dateStr: "Sun 15 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "71", dateStr: "Mon 16 Nov", topic: "Packet Sniffing", isCompleted: false, isWeekend: false },
          { dayNum: "72", dateStr: "Tue 17 Nov", topic: "Stress Testing", isCompleted: false, isWeekend: false },
          { dayNum: "73", dateStr: "Wed 18 Nov", topic: "Remote Cutoff", isCompleted: false, isWeekend: false },
          { dayNum: "74", dateStr: "Thu 19 Nov", topic: "Security Audit", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 13",
        weekTitle: "Discom Utility Sandboxes",
        dateRange: "20 Nov – 26 Nov",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "75", dateStr: "Fri 20 Nov", topic: "Billing Integration", isCompleted: false, isWeekend: false },
          { dayNum: "76", dateStr: "Sat 21 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "77", dateStr: "Sun 22 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "78", dateStr: "Mon 23 Nov", topic: "High Volume Scale", isCompleted: false, isWeekend: false },
          { dayNum: "79", dateStr: "Tue 24 Nov", topic: "Disaster Recovery", isCompleted: false, isWeekend: false },
          { dayNum: "80", dateStr: "Wed 25 Nov", topic: "Failure Analysis", isCompleted: false, isWeekend: false },
          { dayNum: "81", dateStr: "Thu 26 Nov", topic: "Consumer App APIs", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 14",
        weekTitle: "Final Delivery & Showcase",
        dateRange: "27 Nov – 03 Dec",
        completedStatus: "0/5 upcoming",
        days: [
          { dayNum: "82", dateStr: "Fri 27 Nov", topic: "Prod Readiness", isCompleted: false, isWeekend: false },
          { dayNum: "83", dateStr: "Sat 28 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "84", dateStr: "Sun 29 Nov", topic: "Weekend", isCompleted: false, isWeekend: true },
          { dayNum: "85", dateStr: "Mon 30 Nov", topic: "Client Demo", isCompleted: false, isWeekend: false },
          { dayNum: "86", dateStr: "Tue 1 Dec", topic: "Bug Triage & Fix", isCompleted: false, isWeekend: false },
          { dayNum: "87", dateStr: "Wed 2 Dec", topic: "Documentation", isCompleted: false, isWeekend: false },
          { dayNum: "88", dateStr: "Thu 3 Dec", topic: "Capstone Defense", isCompleted: false, isWeekend: false }
        ]
      },
      {
        weekNumber: "WEEK 15",
        weekTitle: "Graduation & Deployment",
        dateRange: "04 Dec – 05 Dec",
        completedStatus: "0/2 upcoming",
        days: [
          { dayNum: "89", dateStr: "Fri 4 Dec", topic: "Leadership Review", isCompleted: false, isWeekend: false },
          { dayNum: "90", dateStr: "Sat 5 Dec", topic: "Role Deployment", isCompleted: false, isWeekend: false, isReflection: true }
        ]
      }
    ]
  }
];
