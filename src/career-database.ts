export interface CareerOption {
  id: string;
  name: string;
  category: string;
  description: string;
  averageSalary: {
    entry: number;
    mid: number;
    senior: number;
  };
  lifestyle: {
    workHours: string;
    workEnvironment: string;
    stressLevel: "Low" | "Medium" | "High";
    workLifeBalance: "Poor" | "Moderate" | "Good" | "Excellent";
    travelRequired: boolean;
    remoteWork: boolean;
  };
  education: {
    stream: string[];
    degree: string;
    entranceExams: string[];
    topInstitutions: string[];
    duration: string;
  };
  skills: string[];
  jobOutlook: "Stable" | "Growing" | "High Demand";
  pros: string[];
  cons: string[];
  suitableFor: string[];
  alternatives: string[];
}

export const careerDatabase: CareerOption[] = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    description:
      "Design, develop, and maintain software applications and systems using programming languages and development tools.",
    averageSalary: {
      entry: 600000,
      mid: 1200000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment: "Office-based, tech companies, startups",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["PCM", "PCMB"],
      degree: "B.Tech/B.E. in Computer Science/IT",
      entranceExams: ["JEE Main/Advanced", "BITSAT", "VITEEE"],
      topInstitutions: ["IITs", "NITs", "BITS Pilani", "IIITs"],
      duration: "4 years",
    },
    skills: [
      "Programming (Java/Python/C++)",
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Version Control",
    ],
    jobOutlook: "High Demand",
    pros: [
      "High salary potential",
      "Remote work options",
      "Continuous learning",
      "Job security",
      "Creative problem-solving",
    ],
    cons: [
      "Competitive field",
      "Continuous learning required",
      "Sedentary work",
      "Deadline pressure",
    ],
    suitableFor: ["Problem solvers", "Tech enthusiasts", "Analytical thinkers"],
    alternatives: ["Data Scientist", "UI/UX Designer", "System Administrator"],
  },
  {
    id: "doctor-mbbs",
    name: "Medical Doctor (MBBS)",
    category: "Healthcare",
    description:
      "Diagnose and treat patients, perform medical procedures, and provide healthcare services in hospitals and clinics.",
    averageSalary: {
      entry: 800000,
      mid: 1800000,
      senior: 4000000,
    },
    lifestyle: {
      workHours: "50-80 hours/week during residency, 40-60 hours after",
      workEnvironment: "Hospitals, clinics, emergency rooms",
      stressLevel: "High",
      workLifeBalance: "Poor",
      travelRequired: false,
      remoteWork: false,
    },
    education: {
      stream: ["PCMB", "PCB"],
      degree: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      entranceExams: ["NEET-UG", "AIIMS MBBS", "JIPMER"],
      topInstitutions: [
        "AIIMS Delhi",
        "Christian Medical College",
        "JIPMER",
        "AFMC",
      ],
      duration: "5.5 years (including internship)",
    },
    skills: [
      "Medical knowledge",
      "Patient care",
      "Diagnosis",
      "Surgical skills",
      "Emergency response",
    ],
    jobOutlook: "Stable",
    pros: [
      "High social respect",
      "Job security",
      "Helping others",
      "Good earning potential",
      "Career stability",
    ],
    cons: [
      "Long training period",
      "High stress",
      "Irregular hours",
      "Emotional toll",
      "High competition",
    ],
    suitableFor: [
      "Compassionate individuals",
      "Science enthusiasts",
      "Those who can handle stress",
    ],
    alternatives: ["Nursing", "Pharmacy", "Biotechnology", "Public Health"],
  },
  {
    id: "chartered-accountant",
    name: "Chartered Accountant (CA)",
    category: "Finance",
    description:
      "Handle accounting, auditing, taxation, and financial advisory services for individuals and businesses.",
    averageSalary: {
      entry: 700000,
      mid: 1500000,
      senior: 3000000,
    },
    lifestyle: {
      workHours: "45-60 hours/week, especially during tax season",
      workEnvironment: "CA firms, corporate offices, own practice",
      stressLevel: "Medium",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Commerce", "PCM"],
      degree: "CA certification after 12th",
      entranceExams: ["CA Foundation"],
      topInstitutions: [
        "ICAI approved coaching centers",
        "Delhi University",
        "Mumbai University",
      ],
      duration: "4-5 years (including articleship)",
    },
    skills: [
      "Accounting",
      "Taxation",
      "Auditing",
      "Financial analysis",
      "Business advisory",
    ],
    jobOutlook: "Growing",
    pros: [
      "High earning potential",
      "Respectable profession",
      "Flexible career options",
      "Entrepreneurial opportunities",
      "Work-life balance possible",
    ],
    cons: [
      "Competitive exams",
      "Long training period",
      "Tax season pressure",
      "Client management stress",
    ],
    suitableFor: [
      "Detail-oriented individuals",
      "Business-minded students",
      "Analytical thinkers",
    ],
    alternatives: [
      "Company Secretary",
      "Financial Analyst",
      "Management Consultant",
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "Technology",
    description:
      "Analyze complex data sets to extract insights, build predictive models, and support data-driven decision making.",
    averageSalary: {
      entry: 800000,
      mid: 1800000,
      senior: 3500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment:
        "Tech companies, analytics firms, research organizations",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["PCM", "PCMB", "Commerce with Maths"],
      degree: "B.Tech/M.Tech in CS/IT/Statistics or MCA",
      entranceExams: ["JEE Main/Advanced", "GATE"],
      topInstitutions: [
        "IITs",
        "NITs",
        "ISI Kolkata",
        "IIMs (for MBA with analytics)",
      ],
      duration: "4 years (Bachelor) + 2 years (Master optional)",
    },
    skills: [
      "Statistics",
      "Machine Learning",
      "Python/R",
      "SQL",
      "Data Visualization",
    ],
    jobOutlook: "High Demand",
    pros: [
      "High salary",
      "Intellectually stimulating",
      "Growing field",
      "Remote work options",
      "Problem-solving focus",
    ],
    cons: [
      "Requires strong math background",
      "Continuous learning",
      "Abstract concepts",
      "Data privacy concerns",
    ],
    suitableFor: ["Math enthusiasts", "Problem solvers", "Analytical minds"],
    alternatives: [
      "Business Analyst",
      "Machine Learning Engineer",
      "Statistician",
    ],
  },
  {
    id: "civil-engineer",
    name: "Civil Engineer",
    category: "Engineering",
    description:
      "Design, construct, and maintain infrastructure projects including buildings, roads, bridges, and water systems.",
    averageSalary: {
      entry: 400000,
      mid: 900000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment: "Construction sites, offices, government agencies",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM"],
      degree: "B.Tech/B.E. in Civil Engineering",
      entranceExams: ["JEE Main/Advanced", "State CETs"],
      topInstitutions: ["IITs", "NITs", "BITS Pilani", "DTU Delhi"],
      duration: "4 years",
    },
    skills: [
      "Structural design",
      "Project management",
      "AutoCAD",
      "Construction techniques",
      "Site supervision",
    ],
    jobOutlook: "Stable",
    pros: [
      "Diverse career opportunities",
      "Job security",
      "Creative work",
      "Government jobs available",
      "Outdoor work options",
    ],
    cons: [
      "Site work challenges",
      "Weather-dependent",
      "Safety concerns",
      "Project delays common",
    ],
    suitableFor: [
      "Creative individuals",
      "Those who like construction",
      "Problem solvers",
    ],
    alternatives: ["Architect", "Urban Planner", "Construction Manager"],
  },
  {
    id: "nurse",
    name: "Registered Nurse",
    category: "Healthcare",
    description:
      "Provide patient care, administer medications, assist doctors, and promote health education in healthcare settings.",
    averageSalary: {
      entry: 300000,
      mid: 600000,
      senior: 1200000,
    },
    lifestyle: {
      workHours: "40-60 hours/week (shift work)",
      workEnvironment: "Hospitals, clinics, nursing homes",
      stressLevel: "High",
      workLifeBalance: "Moderate",
      travelRequired: false,
      remoteWork: false,
    },
    education: {
      stream: ["PCB", "PCMB"],
      degree: "B.Sc. Nursing or GNM (General Nursing and Midwifery)",
      entranceExams: [
        "AIIMS Nursing",
        "JIPMER Nursing",
        "State entrance exams",
      ],
      topInstitutions: [
        "AIIMS Delhi",
        "CMC Vellore",
        "Manipal College of Nursing",
      ],
      duration: "4 years (B.Sc.) or 3 years (GNM) + 1 year internship",
    },
    skills: [
      "Patient care",
      "Medical procedures",
      "Communication",
      "Emergency response",
      "Health education",
    ],
    jobOutlook: "Growing",
    pros: [
      "Job security",
      "Helping others",
      "Good work-life balance potential",
      "International opportunities",
      "Respectable profession",
    ],
    cons: [
      "Shift work",
      "Emotional demands",
      "Physical demands",
      "Healthcare stress",
      "Lower starting salary",
    ],
    suitableFor: [
      "Caring individuals",
      "Those who like helping others",
      "People who can handle stress",
    ],
    alternatives: [
      "Medical Laboratory Technician",
      "Physiotherapist",
      "Nutritionist",
    ],
  },
  {
    id: "teacher",
    name: "School Teacher",
    category: "Education",
    description:
      "Educate and mentor students in schools, develop curriculum, and contribute to student development.",
    averageSalary: {
      entry: 300000,
      mid: 600000,
      senior: 1000000,
    },
    lifestyle: {
      workHours: "35-40 hours/week (school hours)",
      workEnvironment: "Schools, educational institutions",
      stressLevel: "Medium",
      workLifeBalance: "Excellent",
      travelRequired: false,
      remoteWork: false,
    },
    education: {
      stream: ["All streams"],
      degree: "B.Ed. after Bachelor's degree",
      entranceExams: ["CTET", "State TET exams"],
      topInstitutions: [
        "DU B.Ed.",
        "JNU B.Ed.",
        "Regional Colleges of Education",
      ],
      duration: "3 years (Bachelor) + 2 years (B.Ed.)",
    },
    skills: [
      "Teaching",
      "Communication",
      "Subject knowledge",
      "Classroom management",
      "Student mentoring",
    ],
    jobOutlook: "Stable",
    pros: [
      "Summer vacations",
      "Fixed working hours",
      "Job security",
      "Summer vacations",
      "Shaping young minds",
      "Work-life balance",
    ],
    cons: [
      "Moderate salary",
      "Administrative work",
      "Student behavior challenges",
      "Limited growth in government schools",
    ],
    suitableFor: [
      "Patient individuals",
      "Those who like working with children",
      "Knowledgeable in subjects",
    ],
    alternatives: [
      "College Professor",
      "Educational Consultant",
      "Content Developer",
    ],
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    category: "Business",
    description:
      "Analyze business processes, identify improvements, and bridge gap between business and technology teams.",
    averageSalary: {
      entry: 500000,
      mid: 1200000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment: "Corporate offices, consulting firms",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Commerce", "PCM", "Arts"],
      degree: "BBA/MBA or B.Tech + MBA",
      entranceExams: ["CAT", "MAT", "XAT"],
      topInstitutions: ["IIMs", "XLRI", "FMS Delhi", "NMIMS"],
      duration: "3 years (Bachelor) + 2 years (MBA)",
    },
    skills: [
      "Business analysis",
      "Requirements gathering",
      "Data analysis",
      "Communication",
      "Project management",
    ],
    jobOutlook: "Growing",
    pros: [
      "Good salary",
      "Diverse industries",
      "Problem-solving focus",
      "Career growth",
      "Business understanding",
    ],
    cons: [
      "Client management",
      "Changing requirements",
      "Meeting deadlines",
      "Technical learning required",
    ],
    suitableFor: [
      "Analytical thinkers",
      "Communication skills",
      "Business-minded individuals",
    ],
    alternatives: [
      "Management Consultant",
      "Product Manager",
      "Operations Analyst",
    ],
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    category: "Creative",
    description:
      "Create visual content for print and digital media using design software and artistic skills.",
    averageSalary: {
      entry: 300000,
      mid: 700000,
      senior: 1500000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment: "Design agencies, in-house teams, freelance",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "BFA/B.Des in Graphic Design or Diploma",
      entranceExams: ["NID Entrance", "UCEED", "State design exams"],
      topInstitutions: [
        "NID Ahmedabad",
        "NIFT",
        "Pearl Academy",
        "MIT ID Pune",
      ],
      duration: "4 years (Bachelor) or 1-3 years (Diploma)",
    },
    skills: [
      "Adobe Creative Suite",
      "Typography",
      "Color theory",
      "Digital art",
      "Brand design",
    ],
    jobOutlook: "Growing",
    pros: [
      "Creative freedom",
      "Freelance opportunities",
      "Portfolio-based career",
      "Remote work",
      "Diverse projects",
    ],
    cons: [
      "Client feedback",
      "Deadline pressure",
      "Subjective field",
      "Competition",
      "Income inconsistency (freelance)",
    ],
    suitableFor: [
      "Creative individuals",
      "Artistically inclined",
      "Detail-oriented people",
    ],
    alternatives: ["UI/UX Designer", "Art Director", "Brand Designer"],
  },
  {
    id: "mechanical-engineer",
    name: "Mechanical Engineer",
    category: "Engineering",
    description:
      "Design, develop, and maintain mechanical systems and machinery for various industries.",
    averageSalary: {
      entry: 400000,
      mid: 900000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment:
        "Manufacturing plants, R&D centers, automotive companies",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM"],
      degree: "B.Tech/B.E. in Mechanical Engineering",
      entranceExams: ["JEE Main/Advanced", "State CETs"],
      topInstitutions: [
        "IITs",
        "NITs",
        "BITS Pilani",
        "College of Engineering Pune",
      ],
      duration: "4 years",
    },
    skills: [
      "CAD/CAM",
      "Thermodynamics",
      "Manufacturing processes",
      "Material science",
      "Project management",
    ],
    jobOutlook: "Stable",
    pros: [
      "Versatile field",
      "Manufacturing sector growth",
      "Hands-on work",
      "Global opportunities",
      "Technical expertise",
    ],
    cons: [
      "Factory environment",
      "Safety concerns",
      "Travel for projects",
      "Physical demands",
      "Industry fluctuations",
    ],
    suitableFor: [
      "Hands-on learners",
      "Problem solvers",
      "Those interested in machines",
    ],
    alternatives: [
      "Automotive Engineer",
      "Aerospace Engineer",
      "Production Manager",
    ],
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    category: "Healthcare",
    description:
      "Dispense medications, counsel patients on drug usage, and ensure safe medication practices.",
    averageSalary: {
      entry: 300000,
      mid: 600000,
      senior: 1200000,
    },
    lifestyle: {
      workHours: "40-45 hours/week (retail) or 35-40 hours (hospital)",
      workEnvironment: "Pharmacies, hospitals, pharmaceutical companies",
      stressLevel: "Low",
      workLifeBalance: "Excellent",
      travelRequired: false,
      remoteWork: false,
    },
    education: {
      stream: ["PCB", "PCM"],
      degree: "B.Pharm or D.Pharm",
      entranceExams: ["GPAT", "State pharmacy entrance exams"],
      topInstitutions: [
        "NIPER",
        "BITS Pilani",
        "Jamia Hamdard",
        "Punjab University",
      ],
      duration: "4 years (B.Pharm) or 2 years (D.Pharm)",
    },
    skills: [
      "Pharmaceutical knowledge",
      "Patient counseling",
      "Drug interactions",
      "Inventory management",
      "Regulatory compliance",
    ],
    jobOutlook: "Growing",
    pros: [
      "Stable career",
      "Good work-life balance",
      "Healthcare contribution",
      "Community interaction",
      "Multiple work settings",
    ],
    cons: [
      "Standing for long hours",
      "Customer service stress",
      "Regulatory compliance",
      "Moderate salary growth",
    ],
    suitableFor: [
      "Detail-oriented individuals",
      "Healthcare enthusiasts",
      "Customer service oriented",
    ],
    alternatives: [
      "Clinical Research",
      "Medical Representative",
      "Quality Control Analyst",
    ],
  },
  {
    id: "lawyer",
    name: "Lawyer",
    category: "Legal",
    description:
      "Provide legal advice, represent clients in courts, and handle legal documentation and cases.",
    averageSalary: {
      entry: 400000,
      mid: 1200000,
      senior: 3000000,
    },
    lifestyle: {
      workHours: "45-60 hours/week",
      workEnvironment: "Law firms, courts, corporate legal departments",
      stressLevel: "High",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "LLB (3 years) or BA LLB/BBA LLB (5 years)",
      entranceExams: ["CLAT", "AILET", "LSAT"],
      topInstitutions: [
        "NLSIU Bengaluru",
        "NUJS Kolkata",
        "JGLS Sonipat",
        "GNLU Gandhinagar",
      ],
      duration: "3-5 years (LLB) + 1 year (Bar Council training)",
    },
    skills: [
      "Legal research",
      "Case analysis",
      "Public speaking",
      "Negotiation",
      "Legal writing",
    ],
    jobOutlook: "Growing",
    pros: [
      "Intellectual stimulation",
      "High earning potential",
      "Social impact",
      "Career flexibility",
      "Respectable profession",
    ],
    cons: [
      "Competitive field",
      "Long working hours",
      "High stress",
      "Emotional toll",
      "Continuous learning required",
    ],
    suitableFor: [
      "Debate enthusiasts",
      "Justice-minded individuals",
      "Strong communicators",
    ],
    alternatives: ["Legal Consultant", "Corporate Lawyer", "Legal Journalist"],
  },
  {
    id: "architect",
    name: "Architect",
    category: "Design",
    description:
      "Design buildings and structures, create blueprints, and oversee construction projects.",
    averageSalary: {
      entry: 400000,
      mid: 1000000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment:
        "Architecture firms, construction companies, government agencies",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM", "Arts"],
      degree: "B.Arch (Bachelor of Architecture)",
      entranceExams: ["NATA", "JEE Paper 2"],
      topInstitutions: [
        "IIT Kharagpur",
        "SPA Delhi",
        "CEPT Ahmedabad",
        "R.V. College of Architecture",
      ],
      duration: "5 years",
    },
    skills: [
      "Architectural design",
      "AutoCAD/Revit",
      "Building codes",
      "Project management",
      "Construction knowledge",
    ],
    jobOutlook: "Growing",
    pros: [
      "Creative field",
      "Entrepreneurial opportunities",
      "Visual results",
      "Diverse projects",
      "Good work-life balance",
    ],
    cons: [
      "Client management",
      "Project delays",
      "Regulatory approvals",
      "Weather-dependent site work",
    ],
    suitableFor: [
      "Creative individuals",
      "Visual thinkers",
      "Detail-oriented people",
    ],
    alternatives: ["Interior Designer", "Urban Planner", "Landscape Architect"],
  },
  {
    id: "journalist",
    name: "Journalist",
    category: "Media",
    description:
      "Research, write, and report news stories for newspapers, magazines, TV, or digital media.",
    averageSalary: {
      entry: 250000,
      mid: 600000,
      senior: 1500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week, irregular schedule",
      workEnvironment: "Newsrooms, field locations, media houses",
      stressLevel: "High",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "BA/BJMC in Journalism/Mass Communication",
      entranceExams: ["IIMC Entrance", "State journalism entrance exams"],
      topInstitutions: [
        "IIMC Delhi",
        "Xavier Institute of Communications",
        "Symbiosis Institute of Media & Communication",
      ],
      duration: "3 years",
    },
    skills: [
      "Writing",
      "Research",
      "Interviewing",
      "Media ethics",
      "Digital media tools",
    ],
    jobOutlook: "Stable",
    pros: [
      "Exciting work",
      "Public impact",
      "Networking opportunities",
      "Creative expression",
      "Diverse topics",
    ],
    cons: [
      "Irregular hours",
      "Deadline pressure",
      "Safety risks",
      "Job insecurity",
      "Emotional toll",
    ],
    suitableFor: [
      "Curious individuals",
      "Good writers",
      "People interested in current affairs",
    ],
    alternatives: [
      "Content Writer",
      "Public Relations",
      "Digital Marketing Specialist",
    ],
  },
  {
    id: "hotel-management",
    name: "Hotel Management Professional",
    category: "Hospitality",
    description:
      "Manage hotel operations, customer service, food and beverage, and guest experiences.",
    averageSalary: {
      entry: 300000,
      mid: 700000,
      senior: 1800000,
    },
    lifestyle: {
      workHours: "45-55 hours/week (including shifts)",
      workEnvironment: "Hotels, resorts, restaurants, cruise ships",
      stressLevel: "Medium",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "BHM/BHMCT (Bachelor of Hotel Management)",
      entranceExams: ["NCHMCT JEE", "State hotel management entrance exams"],
      topInstitutions: [
        "IHM Mumbai",
        "IHM Delhi",
        "WGSHA Manipal",
        "Christ University",
      ],
      duration: "4 years",
    },
    skills: [
      "Customer service",
      "Operations management",
      "Food and beverage",
      "Event management",
      "Communication",
    ],
    jobOutlook: "Growing",
    pros: [
      "Travel opportunities",
      "Hospitality industry growth",
      "People-oriented work",
      "International exposure",
      "Career progression",
    ],
    cons: [
      "Shift work",
      "Customer service stress",
      "Long hours",
      "Seasonal employment",
      "Physical demands",
    ],
    suitableFor: [
      "People-oriented individuals",
      "Those who like travel",
      "Organized personalities",
    ],
    alternatives: [
      "Event Manager",
      "Restaurant Manager",
      "Tourism Professional",
    ],
  },
  {
    id: "pilot",
    name: "Commercial Pilot",
    category: "Aviation",
    description:
      "Operate commercial aircraft, ensure passenger safety, and manage flight operations.",
    averageSalary: {
      entry: 1000000,
      mid: 3000000,
      senior: 8000000,
    },
    lifestyle: {
      workHours: "Variable (40-60 hours/week with irregular schedule)",
      workEnvironment: "Airports, aircraft, flight simulators",
      stressLevel: "High",
      workLifeBalance: "Poor",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM"],
      degree: "Commercial Pilot License (CPL) + B.Sc. Aviation",
      entranceExams: ["DGCA exams", "University entrance exams"],
      topInstitutions: [
        "Indira Gandhi Rashtriya Uran Akademi",
        "Pawan Hans",
        "Rajiv Gandhi Academy for Aviation Technology",
      ],
      duration: "3-4 years (including flight training)",
    },
    skills: [
      "Aircraft operation",
      "Navigation",
      "Safety procedures",
      "Decision making",
      "English proficiency",
    ],
    jobOutlook: "Growing",
    pros: [
      "High salary",
      "Travel benefits",
      "Prestigious career",
      "Adventure",
      "Perks and allowances",
    ],
    cons: [
      "High training cost",
      "Irregular schedule",
      "Physical fitness requirements",
      "Family time sacrifice",
      "Job stress",
    ],
    suitableFor: [
      "Adventure seekers",
      "Responsible individuals",
      "Those who can handle pressure",
    ],
    alternatives: [
      "Air Traffic Controller",
      "Aviation Management",
      "Aircraft Maintenance Engineer",
    ],
  },
  {
    id: "psychologist",
    name: "Clinical Psychologist",
    category: "Healthcare",
    description:
      "Assess, diagnose, and treat mental health issues through therapy and counseling.",
    averageSalary: {
      entry: 400000,
      mid: 900000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "35-45 hours/week",
      workEnvironment: "Hospitals, clinics, private practice, schools",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "PCB", "PCMB"],
      degree: "BA/B.Sc. Psychology + MA/M.Sc. Psychology + M.Phil/Ph.D.",
      entranceExams: ["University entrance exams", "CSIR UGC NET"],
      topInstitutions: [
        "JNU Delhi",
        "DU Psychology",
        "TISS Mumbai",
        "NIMHANS Bengaluru",
      ],
      duration: "3 years (Bachelor) + 2 years (Master) + 2 years (M.Phil)",
    },
    skills: [
      "Counseling",
      "Psychological assessment",
      "Therapy techniques",
      "Research",
      "Communication",
    ],
    jobOutlook: "Growing",
    pros: [
      "Helping others",
      "Intellectual stimulation",
      "Flexible work arrangements",
      "Growing field",
      "Personal fulfillment",
    ],
    cons: [
      "Emotional demands",
      "Long education path",
      "Client confidentiality stress",
      "Insurance/paperwork",
    ],
    suitableFor: [
      "Empathetic individuals",
      "Good listeners",
      "Psychology enthusiasts",
    ],
    alternatives: ["Counselor", "HR Professional", "Social Worker"],
  },
  {
    id: "digital-marketer",
    name: "Digital Marketing Specialist",
    category: "Marketing",
    description:
      "Plan and execute online marketing campaigns, manage social media, and analyze digital marketing performance.",
    averageSalary: {
      entry: 350000,
      mid: 800000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment: "Marketing agencies, corporate offices, remote",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "BBA/BMS with Marketing specialization or relevant certification",
      entranceExams: ["University entrance exams"],
      topInstitutions: [
        "MICA Ahmedabad",
        "XIMB",
        "NMIMS Mumbai",
        "Digital marketing certifications (Google, Facebook)",
      ],
      duration: "3 years + certifications",
    },
    skills: [
      "SEO/SEM",
      "Social media marketing",
      "Content marketing",
      "Google Analytics",
      "Digital advertising",
    ],
    jobOutlook: "High Demand",
    pros: [
      "Creative field",
      "Remote work options",
      "Fast-paced industry",
      "Continuous learning",
      "Good salary potential",
    ],
    cons: [
      "Ever-changing algorithms",
      "Performance pressure",
      "Competition",
      "Client expectations",
      "Monitoring trends",
    ],
    suitableFor: [
      "Creative individuals",
      "Social media enthusiasts",
      "Data-driven people",
    ],
    alternatives: ["Content Creator", "Social Media Manager", "Brand Manager"],
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur/Business Owner",
    category: "Business",
    description:
      "Start and manage your own business, take calculated risks, and create innovative solutions.",
    averageSalary: {
      entry: 100000,
      mid: 1000000,
      senior: 5000000,
    },
    lifestyle: {
      workHours: "60-80 hours/week initially",
      workEnvironment: "Own office/workspace, home-based, flexible",
      stressLevel: "High",
      workLifeBalance: "Poor",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Any"],
      degree: "Any degree + business skills",
      entranceExams: ["CAT/MAT for MBA (optional)"],
      topInstitutions: [
        "IIMs",
        "XLRI",
        "Entrepreneurship programs",
        "Online business courses",
      ],
      duration: "3-5 years (if pursuing MBA) + self-learning",
    },
    skills: [
      "Business planning",
      "Risk management",
      "Leadership",
      "Financial management",
      "Marketing",
    ],
    jobOutlook: "Growing",
    pros: [
      "Independence",
      "Unlimited earning potential",
      "Creative freedom",
      "Personal growth",
      "Legacy building",
    ],
    cons: [
      "Financial risk",
      "Uncertainty",
      "Long working hours",
      "No fixed salary",
      "High failure rate",
    ],
    suitableFor: [
      "Risk-takers",
      "Innovative thinkers",
      "Self-motivated individuals",
    ],
    alternatives: [
      "Business Development Manager",
      "Startup Consultant",
      "Franchise Owner",
    ],
  },
  {
    id: "civil-services",
    name: "Civil Services Officer (IAS/IPS)",
    category: "Government",
    description:
      "Serve in administrative roles, implement government policies, and work for public welfare.",
    averageSalary: {
      entry: 800000,
      mid: 1500000,
      senior: 3000000,
    },
    lifestyle: {
      workHours: "50-60 hours/week",
      workEnvironment: "Government offices, districts, field locations",
      stressLevel: "High",
      workLifeBalance: "Poor",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["Any"],
      degree: "Any Bachelor's degree",
      entranceExams: ["UPSC Civil Services Exam"],
      topInstitutions: ["Delhi University", "JNU", "Any recognized university"],
      duration: "3 years + 2 years preparation + training",
    },
    skills: [
      "Public administration",
      "Policy making",
      "Crisis management",
      "Communication",
      "Leadership",
    ],
    jobOutlook: "Stable",
    pros: [
      "Power to make change",
      "Job security",
      "Social impact",
      "Respect and prestige",
      "Comprehensive benefits",
    ],
    cons: [
      "Competitive exam",
      "Transfers",
      "Work pressure",
      "Political interference",
      "Limited family time",
    ],
    suitableFor: [
      "Public service oriented",
      "Leadership qualities",
      "Those who want to make a difference",
    ],
    alternatives: [
      "Administrative Officer",
      "Policy Analyst",
      "Government Consultant",
    ],
  },
  {
    id: "fashion-designer",
    name: "Fashion Designer",
    category: "Creative",
    description:
      "Design clothing and accessories, create fashion collections, and work with textiles and trends.",
    averageSalary: {
      entry: 300000,
      mid: 800000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week",
      workEnvironment: "Design studios, fashion houses, freelance",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Any"],
      degree: "B.Des/BFA in Fashion Design",
      entranceExams: ["NID Entrance", "NIFT Entrance", "UCEED"],
      topInstitutions: [
        "NIFT Delhi",
        "NID Ahmedabad",
        "Pearl Academy",
        "JD Institute of Fashion Technology",
      ],
      duration: "4 years",
    },
    skills: [
      "Fashion design",
      "Textile knowledge",
      "Sketching",
      "Garment construction",
      "Trend analysis",
    ],
    jobOutlook: "Growing",
    pros: [
      "Creative expression",
      "Fashion industry excitement",
      "Entrepreneurial opportunities",
      "Travel",
      "Personal style development",
    ],
    cons: [
      "Seasonal nature",
      "Competition",
      "Client demands",
      "Financial uncertainty",
      "Physical demands",
    ],
    suitableFor: [
      "Creative individuals",
      "Artistically inclined",
      "Fashion enthusiasts",
    ],
    alternatives: ["Textile Designer", "Fashion Stylist", "Costume Designer"],
  },
  {
    id: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    category: "Technology",
    description:
      "Protect computer systems and networks from cyber threats, conduct security assessments, and respond to incidents.",
    averageSalary: {
      entry: 500000,
      mid: 1200000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment:
        "IT security firms, corporate IT departments, government agencies",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["PCM", "PCMB"],
      degree: "B.Tech in CS/IT/Cybersecurity or relevant certifications",
      entranceExams: ["JEE Main", "State CETs"],
      topInstitutions: [
        "IITs",
        "NITs",
        "C-DAC",
        "Certified Ethical Hacker (CEH) certification",
      ],
      duration: "4 years + certifications",
    },
    skills: [
      "Network security",
      "Ethical hacking",
      "Risk assessment",
      "Incident response",
      "Security tools",
    ],
    jobOutlook: "High Demand",
    pros: [
      "Growing field",
      "High demand",
      "Intellectual challenge",
      "Good salary",
      "Job security",
    ],
    cons: [
      "Continuous learning",
      "High responsibility",
      "Stressful incidents",
      "Technical complexity",
      "On-call requirements",
    ],
    suitableFor: [
      "Security-minded individuals",
      "Problem solvers",
      "Tech enthusiasts",
    ],
    alternatives: [
      "Information Security Consultant",
      "Network Administrator",
      "IT Auditor",
    ],
  },
  {
    id: "veterinarian",
    name: "Veterinarian",
    category: "Healthcare",
    description:
      "Diagnose and treat animals, perform surgeries, and promote animal health and welfare.",
    averageSalary: {
      entry: 400000,
      mid: 900000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "45-55 hours/week (including emergencies)",
      workEnvironment: "Veterinary clinics, animal hospitals, farms",
      stressLevel: "Medium",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCMB", "PCB"],
      degree: "BVSc & AH (Bachelor of Veterinary Science & Animal Husbandry)",
      entranceExams: ["ICAR AIEEA", "State veterinary entrance exams"],
      topInstitutions: ["IVRI Izatnagar", "NDVS Bangalore", "RAJUVAS Bikaner"],
      duration: "5.5 years (including internship)",
    },
    skills: [
      "Animal medicine",
      "Surgery",
      "Diagnostic skills",
      "Animal behavior",
      "Emergency care",
    ],
    jobOutlook: "Growing",
    pros: [
      "Animal love",
      "Variety of work",
      "Pet owner relationships",
      "Growing pet industry",
      "Satisfaction of helping animals",
    ],
    cons: [
      "Emergency calls",
      "Animal behavior risks",
      "Emotional toll",
      "Physical demands",
      "Lower salary than human doctors",
    ],
    suitableFor: [
      "Animal lovers",
      "Science enthusiasts",
      "Compassionate individuals",
    ],
    alternatives: [
      "Animal Nutritionist",
      "Wildlife Conservationist",
      "Pet Care Business Owner",
    ],
  },
  {
    id: "chef",
    name: "Professional Chef",
    category: "Hospitality",
    description:
      "Create and prepare food, manage kitchen operations, and ensure quality dining experiences.",
    averageSalary: {
      entry: 300000,
      mid: 800000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "50-60 hours/week (including evenings/weekends)",
      workEnvironment: "Restaurants, hotels, catering companies",
      stressLevel: "High",
      workLifeBalance: "Poor",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["Any"],
      degree: "Diploma in Culinary Arts or Hotel Management",
      entranceExams: ["NCHMCT JEE", "State hospitality exams"],
      topInstitutions: [
        "IHM Mumbai",
        "ITC Culinary Arts",
        "Le Cordon Bleu (international)",
      ],
      duration: "1-3 years (Diploma) + apprenticeship",
    },
    skills: [
      "Cooking techniques",
      "Menu planning",
      "Kitchen management",
      "Food safety",
      "Creativity",
    ],
    jobOutlook: "Growing",
    pros: [
      "Creative expression",
      "Food industry growth",
      "Entrepreneurial opportunities",
      "Immediate feedback",
      "Job satisfaction",
    ],
    cons: [
      "Long hours",
      "Physical demands",
      "Heat and pressure",
      "Shift work",
      "High stress environment",
    ],
    suitableFor: [
      "Food enthusiasts",
      "Creative individuals",
      "Those who enjoy working under pressure",
    ],
    alternatives: ["Food Stylist", "Restaurant Manager", "Food Blogger"],
  },
  {
    id: "environmental-engineer",
    name: "Environmental Engineer",
    category: "Engineering",
    description:
      "Develop solutions for environmental problems, manage waste, and ensure environmental compliance.",
    averageSalary: {
      entry: 400000,
      mid: 900000,
      senior: 2000000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment:
        "Environmental agencies, consulting firms, manufacturing companies",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM", "PCMB"],
      degree: "B.Tech in Environmental/Civil/Chemical Engineering",
      entranceExams: ["JEE Main/Advanced", "State CETs"],
      topInstitutions: ["IITs", "NITs", "TERI University", "CEPT Ahmedabad"],
      duration: "4 years",
    },
    skills: [
      "Environmental impact assessment",
      "Waste management",
      "Water treatment",
      "Air quality monitoring",
      "Regulatory compliance",
    ],
    jobOutlook: "Growing",
    pros: [
      "Making a difference",
      "Growing environmental awareness",
      "Diverse projects",
      "Government opportunities",
      "Field work",
    ],
    cons: [
      "Field work challenges",
      "Regulatory complexity",
      "Client resistance",
      "Weather-dependent",
      "Technical complexity",
    ],
    suitableFor: [
      "Environmentally conscious",
      "Problem solvers",
      "Science enthusiasts",
    ],
    alternatives: [
      "Environmental Consultant",
      "Sustainability Manager",
      "Research Scientist",
    ],
  },
  {
    id: "content-writer",
    name: "Content Writer/Creator",
    category: "Creative",
    description:
      "Create written and multimedia content for websites, blogs, social media, and marketing materials.",
    averageSalary: {
      entry: 250000,
      mid: 600000,
      senior: 1500000,
    },
    lifestyle: {
      workHours: "35-45 hours/week",
      workEnvironment: "Remote, agencies, in-house teams",
      stressLevel: "Low",
      workLifeBalance: "Excellent",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "BA in English/Journalism/Mass Communication or relevant",
      entranceExams: ["University entrance exams"],
      topInstitutions: [
        "DU English",
        "JNU",
        "Xavier Institute of Communications",
        "Online writing courses",
      ],
      duration: "3 years + skill development",
    },
    skills: ["Writing", "SEO", "Content strategy", "Research", "Digital tools"],
    jobOutlook: "Growing",
    pros: [
      "Creative freedom",
      "Remote work",
      "Flexible schedule",
      "Skill-based career",
      "Low barriers to entry",
    ],
    cons: [
      "Freelance uncertainty",
      "Client dependency",
      "Competition",
      "Continuous learning",
      "Variable income",
    ],
    suitableFor: ["Writers", "Creative individuals", "Self-motivated people"],
    alternatives: ["Copywriter", "Technical Writer", "Social Media Manager"],
  },
  {
    id: "sports-coach",
    name: "Sports Coach/Trainer",
    category: "Sports",
    description:
      "Train athletes, develop training programs, and help individuals achieve fitness and sports goals.",
    averageSalary: {
      entry: 200000,
      mid: 500000,
      senior: 1500000,
    },
    lifestyle: {
      workHours: "40-50 hours/week (including evenings/weekends)",
      workEnvironment: "Sports academies, gyms, schools, sports clubs",
      stressLevel: "Medium",
      workLifeBalance: "Moderate",
      travelRequired: true,
      remoteWork: false,
    },
    education: {
      stream: ["PCM", "PCB", "Arts"],
      degree: "B.P.Ed/B.Sc. Physical Education or Sports Science",
      entranceExams: ["State sports entrance exams"],
      topInstitutions: [
        "Lakshmibai National Institute of Physical Education",
        "Netaji Subhas National Institute of Sports",
      ],
      duration: "3-4 years",
    },
    skills: [
      "Sports training",
      "Fitness assessment",
      "Motivation",
      "Sports psychology",
      "Injury prevention",
    ],
    jobOutlook: "Growing",
    pros: [
      "Active lifestyle",
      "Helping others succeed",
      "Sports passion",
      "Flexible hours possible",
      "Personal satisfaction",
    ],
    cons: [
      "Irregular hours",
      "Physical demands",
      "Weather-dependent",
      "Competition",
      "Limited salary growth",
    ],
    suitableFor: [
      "Sports enthusiasts",
      "Fitness conscious",
      "Motivational individuals",
    ],
    alternatives: [
      "Fitness Trainer",
      "Sports Psychologist",
      "Sports Management",
    ],
  },
  {
    id: "ux-ui-designer",
    name: "UX/UI Designer",
    category: "Technology",
    description:
      "Design user interfaces and experiences for websites and mobile applications, focusing on usability and aesthetics.",
    averageSalary: {
      entry: 400000,
      mid: 1000000,
      senior: 2500000,
    },
    lifestyle: {
      workHours: "40-45 hours/week",
      workEnvironment: "Tech companies, design agencies, product teams",
      stressLevel: "Medium",
      workLifeBalance: "Good",
      travelRequired: false,
      remoteWork: true,
    },
    education: {
      stream: ["Arts", "Commerce", "Any"],
      degree: "B.Des in UX Design or B.Tech + UX certification",
      entranceExams: ["NID Entrance", "UCEED"],
      topInstitutions: [
        "NID Ahmedabad",
        "IIIT Bangalore",
        "MIT ID Pune",
        "Online UX certifications",
      ],
      duration: "4 years + continuous learning",
    },
    skills: [
      "User research",
      "Wireframing",
      "Prototyping",
      "UI design tools",
      "Usability testing",
    ],
    jobOutlook: "High Demand",
    pros: [
      "Creative field",
      "High demand",
      "Good salary",
      "Remote work",
      "Direct user impact",
    ],
    cons: [
      "Subjective feedback",
      "Changing trends",
      "Technical learning",
      "Client revisions",
      "Portfolio pressure",
    ],
    suitableFor: [
      "Creative problem solvers",
      "User-focused individuals",
      "Tech enthusiasts",
    ],
    alternatives: [
      "Product Designer",
      "Interaction Designer",
      "Design Researcher",
    ],
  },
];

export function getCareerById(id: string): CareerOption | undefined {
  return careerDatabase.find((career) => career.id === id);
}

export function getCareersByCategory(category: string): CareerOption[] {
  return careerDatabase.filter((career) => career.category === category);
}

export function searchCareers(query: string): CareerOption[] {
  const lowercaseQuery = query.toLowerCase();
  return careerDatabase.filter(
    (career) =>
      career.name.toLowerCase().includes(lowercaseQuery) ||
      career.description.toLowerCase().includes(lowercaseQuery) ||
      career.category.toLowerCase().includes(lowercaseQuery) ||
      career.skills.some((skill) =>
        skill.toLowerCase().includes(lowercaseQuery),
      ),
  );
}

export function getCareersBySalaryRange(
  min: number,
  max: number,
): CareerOption[] {
  return careerDatabase.filter(
    (career) =>
      career.averageSalary.entry >= min && career.averageSalary.entry <= max,
  );
}

export function getCareersByStream(stream: string): CareerOption[] {
  return careerDatabase.filter((career) =>
    career.education.stream.includes(stream),
  );
}
