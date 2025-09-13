export interface CareerCaution {
  careerId: string;
  careerName: string;
  overallRisk: "Low" | "Medium" | "High" | "Very High";
  marketSaturation: {
    level: "Low" | "Medium" | "High" | "Very High";
    description: string;
    evidence: string;
  };
  burnoutRisk: {
    level: "Low" | "Medium" | "High" | "Very High";
    description: string;
    indicators: string[];
  };
  jobDisplacementRisk: {
    level: "Low" | "Medium" | "High" | "Very High";
    description: string;
    timeframe: string;
  };
  financialRisks: {
    level: "Low" | "Medium" | "High" | "Very High";
    description: string;
    concerns: string[];
  };
  workLifeBalance: {
    level: "Poor" | "Moderate" | "Good" | "Excellent";
    description: string;
    sacrifices: string[];
  };
  competitionLevel: {
    level: "Low" | "Medium" | "High" | "Very High";
    description: string;
    entryBarriers: string[];
  };
  futureViability: {
    outlook: "Stable" | "Growing" | "Declining" | "Uncertain";
    description: string;
    influencingFactors: string[];
  };
  requiredSacrifices: string[];
  industryChallenges: string[];
  geographicLimitations: string[];
  educationalConcerns: string[];
  keyWarnings: string[];
  realisticExpectations: string[];
}

export const careerCautionsDatabase: CareerCaution[] = [
  {
    careerId: "software-engineer",
    careerName: "Software Engineer",
    overallRisk: "Medium",
    marketSaturation: {
      level: "High",
      description:
        "India produces over 1.5 million engineering graduates annually, leading to high competition",
      evidence:
        "2023 placement data shows 40% of fresh graduates remain unemployed for 6+ months",
    },
    burnoutRisk: {
      level: "High",
      description:
        "Tech industry known for demanding crunch periods and constant learning pressure",
      indicators: [
        "Extended work hours",
        "Tight deadlines",
        "Continuous skill updates",
        "On-call support",
      ],
    },
    jobDisplacementRisk: {
      level: "High",
      description: "AI automation could replace 30-50% of coding tasks by 2030",
      timeframe: "Next 5-10 years",
    },
    financialRisks: {
      level: "Medium",
      description:
        "While salaries are good, many face delayed payments and variable income",
      concerns: [
        "Delayed salary payments",
        "Variable performance bonuses",
        "Job hopping pressure",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description: "Common to work 50-60 hours/week during project deadlines",
      sacrifices: [
        "Personal time",
        "Family time",
        "Physical health",
        "Mental well-being",
      ],
    },
    competitionLevel: {
      level: "Very High",
      description:
        "Thousands of applicants per job opening, especially in top companies",
      entryBarriers: [
        "Competitive coding interviews",
        "Algorithm knowledge",
        "System design skills",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description: "Demand will grow but so will automation and offshoring",
      influencingFactors: [
        "AI advancement",
        "Global outsourcing",
        "Remote work trends",
      ],
    },
    requiredSacrifices: [
      "Continuous learning (weekends/holidays)",
      "Work-life balance during project deadlines",
      "Physical health (sedentary work)",
      "Social life (irregular hours)",
      "Location flexibility (may need to relocate)",
    ],
    industryChallenges: [
      "Rapid technological changes requiring constant upskilling",
      "High pressure from stakeholders and deadlines",
      "Global competition from cheaper labor markets",
      "Mental health issues due to prolonged screen time",
      "Age discrimination in tech industry (35+ harder to get jobs)",
    ],
    geographicLimitations: [
      "Major opportunities concentrated in metro cities",
      "Tier 2/3 cities have limited tech ecosystem",
      "Remote work still not widely accepted in many companies",
    ],
    educationalConcerns: [
      "High competition in top engineering colleges",
      "Many private colleges have poor placement records",
      "Coding bootcamps may not provide sufficient depth",
      "Self-taught developers face credibility issues",
    ],
    keyWarnings: [
      "Don't assume high salary guarantees job satisfaction",
      "Burnout is real and affects 70% of developers",
      "Ageism exists - plan for career transition after 35",
      'Many "senior developers" earn less than fresh graduates at top companies',
      "Job security depends heavily on staying updated with latest technologies",
    ],
    realisticExpectations: [
      "Entry level: 3-6 months unemployment is common",
      "Mid level: May need to switch companies every 2-3 years for salary growth",
      "Senior level: Leadership roles require people management skills, not just technical",
      "Work-life balance improves only after 5-7 years of experience",
      "Salary growth slows significantly after ₹30-40 LPA",
    ],
  },
  {
    careerId: "doctor-mbbs",
    careerName: "Medical Doctor (MBBS)",
    overallRisk: "High",
    marketSaturation: {
      level: "Very High",
      description:
        "India produces 80,000+ MBBS doctors annually but limited government jobs",
      evidence: "NEET has 18 lakh applicants for 90,000 seats annually",
    },
    burnoutRisk: {
      level: "Very High",
      description: "Medical profession has highest burnout rates globally",
      indicators: [
        "24/7 availability",
        "Life-and-death decisions",
        "Emotional toll",
        "Physical exhaustion",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "AI can assist but cannot replace human doctors in complex cases",
      timeframe: "Limited impact in next 20+ years",
    },
    financialRisks: {
      level: "High",
      description:
        "High educational debt combined with delayed earning potential",
      concerns: [
        "₹50-100 lakh educational debt",
        "5-7 year delay in earning",
        "Variable private practice income",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description:
        "Emergency calls, night shifts, and long working hours are standard",
      sacrifices: [
        "Family time",
        "Personal life",
        "Physical health",
        "Mental health",
        "Social life",
      ],
    },
    competitionLevel: {
      level: "Very High",
      description: "NEET exam has success rate of less than 5%",
      entryBarriers: [
        "NEET qualification",
        "High cutoff marks",
        "Limited seats",
        "High fees",
      ],
    },
    futureViability: {
      outlook: "Stable",
      description:
        "Healthcare demand will grow with population but supply exceeds demand",
      influencingFactors: [
        "Population growth",
        "Government healthcare policies",
        "Medical tourism",
        "Private healthcare growth",
      ],
    },
    requiredSacrifices: [
      "10+ years of education and training",
      "₹50-100 lakh investment in education",
      "5-7 years of low/no income during training",
      "24/7 availability for emergency cases",
      "High stress and emotional toll",
    ],
    industryChallenges: [
      "Extreme competition for medical seats",
      "High educational debt burden",
      "Long training period with low income",
      "High risk of medical negligence lawsuits",
      "Patient violence and harassment",
      "Poor work-life balance leading to family issues",
      "Age discrimination in private practice establishment",
    ],
    geographicLimitations: [
      "Quality medical education concentrated in metro cities",
      "Rural areas have poor job prospects",
      "International practice requires additional qualifications",
      "Urban areas have oversaturation of doctors",
    ],
    educationalConcerns: [
      "Extremely competitive entrance exams",
      "High failure rates in medical education",
      "Limited seats compared to aspirants",
      "Quality variation between medical colleges",
      "High tuition fees and living costs",
      "Stress and mental health issues during training",
    ],
    keyWarnings: [
      "Only 1 in 20 NEET aspirants gets a medical seat",
      "Average debt burden of ₹80 lakh for private medical colleges",
      "70% of doctors experience burnout within 5 years",
      "Private practice success depends on location and connections",
      "Many doctors work 80+ hours/week regularly",
    ],
    realisticExpectations: [
      "Entry level: 3-5 years of residency with minimal pay",
      "Mid level: May need to work in multiple cities for experience",
      "Senior level: Private practice success varies greatly by location",
      "Work-life balance remains poor even after 10+ years",
      "Financial returns may take 15-20 years to materialize",
    ],
  },
  {
    careerId: "chartered-accountant",
    careerName: "Chartered Accountant (CA)",
    overallRisk: "Medium",
    marketSaturation: {
      level: "High",
      description:
        "ICAI produces 50,000+ CAs annually but job market is competitive",
      evidence: "Average 6-12 months for first job placement",
    },
    burnoutRisk: {
      level: "High",
      description: "Tax season creates extreme work pressure and long hours",
      indicators: [
        "March-April tax season overload",
        "Client deadlines",
        "Audit pressures",
        "Continuous learning",
      ],
    },
    jobDisplacementRisk: {
      level: "Medium",
      description: "AI tools can automate 40-60% of basic accounting tasks",
      timeframe: "Next 5-8 years",
    },
    financialRisks: {
      level: "Medium",
      description: "Variable income and delayed payments common in practice",
      concerns: [
        "Irregular client payments",
        "High business establishment costs",
        "Competition from cheaper alternatives",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description: "Tax season demands 80-100 hours/week for 2-3 months",
      sacrifices: [
        "Personal time during tax season",
        "Family commitments",
        "Health and fitness",
        "Social life",
      ],
    },
    competitionLevel: {
      level: "High",
      description: "Thousands apply for limited CA training positions",
      entryBarriers: [
        "CPT exam qualification",
        "3-year articleship",
        "IPCC and Final exams",
        "Practical training",
      ],
    },
    futureViability: {
      outlook: "Stable",
      description:
        "Demand for compliance and advisory services will remain but automation will increase",
      influencingFactors: [
        "Regulatory changes",
        "Digital transformation",
        "AI adoption",
        "Economic policies",
      ],
    },
    requiredSacrifices: [
      "4-5 years of rigorous training",
      "Low stipend during articleship (₹8,000-15,000/month)",
      "Irregular working hours especially during tax season",
      "High competition for good firms",
      "Continuous professional development costs",
    ],
    industryChallenges: [
      "Extreme work pressure during tax season (March-April)",
      "High competition from commerce graduates",
      "Rising automation reducing demand for basic accounting",
      "Client acquisition challenges for new practitioners",
      "Professional development costs and exam fees",
      "Work-life balance issues leading to health problems",
    ],
    geographicLimitations: [
      "Major CA firms concentrated in metro cities",
      "Rural areas have limited CA practice opportunities",
      "International practice requires additional certifications",
      "Tier 2 cities have fewer established firms",
    ],
    educationalConcerns: [
      "High failure rates in CA exams (40-60%)",
      "Limited articleship positions compared to qualified students",
      "Quality of training varies by firm size",
      "High coaching costs for exam preparation",
      "Time management challenges during articleship",
    ],
    keyWarnings: [
      "Tax season will ruin your work-life balance for 2-3 months yearly",
      "60% of CA exam attempts fail - be prepared for multiple attempts",
      "Articleship stipend is very low compared to effort required",
      "Private practice success depends on client network and location",
      "Many CAs switch careers after 5-7 years due to burnout",
    ],
    realisticExpectations: [
      "Entry level: 6-12 months job search after qualification",
      "Mid level: Salary growth depends on firm size and client quality",
      "Senior level: Partnership or senior positions are highly competitive",
      "Work-life balance improves only after establishing own practice",
      "Financial success varies greatly based on specialization and location",
    ],
  },
  {
    careerId: "data-scientist",
    careerName: "Data Scientist",
    overallRisk: "Medium",
    marketSaturation: {
      level: "Medium",
      description: "Growing field but oversupply of data science graduates",
      evidence:
        "2023 reports show 2 lakh data science graduates but only 50k relevant jobs",
    },
    burnoutRisk: {
      level: "High",
      description:
        "High pressure to deliver insights quickly with tight deadlines",
      indicators: [
        "Project deadlines",
        "Stakeholder expectations",
        "Continuous learning",
        "Data quality issues",
      ],
    },
    jobDisplacementRisk: {
      level: "High",
      description:
        "AI tools and no-code platforms can automate many data science tasks",
      timeframe: "Next 3-5 years",
    },
    financialRisks: {
      level: "Medium",
      description:
        "High salaries but variable bonuses and job security concerns",
      concerns: [
        "Performance-based bonuses",
        "Project-dependent income",
        "Skill obsolescence",
      ],
    },
    workLifeBalance: {
      level: "Moderate",
      description: "Generally good but project deadlines can create pressure",
      sacrifices: [
        "Learning time",
        "Personal projects",
        "Work-life boundaries during crunch periods",
      ],
    },
    competitionLevel: {
      level: "High",
      description: "Many bootcamps and certifications flooding the market",
      entryBarriers: [
        "Statistical knowledge",
        "Programming skills",
        "Domain expertise",
        "Mathematics background",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Demand will grow but so will automation and citizen data science",
      influencingFactors: [
        "AI advancement",
        "Big data growth",
        "Privacy regulations",
        "Industry digitalization",
      ],
    },
    requiredSacrifices: [
      "Strong mathematics and statistics background required",
      "Continuous learning of new tools and techniques",
      "High competition for entry-level positions",
      "May need domain expertise in addition to technical skills",
      "Performance pressure and tight deadlines",
    ],
    industryChallenges: [
      "Rapidly changing tools and technologies",
      "High competition from bootcamp graduates",
      "Need for domain knowledge in addition to technical skills",
      "Data quality and privacy concerns",
      "Stakeholder management and communication challenges",
      "Mathematical complexity and abstract thinking required",
    ],
    geographicLimitations: [
      "Major opportunities in tech hubs (Bangalore, Mumbai, Delhi)",
      "Limited opportunities in non-tech cities",
      "Remote work acceptance varies by company",
      "International opportunities require visa sponsorship",
    ],
    educationalConcerns: [
      "Many bootcamps provide insufficient depth",
      "Self-taught data scientists face credibility issues",
      "Mathematics background often lacking in graduates",
      "Rapidly changing curriculum and tools",
      "High competition for quality training programs",
    ],
    keyWarnings: [
      "Data science job market is oversaturated with bootcamp graduates",
      'Many "data scientists" end up doing basic analytics work',
      "Strong mathematics background is essential",
      "Tools and technologies change every 6-12 months",
      "Domain expertise is as important as technical skills",
    ],
    realisticExpectations: [
      "Entry level: May take 6-12 months to get first data science role",
      "Mid level: Need 2-3 years to become truly proficient",
      "Senior level: Leadership roles require business acumen, not just technical skills",
      "Salary varies greatly based on company size and industry",
      "Many data scientists transition to management or specialized roles",
    ],
  },
  {
    careerId: "civil-engineer",
    careerName: "Civil Engineer",
    overallRisk: "Medium",
    marketSaturation: {
      level: "High",
      description: "Construction industry slowdown and oversupply of engineers",
      evidence: "Real estate slowdown has reduced new projects by 40%",
    },
    burnoutRisk: {
      level: "Medium",
      description: "Site work and project deadlines create moderate stress",
      indicators: [
        "Site visit fatigue",
        "Client deadlines",
        "Weather dependencies",
        "Safety concerns",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Physical construction work is difficult to automate completely",
      timeframe: "Limited impact in next 10-15 years",
    },
    financialRisks: {
      level: "High",
      description: "Project-dependent income and delayed payments common",
      concerns: [
        "Project delays affect salary",
        "Delayed payments from contractors",
        "Seasonal work variations",
      ],
    },
    workLifeBalance: {
      level: "Moderate",
      description: "Site visits and fieldwork affect work hours",
      sacrifices: [
        "Family time during site visits",
        "Health due to outdoor work",
        "Weekend work for project deadlines",
      ],
    },
    competitionLevel: {
      level: "High",
      description: "Thousands of civil engineering graduates annually",
      entryBarriers: [
        "Technical knowledge",
        "Site experience",
        "Software skills",
        "Licensing requirements",
      ],
    },
    futureViability: {
      outlook: "Stable",
      description:
        "Infrastructure development will continue but real estate slowdown affects short-term prospects",
      influencingFactors: [
        "Government infrastructure spending",
        "Real estate market",
        "Smart city projects",
        "Green building trends",
      ],
    },
    requiredSacrifices: [
      "Site work involving travel and outdoor conditions",
      "Irregular working hours during project deadlines",
      "Health risks from construction site environments",
      "Location constraints for project-based work",
      "Continuous learning of new construction technologies",
    ],
    industryChallenges: [
      "Real estate slowdown reducing new projects",
      "Intense competition for government and PSU jobs",
      "Site work challenges (weather, safety, logistics)",
      "Delayed payments and financial uncertainty",
      "Need for multiple skills (technical + managerial)",
      "Political interference in government projects",
    ],
    geographicLimitations: [
      "Major projects concentrated in urban areas",
      "Rural areas have limited construction activity",
      "Site work requires physical presence",
      "International opportunities limited by local licensing",
    ],
    educationalConcerns: [
      "Many engineering colleges lack practical training",
      "Site experience difficult to gain during studies",
      "Software skills often not taught adequately",
      "Quality variation between government and private colleges",
      "Lack of industry-academia collaboration",
    ],
    keyWarnings: [
      "Construction industry heavily dependent on economic cycles",
      "Site work is physically demanding and weather-dependent",
      "Government jobs have long waiting periods and transfers",
      "Private sector has high job insecurity",
      "Many engineers work as site supervisors rather than designers",
    ],
    realisticExpectations: [
      "Entry level: May work as site engineers with basic supervision",
      "Mid level: Need 5-7 years for project management roles",
      "Senior level: Leadership roles require business development skills",
      "Salary growth depends on project success and company size",
      "Work-life balance varies greatly by company and project type",
    ],
  },
  {
    careerId: "nurse",
    careerName: "Registered Nurse",
    overallRisk: "Medium",
    marketSaturation: {
      level: "Medium",
      description:
        "Growing healthcare sector but nursing shortage in rural areas",
      evidence: "India has 2 nurses per 1000 people vs WHO recommendation of 3",
    },
    burnoutRisk: {
      level: "Very High",
      description:
        "Nursing has highest burnout rates among healthcare professions",
      indicators: [
        "Shift work",
        "Patient care stress",
        "Emotional toll",
        "Physical demands",
        "Staff shortages",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Patient care requires human touch and emotional intelligence",
      timeframe: "Minimal impact in next 20+ years",
    },
    financialRisks: {
      level: "Low",
      description: "Stable government salaries but private sector variations",
      concerns: [
        "Overtime pay disputes",
        "Variable private hospital incentives",
        "Staff shortages affecting workload",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description:
        "Shift work and on-call duties affect personal life significantly",
      sacrifices: [
        "Sleep patterns",
        "Family time",
        "Social life",
        "Physical health",
        "Mental well-being",
      ],
    },
    competitionLevel: {
      level: "Medium",
      description: "Growing demand but competition for reputed institutions",
      entryBarriers: [
        "Nursing entrance exams",
        "Clinical training",
        "Licensing requirements",
        "Age restrictions",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Healthcare demand will grow with aging population and medical advancements",
      influencingFactors: [
        "Population aging",
        "Healthcare expansion",
        "Medical tourism",
        "Government initiatives",
      ],
    },
    requiredSacrifices: [
      "Irregular shift work (12-hour shifts, night shifts)",
      "High emotional and physical demands",
      "On-call duties affecting personal life",
      "Health risks from patient contact",
      "Continuous professional development requirements",
    ],
    industryChallenges: [
      "Extreme emotional and physical exhaustion",
      "High patient-to-nurse ratios leading to burnout",
      "Shift work disrupting biological rhythms",
      "Exposure to infectious diseases and workplace violence",
      "Staff shortages increasing workload",
      "Limited career progression in many settings",
      "Emotional toll of patient suffering and death",
    ],
    geographicLimitations: [
      "Urban hospitals have better working conditions",
      "Rural areas face severe nursing shortages",
      "International opportunities require additional certifications",
      "Metro cities have higher cost of living",
    ],
    educationalConcerns: [
      "Quality variation between nursing colleges",
      "Limited clinical exposure during training",
      "High competition for government nursing colleges",
      "Practical training often insufficient",
      "Age limits for nursing courses (17-25 years typically)",
    ],
    keyWarnings: [
      "Nursing has the highest burnout rate among healthcare professions",
      "Shift work will permanently disrupt your sleep patterns",
      "Emotional toll can lead to compassion fatigue",
      "Physical demands are high with lifting and long hours",
      "Many nurses leave the profession within 5 years due to burnout",
    ],
    realisticExpectations: [
      "Entry level: 12-hour shifts and night duties from day one",
      "Mid level: Specialization increases responsibilities and stress",
      "Senior level: Administrative roles reduce direct patient care",
      "Work-life balance remains challenging even in senior positions",
      "Many nurses work second jobs or overtime for financial reasons",
    ],
  },
  {
    careerId: "teacher",
    careerName: "School Teacher",
    overallRisk: "Low",
    marketSaturation: {
      level: "Medium",
      description:
        "Government teacher recruitment is irregular, private sector competitive",
      evidence: "TET exam has lakhs of applicants for limited positions",
    },
    burnoutRisk: {
      level: "Medium",
      description:
        "Classroom management and administrative work create moderate stress",
      indicators: [
        "Large class sizes",
        "Administrative paperwork",
        "Parent interactions",
        "Performance pressure",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Traditional teaching requires human interaction and mentorship",
      timeframe: "Limited impact, though online education will grow",
    },
    financialRisks: {
      level: "Low",
      description:
        "Stable government salaries, though private school variations exist",
      concerns: [
        "Delayed promotions",
        "Variable private school salaries",
        "Additional coaching income pressure",
      ],
    },
    workLifeBalance: {
      level: "Good",
      description:
        "Fixed working hours with holidays, though correction work continues",
      sacrifices: [
        "Evening correction work",
        "Holiday planning",
        "Professional development on weekends",
      ],
    },
    competitionLevel: {
      level: "High",
      description: "TET and other teaching exams have high competition",
      entryBarriers: [
        "Teaching eligibility tests",
        "B.Ed qualification",
        "Subject expertise",
        "Communication skills",
      ],
    },
    futureViability: {
      outlook: "Stable",
      description:
        "Education demand will grow but online platforms may reduce traditional teaching jobs",
      influencingFactors: [
        "Education policy changes",
        "Online learning growth",
        "Teacher shortage",
        "Government initiatives",
      ],
    },
    requiredSacrifices: [
      "Evening and weekend work for corrections and planning",
      "Emotional investment in student success",
      "Continuous professional development",
      "Administrative paperwork and compliance",
      "Dealing with diverse student backgrounds and challenges",
    ],
    industryChallenges: [
      "Large class sizes (40-60 students) in government schools",
      "Administrative burden and paperwork",
      "Performance pressure and regular evaluations",
      "Parent interactions and expectations",
      "Limited salary growth compared to other professions",
      "Emotional toll of student failures and behavioral issues",
    ],
    geographicLimitations: [
      "Government jobs require willingness to work in rural areas",
      "Private school jobs concentrated in urban areas",
      "Inter-state mobility for government jobs",
      "Location-based salary variations",
    ],
    educationalConcerns: [
      "B.Ed requirement adds extra year and cost",
      "TET exam competition is extremely high",
      "Quality of B.Ed programs varies significantly",
      "Practical teaching experience often limited",
      "Subject specialization may limit job opportunities",
    ],
    keyWarnings: [
      "Government teacher recruitment is irregular and political",
      "Private schools may have uncertain job security",
      "Emotional investment in students can be draining",
      "Administrative work often exceeds teaching time",
      "Salary growth is slow compared to corporate jobs",
    ],
    realisticExpectations: [
      "Entry level: May teach large classes with limited resources",
      "Mid level: Administrative responsibilities increase with experience",
      "Senior level: Leadership roles require additional qualifications",
      "Work satisfaction depends on school environment and management",
      "Many teachers take additional tutoring for supplemental income",
    ],
  },
  {
    careerId: "business-analyst",
    careerName: "Business Analyst",
    overallRisk: "Low",
    marketSaturation: {
      level: "Medium",
      description: "Growing demand but oversupply from management graduates",
      evidence: "MBA programs produce 2 lakh graduates annually",
    },
    burnoutRisk: {
      level: "Medium",
      description:
        "Project deadlines and stakeholder management create moderate pressure",
      indicators: [
        "Project deadlines",
        "Client interactions",
        "Changing requirements",
        "Presentation pressure",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Business analysis requires domain knowledge and stakeholder management",
      timeframe: "Minimal impact in next 10+ years",
    },
    financialRisks: {
      level: "Low",
      description: "Stable corporate salaries with performance bonuses",
      concerns: [
        "Variable bonus components",
        "Job switching for salary growth",
        "Industry-specific salary variations",
      ],
    },
    workLifeBalance: {
      level: "Good",
      description:
        "Generally good work-life balance with flexible hours in many companies",
      sacrifices: [
        "Travel for client meetings",
        "Weekend project work",
        "Learning new business domains",
      ],
    },
    competitionLevel: {
      level: "Medium",
      description:
        "MBA graduates create competition but specialized skills required",
      entryBarriers: [
        "MBA qualification",
        "Domain knowledge",
        "Analytical skills",
        "Communication abilities",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Business analysis demand will grow with digital transformation",
      influencingFactors: [
        "Digital transformation",
        "Business process optimization",
        "Data-driven decision making",
        "Industry growth",
      ],
    },
    requiredSacrifices: [
      "MBA investment and opportunity cost",
      "Domain expertise development",
      "Client travel and relationship building",
      "Continuous learning of business processes",
      "Presentation and communication skills development",
    ],
    industryChallenges: [
      "High competition from MBA graduates",
      "Need for domain expertise in addition to technical skills",
      "Changing business requirements and scope creep",
      "Stakeholder management and politics",
      "Keeping up with industry trends and technologies",
      "Travel requirements for client interactions",
    ],
    geographicLimitations: [
      "Corporate jobs concentrated in business hubs",
      "Consulting roles require travel flexibility",
      "Metro cities offer better opportunities",
      "Remote work acceptance varies by industry",
    ],
    educationalConcerns: [
      "MBA programs are expensive (₹10-30 lakh)",
      "Quality variation between B-schools",
      "ROI depends on college reputation and placement",
      "Specialization choice affects career trajectory",
      "Soft skills often not adequately developed",
    ],
    keyWarnings: [
      "MBA degree alone doesn't guarantee high salary",
      "Domain expertise is crucial for career progression",
      "Corporate politics can affect job satisfaction",
      "Travel requirements vary by company and role",
      "Many BAs switch to product management or consulting later",
    ],
    realisticExpectations: [
      "Entry level: May start with basic analysis and reporting",
      "Mid level: Need 3-5 years for complex project handling",
      "Senior level: Leadership roles require people management skills",
      "Salary depends on company size, industry, and location",
      "Career growth often involves specialization in specific domains",
    ],
  },
  {
    careerId: "graphic-designer",
    careerName: "Graphic Designer",
    overallRisk: "Medium",
    marketSaturation: {
      level: "High",
      description:
        "Design field flooded with graduates from numerous design schools",
      evidence: "2023 reports show 1 lakh+ design graduates annually",
    },
    burnoutRisk: {
      level: "Medium",
      description:
        "Client deadlines and creative pressure create moderate stress",
      indicators: [
        "Tight deadlines",
        "Client revisions",
        "Creative blocks",
        "Portfolio maintenance",
      ],
    },
    jobDisplacementRisk: {
      level: "High",
      description:
        "AI design tools and no-code platforms threaten entry-level positions",
      timeframe: "Next 3-5 years",
    },
    financialRisks: {
      level: "High",
      description:
        "Freelance nature creates income instability and client dependency",
      concerns: [
        "Irregular client payments",
        "Freelance income fluctuations",
        "Project-based work",
        "Competition from global designers",
      ],
    },
    workLifeBalance: {
      level: "Moderate",
      description: "Flexible hours but client deadlines can create pressure",
      sacrifices: [
        "Personal projects during busy periods",
        "Fixed working hours",
        "Client relationship management",
      ],
    },
    competitionLevel: {
      level: "Very High",
      description:
        "Thousands of design graduates and self-taught designers compete globally",
      entryBarriers: [
        "Portfolio quality",
        "Software skills",
        "Creative ability",
        "Client acquisition",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Demand will grow but automation and global competition will increase",
      influencingFactors: [
        "AI design tools",
        "Remote work trends",
        "Global outsourcing",
        "Brand importance",
      ],
    },
    requiredSacrifices: [
      "Building and maintaining professional portfolio",
      "Continuous learning of design tools and trends",
      "Client relationship management and networking",
      "Irregular income and financial planning",
      "Creative work requiring inspiration on demand",
    ],
    industryChallenges: [
      "Extreme competition from global and local designers",
      "Client expectations and frequent revisions",
      "Keeping portfolio updated with latest trends",
      "Income instability in freelance work",
      "Technology changes requiring constant upskilling",
      "Subjective nature of design evaluation",
      "Building client base and reputation",
    ],
    geographicLimitations: [
      "Major clients in metro cities",
      "International work requires understanding cultural differences",
      "Local design trends may not appeal to global clients",
      "Remote work possible but client trust issues",
    ],
    educationalConcerns: [
      "Quality variation between design institutes",
      "Many institutes focus on theory over practical skills",
      "Portfolio development often left to students",
      "Industry connections vary by institute reputation",
      "Self-taught designers often lack formal training credibility",
    ],
    keyWarnings: [
      "Design field is highly competitive with global competition",
      "Freelance work creates financial uncertainty",
      "Client revisions can be frustrating and time-consuming",
      "Building reputation takes years of consistent work",
      "AI tools may replace basic design work in future",
    ],
    realisticExpectations: [
      "Entry level: May work as junior designer with basic tasks",
      "Mid level: Need strong portfolio and client testimonials",
      "Senior level: Leadership requires business development skills",
      "Freelance success depends on marketing and client acquisition",
      "Many designers work second jobs or do agency work for stability",
    ],
  },
  {
    careerId: "lawyer",
    careerName: "Lawyer",
    overallRisk: "Medium",
    marketSaturation: {
      level: "High",
      description:
        "Law colleges produce 1 lakh+ graduates annually but limited quality jobs",
      evidence: "CLAT has 50,000 applicants for 2,000 seats in top colleges",
    },
    burnoutRisk: {
      level: "High",
      description:
        "Court appearances, case preparation, and client pressure create high stress",
      indicators: [
        "Court deadlines",
        "Client expectations",
        "Case research",
        "Long working hours",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Legal profession requires judgment and client relationships that AI cannot replace",
      timeframe: "Limited impact in next 15+ years",
    },
    financialRisks: {
      level: "High",
      description:
        "Private practice income highly variable and dependent on case success",
      concerns: [
        "Irregular client payments",
        "Case outcome dependency",
        "High establishment costs",
        "Competition from larger firms",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description:
        "Court timings, case preparation, and client meetings affect personal life",
      sacrifices: [
        "Court timing constraints",
        "Evening case preparation",
        "Client emergencies",
        "Travel for court appearances",
      ],
    },
    competitionLevel: {
      level: "Very High",
      description:
        "CLAT and other law entrance exams have extremely high competition",
      entryBarriers: [
        "CLAT qualification",
        "Law college admission",
        "Bar council enrollment",
        "Internship requirements",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Legal demand will grow with business expansion but corporate firms dominate",
      influencingFactors: [
        "Business growth",
        "Regulatory changes",
        "Legal tech adoption",
        "International arbitration",
      ],
    },
    requiredSacrifices: [
      "5+ years of legal education and training",
      "High competition for quality internships",
      "Irregular working hours and court timings",
      "Emotional toll of client cases and court pressure",
      "Continuous legal research and updates",
    ],
    industryChallenges: [
      "Extreme competition for top law college admissions",
      "High cost of legal education (₹10-50 lakh)",
      "Difficulty in establishing private practice",
      "Long working hours and court pressure",
      "Client acquisition and reputation building",
      "Keeping up with changing laws and precedents",
      "Emotional toll of handling difficult cases",
    ],
    geographicLimitations: [
      "Major law firms concentrated in metro cities",
      "Court practice limited to local jurisdiction",
      "International practice requires additional qualifications",
      "Rural areas have limited legal practice opportunities",
    ],
    educationalConcerns: [
      "CLAT exam has success rate of less than 4%",
      "Quality variation between law colleges",
      "Clinical legal education often insufficient",
      "High tuition fees and living costs",
      "Bar council exam after graduation",
      "Internship competition is intense",
    ],
    keyWarnings: [
      "Law school admissions are extremely competitive",
      "Private practice establishment takes 5-10 years",
      "Court work involves long hours and stress",
      "Client relationships can be demanding and unpredictable",
      "Many lawyers work second jobs or do corporate work for stability",
    ],
    realisticExpectations: [
      "Entry level: 2-3 year training period with low pay",
      "Mid level: May need to work in multiple cities for experience",
      "Senior level: Partnership opportunities are highly competitive",
      "Work-life balance remains poor even after 10+ years",
      "Financial success varies greatly based on practice area and location",
    ],
  },
  {
    careerId: "journalist",
    careerName: "Journalist",
    overallRisk: "High",
    marketSaturation: {
      level: "Very High",
      description:
        "Journalism field overcrowded with graduates and digital content creators",
      evidence: "Mass communication graduates exceed industry capacity by 3x",
    },
    burnoutRisk: {
      level: "High",
      description:
        "Deadline pressure, irregular hours, and emotional toll create high stress",
      indicators: [
        "Breaking news pressure",
        "Deadline stress",
        "Travel demands",
        "Safety risks",
        "Emotional stories",
      ],
    },
    jobDisplacementRisk: {
      level: "Very High",
      description:
        "AI content generation and citizen journalism threaten traditional roles",
      timeframe: "Next 3-5 years",
    },
    financialRisks: {
      level: "Very High",
      description:
        "Low entry salaries, irregular payments, and high job insecurity",
      concerns: [
        "Low starting salaries",
        "Irregular freelance payments",
        "Job cuts during downturns",
        "No fixed income",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description:
        "Breaking news, deadlines, and field reporting disrupt personal life",
      sacrifices: [
        "Sleep patterns",
        "Family time",
        "Personal safety",
        "Mental health",
        "Social life",
      ],
    },
    competitionLevel: {
      level: "Very High",
      description:
        "Thousands of journalism graduates compete for limited positions",
      entryBarriers: [
        "Mass communication degree",
        "Writing skills",
        "Networking",
        "Beat knowledge",
        "Language proficiency",
      ],
    },
    futureViability: {
      outlook: "Declining",
      description:
        "Traditional journalism jobs declining due to digital disruption",
      influencingFactors: [
        "Digital media growth",
        "AI content creation",
        "Social media influence",
        "Advertising revenue decline",
      ],
    },
    requiredSacrifices: [
      "Irregular working hours including nights and weekends",
      "Travel and field reporting in difficult conditions",
      "Personal safety risks in conflict areas",
      "Low starting salaries for extended periods",
      "Emotional toll of covering traumatic events",
    ],
    industryChallenges: [
      "News industry job cuts and pay cuts",
      "Competition from citizen journalists and bloggers",
      "Pressure to produce viral content over quality reporting",
      "Safety risks in field reporting",
      "Emotional toll of covering negative stories",
      "Declining advertising revenue affecting job security",
      "Need to build personal brand and following",
    ],
    geographicLimitations: [
      "Major media houses in Delhi, Mumbai, and state capitals",
      "Field reporting may require travel to remote areas",
      "Local language skills important for regional journalism",
      "International journalism requires additional skills",
    ],
    educationalConcerns: [
      "Many journalism courses lack practical training",
      "Quality variation between mass communication colleges",
      "Industry connections vary by institute reputation",
      "Digital skills often not adequately taught",
      "Portfolio development left to students",
    ],
    keyWarnings: [
      "Journalism industry is in decline with many job losses",
      "Starting salaries are very low (₹10,000-20,000/month)",
      "Job security is poor with frequent layoffs",
      "Emotional toll can lead to burnout and mental health issues",
      "Many journalists leave the field within 3-5 years",
    ],
    realisticExpectations: [
      "Entry level: May work as stringers with irregular payments",
      "Mid level: Need 3-5 years to become established journalist",
      "Senior level: Senior positions are highly competitive",
      "Digital skills become increasingly important",
      "Many journalists diversify into content creation or PR",
    ],
  },
  {
    careerId: "hotel-management",
    careerName: "Hotel Management Professional",
    overallRisk: "Medium",
    marketSaturation: {
      level: "Medium",
      description:
        "Hospitality industry growing but competition from unqualified workers",
      evidence: "Hospitality graduates exceed industry requirements",
    },
    burnoutRisk: {
      level: "High",
      description:
        "Shift work, customer service pressure, and long hours create stress",
      indicators: [
        "Customer complaints",
        "Shift work",
        "Peak season overload",
        "Service standards pressure",
      ],
    },
    jobDisplacementRisk: {
      level: "Low",
      description:
        "Customer service requires human interaction and problem-solving",
      timeframe: "Limited impact in next 10+ years",
    },
    financialRisks: {
      level: "Medium",
      description: "Seasonal variations and tip-dependent income in some roles",
      concerns: [
        "Seasonal unemployment",
        "Variable tips and incentives",
        "Location-based salary variations",
      ],
    },
    workLifeBalance: {
      level: "Poor",
      description:
        "Hospitality industry requires evening, weekend, and holiday work",
      sacrifices: [
        "Family time",
        "Social life",
        "Sleep patterns",
        "Holiday availability",
        "Personal relationships",
      ],
    },
    competitionLevel: {
      level: "High",
      description:
        "Hospitality courses produce many graduates, competition for quality positions",
      entryBarriers: [
        "IHM qualification",
        "Internship experience",
        "Language skills",
        "Customer service aptitude",
      ],
    },
    futureViability: {
      outlook: "Growing",
      description:
        "Tourism and hospitality will grow with middle class expansion",
      influencingFactors: [
        "Tourism growth",
        "Medical tourism",
        "Business travel",
        "Online bookings",
      ],
    },
    requiredSacrifices: [
      "Irregular shift work including nights and holidays",
      "Customer service requiring constant positivity",
      "Physical demands of hospitality work",
      "Location constraints for tourist destinations",
      "Continuous learning of hospitality trends",
    ],
    industryChallenges: [
      "Irregular working hours affecting personal life",
      "High customer service pressure and complaint handling",
      "Physical demands of standing and moving for long hours",
      "Seasonal nature of tourism industry",
      "Competition from informal workers without formal training",
      "Keeping up with changing customer expectations",
      "Workplace stress and burnout",
    ],
    geographicLimitations: [
      "Major opportunities in tourist destinations and metro cities",
      "Seasonal work in hill stations and beach resorts",
      "International opportunities require additional certifications",
      "Rural areas have limited hospitality infrastructure",
    ],
    educationalConcerns: [
      "Quality variation between hotel management institutes",
      "Practical training often insufficient for industry standards",
      "High tuition fees for reputed institutes",
      "Internship competition is intense",
      "Soft skills development varies by institute",
    ],
    keyWarnings: [
      "Hospitality work involves long hours and shift work",
      "Customer service can be emotionally draining",
      "Seasonal nature creates income uncertainty",
      "Physical demands are high with standing and walking",
      "Many leave the industry within 3-5 years due to burnout",
    ],
    realisticExpectations: [
      "Entry level: May start with basic service roles",
      "Mid level: Need 3-5 years for supervisory positions",
      "Senior level: Management roles require business skills",
      "Work-life balance varies by department and hotel category",
      "International opportunities exist but require experience",
    ],
  },
];

export function getCareerCaution(careerId: string): CareerCaution | undefined {
  return careerCautionsDatabase.find(
    (caution) => caution.careerId === careerId,
  );
}

export function getAllCareerCautions(): CareerCaution[] {
  return careerCautionsDatabase;
}

export function getCautionsByRiskLevel(
  riskLevel: "Low" | "Medium" | "High" | "Very High",
): CareerCaution[] {
  return careerCautionsDatabase.filter(
    (caution) => caution.overallRisk === riskLevel,
  );
}

export function getCautionsByBurnoutLevel(
  level: "Low" | "Medium" | "High" | "Very High",
): CareerCaution[] {
  return careerCautionsDatabase.filter(
    (caution) => caution.burnoutRisk.level === level,
  );
}

export function getTopRiskFactors(
  limit: number = 5,
): Array<{ career: string; risk: string; factors: string[] }> {
  return careerCautionsDatabase
    .sort((a, b) => {
      const riskOrder = { "Very High": 4, High: 3, Medium: 2, Low: 1 };
      return riskOrder[b.overallRisk] - riskOrder[a.overallRisk];
    })
    .slice(0, limit)
    .map((caution) => ({
      career: caution.careerName,
      risk: caution.overallRisk,
      factors: caution.keyWarnings.slice(0, 3),
    }));
}
