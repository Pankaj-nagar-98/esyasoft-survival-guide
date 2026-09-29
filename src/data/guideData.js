/**
 * The Esyasoft Survival & Thriving Guide - Batch 2026 Edition
 * Core Data Store
 */

export const ESYASOFT_DATA = {
  company: {
    name: "Esyasoft Holding",
    tagline: "Solution for a smart and connected world.",
    description: "Esyasoft is a global leader driving utility digital transformation across 10+ countries with 50M+ connected endpoints. From Smart Metering (AMI) and Meter Data Management (MDM) to AI-powered grid edge intelligence, Esyasoft powers modern utilities to achieve zero-carbon and high-efficiency operations.",
    stats: [
      { label: "Connected Smart Endpoints", value: "50M+" },
      { label: "Global Utilities Served", value: "40+" },
      { label: "Countries Active", value: "10+" },
      { label: "Gartner Recognition", value: "Hype Cycle Sample Vendor" }
    ],
    socials: {
      website: "https://esyasoft.com",
      linkedin: "https://www.linkedin.com/company/esyasoft-technologies/",
      youtube: "https://www.youtube.com/@EsyasoftTechnologies",
      instagram: "https://www.instagram.com/esyasoft/"
    }
  },

  batchInfo: {
    cohort: "Batch 2026",
    teamSize: 6,
    programDurationDays: 90,
    currentDay: 15,
    daysCompleted: 15,
    daysRemaining: 75,
    percentage: 16.7,
    motto: "From Campus Graduates to Smart Grid Pioneers",
    goldenQuote: "If you forgot to check in check out you won't get salary! ~ Prabhu"
  },

  teamMembers: [
    { name: "Fresher 1", role: "UI & Grid Architecture Enthusiast", avatar: "01" },
    { name: "Fresher 2", role: "MDM & Data Pipeline Fanatic", avatar: "02" },
    { name: "Fresher 3", role: "IoT & Smart Meter Protocols Whiz", avatar: "03" },
    { name: "Fresher 4", role: "Campus Rec & Foosball Champion", avatar: "04" },
    { name: "Fresher 5", role: "Biometric & Attendance Sentinel", avatar: "05" },
    { name: "Fresher 6", role: "Beach Explorer & Chai Connoisseur", avatar: "06" }
  ],

  roadmap: [
    {
      id: "day-1-2",
      phase: "Phase 1: The Induction",
      badge: "Completed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
      days: "Day 1 – 2",
      title: "Corporate Onboarding, Tools & Welcome to Esyasoft",
      summary: "First steps into corporate life: Laptop provisioning, biometric enrollment, Zoho People setup, Microsoft Outlook & Teams onboarding, and meeting leadership.",
      icon: "laptop",
      architectureSpecs: [
        { label: "IT Asset Provisioning", value: "Enterprise Laptop & MFA", detail: "VPN configuration, Zero-Trust credentials & Wi-Fi access" },
        { label: "HRMS & Attendance", value: "Zoho People Biometrics", detail: "Fingerprint enrollment linked directly with monthly payroll" },
        { label: "Enterprise Collab", value: "Teams & Outlook (@esyasoft)", detail: "Dedicated Batch 2026 cohort channels & executive briefings" },
        { label: "Executive Conclave", value: "Founders & Global Vision", detail: "Orientation with Esyasoft senior leadership and mentorship pairing" }
      ],
      tags: ["Zoho People", "Biometrics", "IT Provisioning", "Teams & Outlook", "Executive Welcome"],
      details: [
        "Met executive leadership & mentors for company overview, mission, and the global smart grid vision.",
        "Biometric Registration & Zoho People Sync: Linked fingerprints with the Zoho People HRMS portal for attendance & salary tracking.",
        "Configured Microsoft Outlook (@esyasoft.com) for formal emails, daily training calendar invites, and Discom briefs.",
        "Joined Microsoft Teams: Setup cohort channels, screen sharing for technical labs, and mentor direct messages.",
        "IT Asset Provisioning: Secured enterprise laptops, VPN credentials, multi-factor authentication (MFA), and Wi-Fi access.",
        "Cohort Bonding: 6 freshers realizing they are now the vanguard of Batch 2026."
      ],
      survivalTip: "Pro tip: Install Microsoft Teams, Outlook, and Zoho People on your mobile device immediately. Regular attendance checks and calendar sync ensure adherence to company operations and seamless training coordination."
    },
    {
      id: "day-3-6",
      phase: "Phase 1: Domain Immersion",
      badge: "Completed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
      days: "Day 3 – 6 (9th – 12th)",
      title: "Smart Grid Basics & AMI Architecture",
      summary: "Understanding how the power grid transforms from dumb copper wires to two-way intelligent communications.",
      icon: "zap",
      architectureSpecs: [
        { label: "Two-Way AMI Grid", value: "Bi-directional Telemetry", detail: "Edge meters, smart relays & Head-End Systems (HES) mesh" },
        { label: "Meter Hardware", value: "Single & 3-Phase Polyphase", detail: "CT/PT industrial meters capturing active/reactive power quality" },
        { label: "Network Topologies", value: "RF Mesh & Cellular", detail: "Sub-GHz mesh networks paired with NB-IoT and 4G fallback" },
        { label: "Discom Business Models", value: "Capex vs Opex / Totex", detail: "RDSS mandates, utility SLAs & commercial loss reduction" }
      ],
      tags: ["AMI Architecture", "HES Pipeline", "Polyphase Meters", "RF Mesh", "Cellular NB-IoT"],
      details: [
        "Advanced Metering Infrastructure (AMI): Head-End Systems (HES), Smart Meters, and Communication Gateways.",
        "Single-phase vs Three-phase meters, CT/PT meters for industrial loads.",
        "RF Mesh vs Cellular (NB-IoT, 4G, 2G fallback) topologies.",
        "Understanding Discom business models and how Esyasoft cuts power distribution losses."
      ],
      survivalTip: "When a trainer says 'AMI', don't think of French friendship ('ami')—think billions of telemetry packets traversing the grid!"
    },
    {
      id: "day-7-10",
      phase: "Phase 1: Domain Immersion",
      badge: "Completed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
      days: "Day 7 – 10 (13th – 16th)",
      title: "Meter Data Management (MDM) & VEE",
      summary: "Diving deep into Esyasoft's flagship domain: Ingesting millions of meter reads and crunching billing-grade data.",
      icon: "database",
      architectureSpecs: [
        { label: "Validation Engine", value: "Spike & Drift VEE", detail: "Zero-consumption spike flags & clock drift anomaly correction" },
        { label: "Estimation Models", value: "Historical Linear / ML", detail: "Interpolates missing 15-min intervals for billing determinants" },
        { label: "Editing Audit Trail", value: "Versioned Traceability", detail: "Immutable edit history compliant with utility regulatory audits" },
        { label: "Throughput Scale", value: "10M+ reads / min", detail: "Batch ingestion into CIS, SAP IS-U & Oracle CC&B billing engines" }
      ],
      tags: ["VEE Engine", "15-min Interval Data", "CIS Integration", "Audit Trail", "Billing Determinants"],
      details: [
        "Validation, Estimation, and Editing (VEE): Catching zero-consumption spikes, clock drifts, and meter tampering.",
        "Interval Data vs Register Data (15-min block data vs cumulative kWh).",
        "Integration with Customer Information Systems (CIS) and Utility Billing engines.",
        "Handling massive batch throughput and database indexing strategies."
      ],
      survivalTip: "If VEE flags a spike at 3 AM, either the factory started a third shift or someone tapped the line. Welcome to utility forensics!"
    },
    {
      id: "day-11-13",
      phase: "Phase 1: Domain Immersion",
      badge: "Completed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
      days: "Day 11 – 13 (17th – 19th)",
      title: "IoT Protocols & DLMS/COSEM Standards",
      summary: "Decoding the language that smart meters speak: DLMS/COSEM, OBIS codes, and cryptographic security.",
      icon: "cpu",
      architectureSpecs: [
        { label: "Protocol Standard", value: "IEC 62056 DLMS/COSEM", detail: "Standardized object-oriented interface classes for utility endpoints" },
        { label: "OBIS Code Index", value: "1.0.1.8.0.255 (+A Import)", detail: "Object Identification System for active, reactive & demand registers" },
        { label: "Crypto Security", value: "AES-GCM-128 & HLS 5", detail: "Mutual authentication, GMAC integrity verification & key rotation" },
        { label: "Transport Topologies", value: "RF Mesh & NB-IoT / 4G", detail: "Packet sniffing, frame parsing & sub-GHz frequency agility" }
      ],
      tags: ["DLMS/COSEM", "OBIS Codes", "AES-GCM-128", "HLS 5", "Packet Sniffing"],
      details: [
        "DLMS (Device Language Message Specification) & COSEM (Companion Specification for Energy Metering).",
        "Understanding OBIS (Object Identification System) codes (e.g., 1.0.1.8.0.255 for active energy).",
        "Security suites: High-level security (HLS), AES-GCM-128 encryption, public key infrastructure.",
        "Hands-on packet sniffer demos and parsing raw hex frames."
      ],
      survivalTip: "Hexadecimals will begin appearing in your dreams. If you see '00 01 00 01', you are officially fluent in meter talk!"
    },
    {
      id: "day-14-15",
      phase: "Phase 1: Domain Immersion",
      badge: "Completed (Day 15!)",
      badgeClass: "bg-emerald-200 text-emerald-900 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-200 dark:border-emerald-700 font-bold",
      days: "Day 14 – 15 (20th – 23rd)",
      title: "AI Analytics, Loss Reduction & Discom Operations",
      summary: "Turning raw sensor data into commercial intelligence: AT&C loss reduction, power theft detection, and load forecasting.",
      icon: "trending-up",
      architectureSpecs: [
        { label: "AT&C Loss Mitigation", value: "18% Loss Reduction", detail: "Energy balancing between distribution transformers & consumer meters" },
        { label: "Tamper Forensics AI", value: "Magnetic / Neutral Bypass", detail: "Deep learning classification of tamper signatures and reverse flow" },
        { label: "Transformer Health", value: "Secondary Thermal Stress", detail: "Phase imbalance detection preventing distribution transformer blowouts" },
        { label: "Load Forecasting", value: "LSTM Weather-Weighted", detail: "Day-ahead predictive peak demand dispatch for Discom energy traders" }
      ],
      tags: ["AT&C Loss", "Energy Balancing", "Tamper AI", "Transformer Health", "Load Forecasting"],
      details: [
        "AT&C (Aggregate Technical & Commercial) loss reduction strategies.",
        "Transformer load balancing & early failure prediction via AI/ML.",
        "Real-time tamper event classification: Magnetic tamper, neutral disconnect, reverse current.",
        "15-Day Milestone Celebration: Surviving the foundational crucible!"
      ],
      survivalTip: "Take a deep breath and give yourself credit! You now know more about energy grids than 99% of computer science graduates."
    },
    {
      id: "month-2",
      phase: "Phase 2: The Forge",
      badge: "Upcoming (Days 16–60)",
      badgeClass: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
      days: "Month 2 (Days 16 – 60)",
      title: "Hands-on Architecture & Sandbox Testing",
      summary: "Moving from theory to battle testing: Writing sandbox microservices, running simulated Discom feeds, and tuning queries.",
      icon: "code",
      architectureSpecs: [
        { label: "Virtual Meter Fleet", value: "100,000 Sim Endpoints", detail: "Simulates high-velocity load profiles & interval packet storms" },
        { label: "Microservices Stack", value: "Docker / K8s Cloud", detail: "Cloud-native event streaming pipelines & Redis cache layers" },
        { label: "Custom Rule Testing", value: "Edge Gateway Firmware", detail: "FOTA updates & custom VEE validation rule writing in sandbox" },
        { label: "Production CI/CD", value: "Code Hygiene & Reviews", detail: "Pair programming with principal architects & static vulnerability scans" }
      ],
      tags: ["100K Sim Meters", "Microservices", "Edge Firmware", "FOTA", "CI/CD"],
      details: [
        "Building real test pipelines in the Esyasoft cloud & sandbox environment.",
        "Simulating 100,000 virtual smart meters pushing high-frequency interval data.",
        "Custom VEE rule development and edge gateway firmware testing.",
        "Code reviews with senior architects and learning enterprise production hygiene."
      ],
      survivalTip: "Don't fear breaking the sandbox. The sandbox is made to be broken so production stays unshakeable!"
    },
    {
      id: "month-3",
      phase: "Phase 3: The Ascendance",
      badge: "Upcoming (Days 61–90)",
      badgeClass: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
      days: "Month 3 (Days 61 – 90)",
      title: "Live Utility Shadowing & Capstone Pitch",
      summary: "Shadowing live state/international Discom deployments, presenting batch capstone solutions, and graduating into project teams.",
      icon: "award",
      architectureSpecs: [
        { label: "Field Shadowing", value: "Live State Discoms", detail: "Shadowing senior solution architects on active utility concession sites" },
        { label: "Batch 2026 Capstone", value: "Full-Stack Utility Demo", detail: "End-to-end design & defense of innovative smart grid solution" },
        { label: "Executive Conclave", value: "Board Pitch & Defense", detail: "Formal capstone presentation to Esyasoft Group CEO & C-Suite" },
        { label: "Program Graduation", value: "Full Solutions Engineer", detail: "Formal transition into specialized engineering and data pods" }
      ],
      tags: ["Field Shadowing", "Capstone Defense", "Executive Pitch", "Full Engineer"],
      details: [
        "Shadowing senior engineering leads on active utility installations (India & Global projects).",
        "Developing the Batch 2026 Innovation Capstone Project.",
        "Final presentation pitch to Esyasoft executive leadership & HR.",
        "Graduation ceremony: Transitioning from trainees to Full-Fledged Esyasoft Engineers!"
      ],
      survivalTip: "Your network is your superpower. By Month 3, have a go-to senior friend in Architecture, Backend, and DevOps."
    }
  ],

  campusHub: {
    insideCampus: [
      {
        id: "gym",
        title: "Gym & Fitness Studio",
        category: "Fitness & Wellness",
        icon: "dumbbell",
        tag: "High Energy",
        image: "assets/gym-workout.jpg",
        timing: "06:00 AM – 08:30 AM & 06:30 PM – 09:30 PM",
        description: "Equipped with cardio treads, dumbbells, cable machines, and yoga mats to de-stress after complex DLMS/COSEM lectures.",
        etiquette: [
          "Re-rack your weights! Leaving 20kg plates on the bar will earn you silent side-eyes.",
          "Wipe down equipment after heavy cardio sessions.",
          "Early morning crew (6:30 AM) gets the cleanest playlist choices."
        ],
        humor: "Bench press your worries about VEE data validation rules. Chest day keeps the bugs away."
      },
      {
        id: "table-tennis",
        title: "Table Tennis Arena",
        category: "Indoor Sports",
        icon: "activity",
        tag: "Epic Rallies",
        image: "assets/table-tennis-room.jpg",
        timing: "12:30 PM – 01:30 PM & 05:30 PM onwards",
        description: "The most contested real estate on campus. Where fast reflexes and backhand slices settle sprint disagreements.",
        etiquette: [
          "Winner stays on, but standard etiquette limits consecutive wins to 3 matches if folks are waiting.",
          "Check the ball condition before smashing it into the lighting fixtures.",
          "Friendly trash talk encouraged; broken paddles strictly penalized!"
        ],
        humor: "Your ping-pong spin should have fewer unexpected turns than your first Python recursion script."
      },
      {
        id: "foosball",
        title: "Foosball & Gaming Arena",
        category: "Team Battles",
        icon: "target",
        tag: "2v2 Warfare",
        image: "assets/foosball-rec-arena.jpg",
        timing: "05:00 PM – 08:00 PM",
        description: "The ultimate 2-vs-2 tension releaser alongside our billiards tables. Spinners beware: the office follows official rules!",
        etiquette: [
          "Follow standard recreation rules: avoid aggressive 360-degree rod spinning to prevent table wear and excessive noise.",
          "Keep goal celebrations within reasonable decibels during ongoing meetings.",
          "Defenders: Always clear the ball swiftly, like clearing cache before a demo."
        ],
        humor: "Remember: Defending your goal in Foosball is just like handling null pointer exceptions in production."
      },
      {
        id: "library",
        title: "Campus Library & Study Lounge",
        category: "Focus & Quiet Zone",
        icon: "book-open",
        tag: "Deep Focus",
        image: "assets/library-lounge.jpg",
        timing: "08:00 AM – 10:30 PM",
        description: "Modern open architectural study haven featuring backlit geometric wooden bookshelves, quiet ergonomic reading pods, and smart-grid technical literature.",
        etiquette: [
          "Maintain quiet whisper mode in the reading cubicles.",
          "Return technical volumes to their corresponding geometric wooden shelves.",
          "Perfect spot for studying DLMS/COSEM OBIS tables and reading power grid manuals without disturbance."
        ],
        humor: "The only zone on campus where 100% peace of mind and zero packet loss are scientifically guaranteed."
      },
      {
        id: "billiards",
        title: "Billiards & Snooker Hall",
        category: "Precision & Chill",
        icon: "circle",
        tag: "Strategy Corner",
        timing: "06:30 PM – 10:00 PM",
        description: "Velvet felt table for calculated angle shots. Perfect for unwinding after dinner with your cohort.",
        etiquette: [
          "Chalk the cue tip over the floor, never directly over the green baize felt.",
          "Don't lean on the table with a coffee cup in hand—spills mean permanent bad karma.",
          "Return the cue sticks to the rack when finished."
        ],
        humor: "Calculated bank shots in pool are basically 2D vector geometry. Tell everyone you are practicing physics for smart grid algorithms."
      },
      {
        id: "lounge",
        title: "Recreation Lounge & Pantry",
        category: "Social Hub",
        icon: "coffee",
        tag: "Caffeine HQ",
        timing: "Open 24/7",
        description: "The epicenter of gossip, tea breaks, and whiteboard brainstorming. Features bean-to-cup coffee and hot snacks.",
        etiquette: [
          "If you finish the coffee beans or hot water, alert pantry staff or refill—don't leave an empty carafe!",
          "Clean up paper cups and snack wrappers; the pantry is a shared sanctuary.",
          "Ideal spot for cross-team networking between 4:00 PM and 4:30 PM."
        ],
        humor: "Coffee turns code into smart grid telemetry. Refill with caution and reverence."
      }
    ],

    survivalAccom: [
      {
        id: "room-setup",
        title: "Room Setup & Living Essentials",
        category: "Living Checklist",
        icon: "home",
        tag: "Must-Haves",
        image: "assets/accommodation-room.jpg",
        description: "Your training hostel/accommodation room is your tactical basecamp for the next 90 days. Get it dialed in right!",
        checklist: [
          "Multi-plug spike guard with surge protector (for laptop, phone, power bank, smartwatch).",
          "Good mosquito repellent / GoodKnight liquid vaporizers.",
          "Comfortable slip-on slippers for indoor roaming & hostel stairs.",
          "Insulated 1-litre water bottle to keep cold water during hot training afternoons.",
          "Quick-dry microfiber bath towels and compact laundry bag."
        ],
        proTip: "Keep an extra phone charging cable in your training backpack. You will inevitably leave one behind in the conference hall."
      },
      {
        id: "food-hacks",
        title: "Food & Mess Hacks",
        category: "Culinary Survival",
        icon: "utensils",
        tag: "Tummy Secrets",
        image: "assets/cafeteria-breakfast.jpg",
        description: "How to conquer daily cafeteria meals and satisfy late-night coder hunger pangs.",
        checklist: [
          "The Adya Foods Breakfast: Hot poori, vermicelli upma, boiled egg, coconut chutney, curry & cutting chai!",
          "The Dal-Papad Multiplier: Keep a personal jar of spicy pickle and roasted papad to elevate standard dal-rice.",
          "Curd Rice on Warm Days: When afternoon energy dips, curd rice is your best cooling companion.",
          "Emergency Midnight Kit: 4 packets of Maggi, roasted peanuts, makhana, and dark chocolate bars in your drawer.",
          "Local Delivery Favorites: Save the top-rated local Swiggy/Zomato biryani & paratha spots in your cohort group chat."
        ],
        proTip: "Never skip the 8:15 AM breakfast. 3 hours of MDM architecture on an empty stomach will make your head spin like a 3-phase meter!"
      },
      {
        id: "daily-routine",
        title: "The Golden Daily Routine",
        category: "Time Management",
        icon: "clock",
        tag: "Schedule Mastery",
        description: "The cadence followed by the top 10% of freshers to stay refreshed, fit, and on time.",
        timeline: [
          { time: "07:15 AM", task: "Wake-up & 20 min morning stretch or gym session." },
          { time: "08:15 AM", task: "Cafeteria breakfast & coffee refill." },
          { time: "08:50 AM", task: "Arrive at training facility. Complete biometric check-in (attendance compliance)." },
          { time: "09:00 AM", task: "Morning Domain Deep-Dive / Lecture session." },
          { time: "01:00 PM", task: "Lunch & quick walk in the garden." },
          { time: "02:00 PM", task: "Afternoon hands-on lab / coding sandbox." },
          { time: "05:30 PM", task: "Evening tea & recreation (TT, Foosball, Billiards)." },
          { time: "06:45 PM", task: "Complete biometric check-out (06:30 PM shift completion recorded)." },
          { time: "08:00 PM", task: "Dinner, cohort banter, weekend trip planning, and restful sleep." }
        ],
        proTip: "Set a recurring daily reminder at 08:50 AM for biometric check-in to maintain 100% attendance compliance."
      },
      {
        id: "video-tour",
        title: "Accommodation Video Showcase",
        category: "Video Tour",
        icon: "video",
        tag: "Living Tour",
        description: "Take a virtual walkthrough of our batch accommodation, dorm rooms, recreation grounds, and facilities.",
        videoNote: "You can watch our batch's accommodation video directly below or update the video link anytime using the 'Customize Video' button!"
      }
    ],

    networking: [
      {
        id: "talk-to-seniors",
        title: "How to Talk to Seniors Without Sweating",
        icon: "users",
        badge: "Golden Etiquette",
        content: "Seniors at Esyasoft are remarkably approachable, but they value clarity. When you hit a roadblock in smart grid or cloud architecture, do 10 minutes of research first. Instead of asking 'What is this?', ask 'I checked the DLMS OBIS specs for active power, is this the right association profile?'. They will love your initiative."
      },
      {
        id: "batch-pact",
        title: "The Batch 2026 Covenant & Celebrations",
        icon: "heart-handshake",
        badge: "Cohort Bond",
        image: "assets/ethnic-celebration.jpg",
        content: "A batch that stays together thrives together. From formal induction to traditional ethnic day celebrations under the executive lounge chandelier, we celebrate milestones together. Share notes, test each other's code, remind each other to punch out, and make memories that will last long after the 90 days."
      },
      {
        id: "coffee-chats",
        title: "The 4:15 PM Coffee Machine Diplomacy",
        icon: "coffee",
        badge: "Hidden Knowledge",
        content: "Some of the deepest insights into upcoming company deployments, international projects in UAE, US, and state Discoms are shared casually near the pantry coffee machine. Be a good listener, ask thoughtful questions, and respect everyone's time."
      }
    ]
  },

  campusMemories: [
    {
      id: "campus-all-hands",
      title: "Batch 2026 Induction & All-Hands Meet",
      location: "Auditorium & Training HQ",
      tag: "Day 1 Kickoff",
      image: "assets/induction-all-hands.jpg",
      caption: "The historic Day 1 kickoff with the entire cohort and leadership in official black polos."
    },
    {
      id: "campus-festive",
      title: "Festive & Traditional Day Celebration",
      location: "Executive Lounge",
      tag: "Ethnic Day",
      image: "assets/ethnic-celebration.jpg",
      caption: "Celebrating cohort milestones in traditional ethnic finery under the grand chandelier."
    },
    {
      id: "campus-tt-arena",
      title: "Table Tennis Championship Arena",
      location: "Recreation Hub Level 2",
      tag: "Table Tennis",
      image: "assets/table-tennis-room.jpg",
      caption: "Tournament-grade ping-pong arena for high-speed evening rallies after domain lectures."
    },
    {
      id: "campus-mess-breakfast",
      title: "The Champion's Cafeteria Breakfast",
      location: "Cafeteria & Dining Hall",
      tag: "Cafeteria Fuel",
      image: "assets/cafeteria-breakfast.jpg",
      caption: "Hot pooris, upma, boiled egg, coconut chutney, curry, and steaming cutting chai."
    },
    {
      id: "campus-gym-arena",
      title: "Campus Gym & Fitness Arena",
      location: "Wellness Center Level 1",
      tag: "Fitness & Iron",
      image: "assets/gym-workout.jpg",
      caption: "Cardio zone, heavy dumbbells, and cable towers for evening de-stress workouts."
    },
    {
      id: "campus-foosball-arena",
      title: "Foosball & Cue Sports Arena",
      location: "Recreation Hub Level 2",
      tag: "Games Lounge",
      image: "assets/foosball-rec-arena.jpg",
      caption: "Championship foosball and snooker tables for tactical 2v2 evening battles."
    },
    {
      id: "campus-library-lounge",
      title: "Architectural Library & Study Lounge",
      location: "Central Academic Block",
      tag: "Quiet Pod",
      image: "assets/library-lounge.jpg",
      caption: "Modern study oasis with backlit wooden shelving and plush focus pods."
    }
  ],

  coastalEscapes: [
    {
      id: "malpe-beach-card",
      title: "Malpe Beach & Water Sports",
      location: "Malpe, Udupi Coast",
      distance: "52 km from GCC",
      tag: "Water Sports",
      image: "assets/malpe-beach.jpg",
      caption: "Golden sands, jet-skis, parasailing, and fresh coastal fish thalis by the Arabian Sea."
    },
    {
      id: "st-marys-island-card",
      title: "St. Mary's Island Basalt Wonders",
      location: "Arabian Sea (Off Malpe)",
      distance: "56 km (Ferry Access)",
      tag: "Basalt Wonder",
      image: "assets/st-marys-island.jpg",
      caption: "60-million-year-old hexagonal volcanic basalt rocks and turquoise ocean waters."
    },
    {
      id: "sunset-point-card",
      title: "Malpe Sea Walk & Sunset Point",
      location: "Malpe Jetty & Pier",
      distance: "53 km from GCC",
      tag: "Sunset Vista",
      image: "assets/sunset-point.jpg",
      caption: "450-meter ocean promenade jutting into the waves with the iconic Jatayu statue."
    },
    {
      id: "sol-cafe-card",
      title: "Sol Cafe by the Sea",
      location: "Yermal Beach",
      distance: "34 km from GCC",
      tag: "Beachfront Cafe",
      image: "assets/sol-cafe.jpg",
      caption: "Oceanfront infinity pool deck, wood-fired pizzas, and artisanal cold brew."
    },
    {
      id: "blue-flag-beach-card",
      title: "Padubidri Blue Flag Beach",
      location: "Padubidri End Point",
      distance: "28 km from GCC",
      tag: "Certified Eco Beach",
      image: "assets/blue-flag-beach.jpg",
      caption: "Internationally certified clean eco-beach with safe swimming and solar-lit walkways."
    },
    {
      id: "nexus-mall-card",
      title: "Nexus Mall Mangaluru",
      location: "Pandeshwar Road",
      distance: "15 km from GCC",
      tag: "Multiplex & Arcade",
      image: "assets/nexus-mall.png",
      caption: "6-screen PVR multiplex, Timezone arcade & bowling, and multi-cuisine dining."
    }
  ],

  faqs: [
    {
      id: "faq-q1",
      category: "training",
      categoryName: "Schedule & Sessions",
      question: "Q1. What time do sessions start?",
      answer: "Sessions start at <strong>9:30 AM, Monday to Friday</strong>. Please ensure you are seated in your assigned training lab room before 09:30 AM, having completed your biometric check-in at the reception turnstiles.",
      icon: "clock"
    },
    {
      id: "faq-q2",
      category: "training",
      categoryName: "Schedule & Sessions",
      question: "Q2. When does the day finish?",
      answer: "The finishing time depends on the specific session and content planned for that day. The Training Team will share the plan and expected dismissal in advance (typically between 06:30 PM and 06:45 PM followed by biometric checkout).",
      icon: "clock"
    },
    {
      id: "faq-q3",
      category: "campus",
      categoryName: "Breaks & Meals",
      question: "Q3. How many breaks are there?",
      answer: "There are two tea breaks of approximately <strong>20 minutes each</strong> (morning and evening), and one lunch break of approximately <strong>1 hour</strong> (typically 01:00 PM – 02:00 PM at Foods Adya dining hall).",
      icon: "utensils"
    },
    {
      id: "faq-q4",
      category: "training",
      categoryName: "Schedule & Sessions",
      question: "Q4. Are weekends off?",
      answer: "Working days are <strong>Monday to Friday</strong>. Saturday and Sunday are normally off unless a specific programme activity, hackathon, or workshop is communicated in advance.",
      icon: "calendar-off"
    },
    {
      id: "faq-q5",
      category: "zoho",
      categoryName: "Zoho & Attendance",
      question: "Q5. How do I apply for leave and manage attendance?",
      answer: "Leave, holidays, and attendance are applied for and tracked through <strong>Zoho People</strong>. Attendance regularisation must be submitted before 11:00 AM on the day following any missed punch. If you are unsure about the process, reach out to HR.",
      icon: "fingerprint"
    },
    {
      id: "faq-q6",
      category: "zoho",
      categoryName: "Zoho & Attendance",
      question: "Q6. What do I need to complete in Zoho?",
      answer: "From Day 1 you receive a Zoho onboarding link. Complete your <strong>personal details, verified bank account details and IFSC, university/degree information, certificates, emergency contacts, address information</strong>, and any other requested profile fields.",
      icon: "mail"
    },
    {
      id: "faq-q7",
      category: "campus",
      categoryName: "Campus Life & Attire",
      question: "Q7. What should I wear?",
      answer: "On <strong>Days 1–2</strong>, wear the official black Esyasoft T-shirt supplied in your welcome kit. After orientation, the dress code is <strong>business formals</strong> for Monday to Thursday and <strong>business casuals</strong> for Friday.",
      icon: "shirt"
    },
    {
      id: "faq-q8",
      category: "zoho",
      categoryName: "Salary & Payroll",
      question: "Q8. When is salary paid?",
      answer: "Salary is generally credited on the <strong>last working day of the month</strong> directly to the bank account registered in your Zoho profile. Remember Prabhu's golden rule: 100% check-in and check-out compliance is mandatory to prevent salary holds!",
      icon: "fingerprint"
    },
    {
      id: "faq-q9",
      category: "training",
      categoryName: "Teams & Squads",
      question: "Q9. Which team will I join?",
      answer: "Everyone joins initially as a <strong>Graduate Engineer Trainee (GET)</strong>. Final role and team alignment depends on programme progression, module assessments, and organizational requirements—it has not been assigned yet.",
      icon: "users"
    },
    {
      id: "faq-q10",
      category: "training",
      categoryName: "Roadmap & Specialization",
      question: "Q10. What happens after the first 30 days?",
      answer: "The Graduate Programme continues beyond 30 days through technical foundation, specialization, and eventually team/role deployment. For the next 60 days, there is intensive technical training depending on live business projects and graduate trainee preferences.",
      icon: "users"
    },
    {
      id: "faq-q11",
      category: "zoho",
      categoryName: "Onboarding Documents",
      question: "Q11. What documents do I need to keep ready for onboarding?",
      answer: "Keep clear soft copies of applicable qualifications (10th, 12th/Diploma, Bachelor's, Master's/MBA, or other certificates), a government-issued ID (Aadhaar & PAN), and bank details. If your final degree is pending, keep your provisional degree or course completion certificate.",
      icon: "mail"
    },
    {
      id: "faq-q12",
      category: "campus",
      categoryName: "Location & Travel",
      question: "Q12. Where is the training centre and how is travel arranged?",
      answer: "The centre is <strong>Esyasoft Global Capability Center, Kolambe Proper, Karnataka 574142</strong>. It is approx 10 km from Mangaluru Airport and 20 km from the Central Railway Station. The Admin team coordinates travel support where applicable.",
      icon: "bus"
    },
    {
      id: "faq-q13",
      category: "campus",
      categoryName: "Accommodation & Hostel",
      question: "Q13. What is provided in the shared accommodation?",
      answer: "Shared accommodation is provided in <strong>3 BHK and 4 BHK units within the GCC campus</strong> (no daily commute). It includes basic kitchen/dining utensils, furniture, electrical appliances (AC, TV, refrigerator, microwave, washing machine), and utilities like an RO water purifier.",
      icon: "utensils"
    },
    {
      id: "faq-q14",
      category: "campus",
      categoryName: "Personal Checklist",
      question: "Q14. What personal items do I need to bring to the campus?",
      answer: "Bring your regular toiletries, personal care essentials, prescribed medicines, mosquito repellent, an umbrella for coastal rains, tissues/waste bags, and <strong>towels (as towels are not provided)</strong>.",
      icon: "shirt"
    },
    {
      id: "faq-q15",
      category: "zoho",
      categoryName: "Day 1 Essentials",
      question: "Q15. What do I need to carry on Day 1?",
      answer: "You do not need to carry any hard copies of documents. Just keep soft copies of 10th certificate, 12th certificate, Bachelor's, identity proof (Aadhaar & PAN card), and bank details. If final degree certificate is pending, keep the Provisional Certificate or latest marksheets.",
      icon: "mail"
    },
    {
      id: "faq-q16",
      category: "campus",
      categoryName: "Arrival Protocol",
      question: "Q16. Who receives me when I arrive at the training center?",
      answer: "Usually, security personnel or admin/facility staff at the reception desk will check your name against the joining list and guide you to the check-in desk or your allotted room.",
      icon: "users"
    },
    {
      id: "faq-q17",
      category: "campus",
      categoryName: "Arrival Protocol",
      question: "Q17. What if my name is not on the joining list upon arrival?",
      answer: "Do not panic. Ask the reception to call the facility/admin in-charge immediately, and keep your official joining letter or offer email ready on your phone to show as proof to resolve it quickly.",
      icon: "shield-alert"
    },
    {
      id: "faq-q18",
      category: "tools",
      categoryName: "Accounts & Registration",
      question: "Q18. Is there a check-in form or registration process?",
      answer: "There is no physical check-in form or manual registration process initially. You will create an official Microsoft Outlook and Zoho ID, which will be explained and set up during the onboarding process.",
      icon: "mail"
    },
    {
      id: "faq-q19",
      category: "campus",
      categoryName: "Accommodation & Hostel",
      question: "Q19. How are room allocations decided and can I change my roommate?",
      answer: "Rooms are usually allotted batch-wise or randomly by the facility team, shared with 5–7 other joiners in multi-BHK flats. Room changes are possible but not guaranteed; raise a polite request with the facility/admin team.",
      icon: "users"
    },
    {
      id: "faq-q20",
      category: "campus",
      categoryName: "Maintenance & Grievance",
      question: "Q20. What if my room has an issue (AC, water, wiring, etc.)?",
      answer: "Report it to the facility/maintenance desk or the caretaker on your floor. You can also log an official ticket on our Campus Grievance Desk portal and note down your complaint ticket number.",
      icon: "shield-alert"
    },
    {
      id: "faq-q21",
      category: "tools",
      categoryName: "Wi-Fi & Living Provisions",
      question: "Q21. Are bedsheets, pillows, toiletries, and Wi-Fi provided?",
      answer: "Bedsheets, pillow, and blanket are provided. You must carry your own towels and toiletries. High-speed Wi-Fi is provided in rooms and common lounges: <strong>Wi-Fi SSID: Esya-Training</strong>, <strong>Password: P@$$w0rd@123</strong>.",
      icon: "wifi"
    },
    {
      id: "faq-q22",
      category: "campus",
      categoryName: "Mess & Dining",
      question: "Q22. What are the mess timings and food arrangements?",
      answer: "Food is fully included as part of the training package at Foods Adya dining hall. Timings are typically: <strong>Breakfast: 08:00–09:30 AM</strong>, <strong>Lunch: 01:00–02:30 PM</strong>, and <strong>Dinner: 08:00–09:30 PM</strong>. Inform the mess in-charge on Day 1 about dietary restrictions or allergies.",
      icon: "utensils"
    },
    {
      id: "faq-q23",
      category: "tools",
      categoryName: "IT & Laptops",
      question: "Q23. Where do I go for training sessions and are laptops provided?",
      answer: "Check the reception digital notice board or welcome email for your assigned training lab number. Official engineering laptops will be provided during training. Contact IT & Laptop Support for any technical issues.",
      icon: "shield-alert"
    },
    {
      id: "faq-q24",
      category: "campus",
      categoryName: "Campus Code of Conduct",
      question: "Q24. Is there an ID card system and what are the building rules?",
      answer: "You will be provided physical RFID ID cards later; initially, check-in and check-out are done through Zoho and biometric scanners. General rules include: <strong>no outside guests</strong>, keeping common areas clean, <strong>smoking is allowed in the designated outdoor area only</strong>, and <strong>no alcohol permitted on campus</strong> (zero-tolerance).",
      icon: "shield-alert"
    },
    {
      id: "faq-q25",
      category: "campus",
      categoryName: "Curfew & Outings",
      question: "Q25. Can I leave the building or step out on weekdays?",
      answer: "Yes, you can step out for essentials following the required sign-out process. Return before <strong>10:00 PM</strong> according to instructions. If staying outside overnight on weekends, inform your manager and mentor as early as possible.",
      icon: "bus"
    },
    {
      id: "faq-q26",
      category: "campus",
      categoryName: "Emergency Contacts",
      question: "Q26. Who do I contact if HR is not around?",
      answer: "Contact the <strong>Facility In-charge</strong> for room issues, the <strong>Mess In-charge</strong> for food, your <strong>Trainer / Mentor</strong> for schedule queries, and <strong>Campus Security</strong> for ID or access issues.",
      icon: "users"
    },
    {
      id: "faq-q27",
      category: "campus",
      categoryName: "Local Essentials",
      question: "Q27. What are the local essentials (laundry, ATMs, medical emergencies)?",
      answer: "There is an automatic washing machine in each flat (bring your own detergent). In a medical emergency, inform the security desk or facility in-charge immediately; first-aid boxes are on site. ATMs are not available inside the centre; for that, you would need to visit Bajpe town or Mangaluru city.",
      icon: "heart-pulse"
    },
    {
      id: "faq-q28",
      category: "tools",
      categoryName: "Smart Metering & Protocols",
      question: "Q28. What time intervals are supported for Scheduled Data Block Load Profiles (BLP)?",
      answer: "Block Load Profiles (BLP) can be scheduled at intervals of <strong>15, 30, or 60 minutes</strong>. The 15-minute interval represents the standard regulatory cadence for Discom billing and AT&C loss calculations.",
      icon: "clock"
    },
    {
      id: "faq-q29",
      category: "tools",
      categoryName: "Smart Metering & Protocols",
      question: "Q29. What are the remote Configuration Commands available for smart meters?",
      answer: "Commands include <strong>Profile Capture, Demand Interval Period, Billing & TOD schedules, Maximum Demand (MD) Reset, Alarm Filter, Metering Mode, Payment Mode (Prepaid/Postpaid), Load Curtailment, Firmware Upgrade (FOTA)</strong>, and Security Passwords.",
      icon: "shield-alert"
    },
    {
      id: "faq-q30",
      category: "tools",
      categoryName: "Architecture & Integration",
      question: "Q30. What is the core data principle for system integration?",
      answer: "The core data principle is: <strong>'Right Data, Right System, Right Format, Right Time'</strong>. This ensures sub-second telemetry routing, lossless meter ingestion, and billing-grade accuracy.",
      icon: "shield-check"
    },
    {
      id: "faq-q31",
      category: "tools",
      categoryName: "Core Energy Applications",
      question: "Q31. What are the core Energy Applications developed by the company?",
      answer: "The core Energy Applications include <strong>Meter Data Management (MDMS), Energy Audit, Asset Health, Power Quality, and Load Analytics</strong>.",
      icon: "shield-check"
    },
    {
      id: "faq-q32",
      category: "tools",
      categoryName: "Frontend & UX",
      question: "Q32. What frameworks are used for User Experience (UX)?",
      answer: "For User Experience, the enterprise technology landscape utilizes <strong>Blazor and React</strong>, styled with modern utility design systems including Tailwind CSS.",
      icon: "shield-check"
    },
    {
      id: "faq-q33",
      category: "tools",
      categoryName: "Backend & Services",
      question: "Q33. Which languages and API structures are used in Application & Services?",
      answer: "The Application & Services layer is built using <strong>C#, .NET, Python, REST APIs, Background Services, and asynchronous Worker Services</strong>.",
      icon: "shield-check"
    },
    {
      id: "faq-q34",
      category: "tools",
      categoryName: "Architecture & Design",
      question: "Q34. What architecture styles define the system?",
      answer: "The system is built using <strong>Microservices, Actor Model, Event-Driven Architecture, and Distributed Systems</strong>.",
      icon: "shield-check"
    },
    {
      id: "faq-q35",
      category: "tools",
      categoryName: "Messaging & Event Bus",
      question: "Q35. What messaging brokers are utilized for communication?",
      answer: "The technology landscape relies on <strong>RabbitMQ, Apache Kafka, and MQTT</strong> for distributed messaging, telemetry streaming, and edge meter communications.",
      icon: "mail"
    },
    {
      id: "faq-q36",
      category: "tools",
      categoryName: "Databases & Storage",
      question: "Q36. Which databases are used for operational and analytical purposes?",
      answer: "Operational databases include <strong>Microsoft SQL Server and PostgreSQL</strong>, while <strong>ClickHouse</strong> is utilized for high-throughput Analytical Data.",
      icon: "shield-check"
    },
    {
      id: "faq-q37",
      category: "tools",
      categoryName: "Big Data Platform",
      question: "Q37. What components make up the Big Data Platform?",
      answer: "The Big Data Platform comprises <strong>Apache Hadoop, HDFS, Apache Spark, HBase, and Apache Airflow</strong>.",
      icon: "shield-check"
    },
    {
      id: "faq-q38",
      category: "tools",
      categoryName: "Observability & SRE",
      question: "Q38. What tools are used for cross-cutting Observability?",
      answer: "The Observability stack includes <strong>Grafana, Prometheus, Zabbix, ELK Stack, Elasticsearch, and OpenSearch</strong>.",
      icon: "shield-check"
    },
    {
      id: "faq-q39",
      category: "training",
      categoryName: "Career & Roles",
      question: "Q39. After the training would be completed, what would be the potential roles I could get?",
      answer: "The roles depend on one's capabilities, educational background, and business requirements. Potential designations include: <strong>Software Engineer, Backend Engineer, Frontend Engineer, Data Engineer, Database Engineer, AI Engineer, Data Analyst, Data Scientist, DevOps / Platform Engineer, Site Reliability Engineer (SRE), Solution Architect, and Enterprise Architect</strong>.",
      icon: "users"
    }
  ],

  gccMapLocations: [
    {
      id: "esyasoft-gcc",
      name: "Esyasoft Global Capability Centre (GCC)",
      shortName: "Esyasoft GCC Basecamp",
      tag: "Training & R&D Campus",
      category: "campus",
      icon: "building-2",
      image: "assets/induction-all-hands.jpg",
      webImage: "assets/induction-all-hands.jpg",
      address: "Bajpe, Mangaluru, Karnataka 574142",
      query: "Bajpe, Mangaluru, Karnataka",
      mapZoom: 15,
      rating: "4.9",
      reviewsCount: "Batch 2026 Basecamp",
      openStatus: "Open 24/7 (Badge Access)",
      distanceFromGCC: "0 km (HQ Basecamp)",
      travelTime: "Base Location",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bajpe+Mangaluru+Karnataka",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Bajpe,Mangaluru",
      summary: "50,000+ sq. ft. purpose-built state-of-the-art campus in Bajpe, Mangaluru. Features high-voltage smart grid simulation labs, MDM/AMI sandboxes, and modern residential suites for the Batch 2026 cohort.",
      facilities: [
        { icon: "cpu", label: "Smart Grid Simulation & AMI Labs" },
        { icon: "home", label: "Air-Conditioned Trainee Living Suites" },
        { icon: "utensils", label: "Foods Adya Dining Hall & Mess" },
        { icon: "dumbbell", label: "Level 1 Wellness & Iron Fitness Gym" },
        { icon: "trophy", label: "Level 2 Foosball & Billiards Arena" },
        { icon: "book-open", label: "Quiet Architectural Study Library" },
        { icon: "fingerprint", label: "Biometric Check-In & Attendance Station" },
        { icon: "shield-check", label: "24/7 Campus Security & High-Speed Wi-Fi" }
      ],
      tips: "Central facility for the 90-day graduate engineering program. Be sure to complete biometric check-in by 09:00 AM each morning."
    },
    {
      id: "malpe-beach",
      name: "Malpe Beach & Coastal Arena",
      shortName: "Malpe Beach",
      tag: "Water Sports & Sandy Shores",
      category: "beach",
      icon: "palmtree",
      image: "assets/malpe-beach.jpg",
      webImage: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_551312008_20200106121620.jpg",
      address: "Malpe, Udupi District, Karnataka 576108",
      query: "Malpe Beach, Udupi, Karnataka",
      mapZoom: 15,
      rating: "4.6",
      reviewsCount: "45,000+ reviews",
      openStatus: "Open Daily 06:00 AM – 08:30 PM",
      distanceFromGCC: "52 km from Bajpe GCC",
      travelTime: "~1 hr 10 mins drive",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malpe+Beach+Udupi+Karnataka",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Malpe+Beach,Udupi,Karnataka",
      summary: "One of Karnataka's most iconic coastal stretches with sparkling golden sands, thrilling watersports (parasailing, jet-ski, banana boats), beach camel rides, and fresh coastal seafood shacks.",
      facilities: [
        { icon: "waves", label: "Water Sports (Parasailing, Jet Ski, Banana Boat)" },
        { icon: "ship", label: "Main Jetty for St. Mary's Island Ferry" },
        { icon: "life-buoy", label: "Trained Coastal Lifeguards on Duty" },
        { icon: "utensils", label: "Beachfront Seafood Shacks & Coconut Stalls" },
        { icon: "car", label: "Large Vehicle & Tourist Bus Parking" },
        { icon: "sun", label: "Camel Rides & Sunset Viewing Shaded Benches" }
      ],
      tips: "Plan a morning arrival for watersports and ferry to St. Mary's Island, then relax with sunset tender coconuts and fish thalis by the shore!"
    },
    {
      id: "st-marys-island",
      name: "St. Mary's Island (Columnar Basalt Rocks)",
      shortName: "St. Mary's Island",
      tag: "Geological Wonder & Azure Waters",
      category: "island",
      icon: "mountain",
      image: "assets/st-marys-island.jpg",
      webImage: "https://www.holidify.com/images/cmsuploads/compressed/attr_8146_20190405110850.jpg",
      address: "Arabian Sea (4 miles off Malpe Coast), Udupi, Karnataka 576108",
      query: "St. Mary's Island, Malpe, Karnataka",
      mapZoom: 15,
      rating: "4.6",
      reviewsCount: "28,000+ reviews",
      openStatus: "09:00 AM – 05:00 PM (Ferry Weather Permitting)",
      distanceFromGCC: "56 km (52 km road + 20-min ferry ride)",
      travelTime: "~1 hr 30 mins total",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=St.+Mary%27s+Island+Malpe+Karnataka",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Malpe+Ferry+Point,Udupi",
      summary: "A breathtaking National Geological Monument formed 60 million years ago by sub-aerial sub-volcanic lava activity. Celebrated for distinctive hexagonal columnar basalt rock formations jutting from crystal turquoise waters.",
      facilities: [
        { icon: "compass", label: "60-Million-Year-Old Columnar Basalt Pillars" },
        { icon: "ship", label: "Scheduled Passenger Ferry from Malpe Harbor" },
        { icon: "sparkles", label: "Pristine Seashell Beach & Turquoise Lagoon" },
        { icon: "camera", label: "World-Class Geological & Nature Photography" },
        { icon: "trees", label: "Coconut Palm Groves & Shaded Pavilions" },
        { icon: "shield-check", label: "Protected Ecological Heritage Zone" }
      ],
      tips: "Carry your own water and sunglasses as commercial shops are restricted to preserve the island's pristine ecology. Last return ferry leaves promptly at 5:00 PM."
    },
    {
      id: "sunset-point",
      name: "Malpe Sea Walk & Sunset Point",
      shortName: "Near Sunset Point",
      tag: "Arabian Sea Pier & Sunset Vista",
      category: "sunset",
      icon: "sun",
      image: "assets/sunset-point.jpg",
      webImage: "https://www.holidify.com/images/cmsuploads/square/800px-Malpe_Sea_Walk_Aerial_20211009091648.jpg",
      address: "Malpe Tourist Jetty, Malpe, Karnataka 576108",
      query: "Malpe Sea Walk, Malpe, Karnataka",
      mapZoom: 15,
      rating: "4.7",
      reviewsCount: "19,000+ reviews",
      openStatus: "Open Daily 06:00 AM – 09:00 PM",
      distanceFromGCC: "53 km from Bajpe GCC",
      travelTime: "~1 hr 12 mins drive",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malpe+Sea+Walk+Karnataka",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Malpe+Sea+Walk,Udupi,Karnataka",
      summary: "A magnificent 450-meter-long paved ocean promenade extending into the Arabian Sea with the calm Suvarna River on one side and crashing waves on the other. Renowned for its spectacular golden sunset horizon and iconic Jatayu sculpture.",
      facilities: [
        { icon: "navigation", label: "450-Meter Ocean Pier Promenade into Arabian Sea" },
        { icon: "sun", label: "Unobstructed 360° Arabian Sea Sunset Point" },
        { icon: "landmark", label: "Iconic Jatayu Sculpture & Artist Statues" },
        { icon: "coffee", label: "Evening Steaming Chai, Roasted Corn & Snacks" },
        { icon: "car", label: "Designated Tourist Jetty Car Parking" },
        { icon: "wind", label: "Gentle Coastal Sea Breeze & Granite Benches" }
      ],
      tips: "Arrive around 5:30 PM to catch the sunset transition from brilliant orange to deep purple over the horizon. A prime batch memory location!"
    },
    {
      id: "sol-cafe",
      name: "Sol Cafe (Sol by the Sea at Peninsula Del Mar)",
      shortName: "Sol Cafe",
      tag: "Coastal Luxury & Infinity Pool",
      category: "cafe",
      icon: "coffee",
      image: "assets/sol-cafe.jpg",
      webImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      address: "Fisheries Road, Yermal, Bada, Udupi District, Karnataka 574119",
      query: "Sol by the Sea Peninsula Del Mar, Yermal, Karnataka",
      mapZoom: 15,
      rating: "4.7",
      reviewsCount: "1,850+ reviews",
      openStatus: "Open Daily 11:30 AM – 10:30 PM",
      distanceFromGCC: "34 km from Bajpe GCC",
      travelTime: "~45 mins drive (via NH 66)",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sol+by+the+Sea+Peninsula+Del+Mar+Yermal",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Sol+by+the+Sea,Yermal,Karnataka",
      summary: "The trendiest seaside dining destination on coastal Karnataka's shoreline! Features an oceanfront terrace, breathtaking infinity pool overlooking breaking waves, gourmet artisanal coffee, wood-fired pizzas, and sunset cocktail mocktails.",
      facilities: [
        { icon: "coffee", label: "Artisanal Specialty Coffees & Cold Brews" },
        { icon: "waves", label: "Oceanfront Infinity Pool with Sunset Deck" },
        { icon: "utensils", label: "Wood-Fired Neapolitan Pizzas & Coastal Platters" },
        { icon: "music", label: "Acoustic Sunset Beats & Outdoor Lounge" },
        { icon: "car", label: "Valet Vehicle Parking & Resort Concierge" },
        { icon: "camera", label: "Scenic Aesthetics & Golden Hour Terrace Seating" }
      ],
      tips: "Reserve a terrace table by 5:00 PM for front-row sunset vistas over the infinity pool. The perfect weekend celebration spot after mastering MDM sprints!"
    },
    {
      id: "blue-flag-beach",
      name: "Padubidri Blue Flag Beach",
      shortName: "Blue Flag Beach",
      tag: "International Certified Eco Beach",
      category: "beach",
      icon: "trees",
      image: "assets/blue-flag-beach.jpg",
      webImage: "https://www.holidify.com/images/cmsuploads/compressed/65249580_20231212132736.jpg",
      address: "Padubidri End Point, Udupi District, Karnataka 574111",
      query: "Padubidri Blue Flag Beach, Karnataka",
      mapZoom: 15,
      rating: "4.6",
      reviewsCount: "12,500+ reviews",
      openStatus: "Open Daily 09:00 AM – 06:30 PM (Nominal Entry Fee)",
      distanceFromGCC: "28 km from Bajpe GCC",
      travelTime: "~38 mins drive (via NH 66)",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Padubidri+Blue+Flag+Beach+Karnataka",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Padubidri+Blue+Flag+Beach,Karnataka",
      summary: "One of only 12 globally certified Blue Flag beaches in India, recognized by the Foundation for Environmental Education (FEE), Denmark. Renowned for crystal clean shorelines, designated safe swimming zones, solar energy, and zero plastic waste.",
      facilities: [
        { icon: "shield-check", label: "Certified International Blue Flag Eco-Standard" },
        { icon: "waves", label: "Safe Swimming Zone with Dedicated Lifeguards" },
        { icon: "sparkles", label: "Pristine Washrooms & Freshwater Shower Suites" },
        { icon: "sun", label: "100% Solar-Powered Lighting & Paved Walkways" },
        { icon: "ship", label: "Water Sports (Kayaking, Speedboat, Water Skiing)" },
        { icon: "heart", label: "Full Wheelchair Beach Accessibility & Ramps" }
      ],
      tips: "Exceptionally clean water and family-friendly swimming conditions. Only 38 mins from GCC, making it our cohort's favorite quick coastal escape!"
    },
    {
      id: "nexus-mall",
      name: "Nexus Mall Mangaluru (Fiza by Nexus)",
      shortName: "Nexus Mall",
      tag: "Premier Mall, Cinema & Gaming",
      category: "mall",
      icon: "shopping-bag",
      image: "assets/nexus-mall.png",
      webImage: "https://www.holidify.com/images/cmsuploads/compressed/p_20181123160307_20181123160528.PNG",
      address: "Pandeshwar Road, Mangaluru, Karnataka 575001",
      query: "Nexus Fiza Mall, Pandeshwar, Mangaluru",
      mapZoom: 15,
      rating: "4.4",
      reviewsCount: "32,000+ reviews",
      openStatus: "Open Daily 10:00 AM – 10:00 PM",
      distanceFromGCC: "15 km from Bajpe GCC",
      travelTime: "~26 mins drive",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nexus+Fiza+Mall+Mangaluru",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bajpe,Mangaluru&destination=Nexus+Fiza+Mall,Pandeshwar,Mangaluru",
      summary: "Mangaluru's premier shopping, dining, and entertainment destination (formerly Forum Fiza Mall) on Pandeshwar Road. Boasts a 6-screen PVR multiplex, Timezone arcade & bowling center, and an expansive multi-cuisine food court.",
      facilities: [
        { icon: "film", label: "PVR Cinemas 6-Screen Multiplex with Recliners" },
        { icon: "gamepad-2", label: "Timezone Arcade (Bowling, VR & Arcade Games)" },
        { icon: "utensils", label: "Massive Food Court (KFC, McDonald's, Dominos, Subz)" },
        { icon: "shopping-bag", label: "Global Retail Flagships (H&M, Lifestyle, Trends)" },
        { icon: "car", label: "Multi-Level Covered Vehicle Parking" },
        { icon: "wifi", label: "Central Air Conditioning & High-Speed Mall Wi-Fi" }
      ],
      tips: "Just 25 mins drive from Bajpe GCC! Perfect for Friday night blockbuster movies at PVR, arcade bowling championships, and weekend cohort shopping."
    }
  ]
};
