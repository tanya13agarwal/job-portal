const companyName = [
    "Microsoft",
    "Apple",
    "Google",
    "Facebook",
    "Deloitte",
    "Amazon",
    "Tesla",
    "IBM",
    "Oracle",
    "Salesforce",
    "Adobe",
    "Intel",
    "Netflix",
    "Uber",
    "Airbnb",
    "Spotify",
    "Twitter",
    "LinkedIn",
    "Snapchat",
    "Cisco",
    "Siemens",
    "Samsung",
    "HP",
    "Dell",
    "Accenture",
    "Capgemini",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "SAP",
    "HCL",
    "Qualcomm",
    "NVIDIA",
    "SpaceX",
    "Zoom",
    "PayPal",
    "Square",
    "Pinterest",
    "Dropbox",
    "VMware",
    "Slack",
    "Stripe",
    "Epic Games",
    "Shopify",
    "Red Hat",
    "Atlassian",
    "DocuSign",
    "ServiceNow",
    "Palantir"
];


const companyRoles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "DevOps Engineer",
    "Business Analyst",
    "Project Manager",
    "Cybersecurity Analyst",
    "Cloud Architect",
    "AI/ML Engineer"
];

const titlesCategory = {
  jobs: [
    { 
      label: "Software Engineer", 
      value: { 
        title: "Software Engineer", 
        category: "Information Technology" 
      } 
    },
    { 
      label: "Data Scientist", 
      value: { 
        title: "Data Scientist", 
        category: "Information Technology" 
      } 
    },
    { 
      label: "Graphic Designer", 
      value: { 
        title: "Graphic Designer", 
        category: "Design" 
      } 
    },
    { 
      label: "Marketing Manager", 
      value: { 
        title: "Marketing Manager", 
        category: "Marketing" 
      } 
    },
    { 
      label: "Financial Analyst", 
      value: { 
        title: "Financial Analyst", 
        category: "Finance" 
      } 
    }
  ]
};

const categories = {
    "Sales & BD": [
        "Sales Executive",
        "Business Development Manager",
        "Account Manager",
        "Sales Consultant",
        "Regional Sales Manager",
        "Sales Analyst"
    ],
    "Admin / Back Office / Computer Operator": [
        "DTP Operator",
        "Office Assistant",
        "Receptionist",
        "Administrative Assistant",
        "Office Manager",
        "Executive Assistant"
    ],
    "Advertising / Communication": [
        "Content Writer",
        "SEO Specialist",
        "Public Relations Officer",
        "Media Planner",
        "Copywriter",
        "Brand Strategist"
    ],
    "Information Technology": [
        "Software Developer",
        "Network Administrator",
        "IT Support Specialist",
        "Cybersecurity Analyst",
        "Web Developer",
        "Systems Analyst"
    ],
    "Design": [
        "Graphic Designer",
        "Web Designer",
        "Interior Designer",
        "Fashion Designer",
        "UX/UI Designer",
        "Multimedia Artist"
    ],
    "Marketing": [
        "Marketing Coordinator",
        "Digital Marketing Specialist",
        "Marketing Manager",
        "Social Media Manager",
        "Product Marketing Manager",
        "Market Research Analyst"
    ],
    "Finance": [
        "Financial Analyst",
        "Accountant",
        "Financial Planner",
        "Chief Financial Officer",
        "Tax Specialist",
        "Investment Analyst"
    ],
    "Human Resources": [
        "HR Manager",
        "Talent Acquisition Specialist",
        "HR Business Partner",
        "Compensation and Benefits Manager",
        "HR Analyst",
        "Employee Relations Manager"
    ],
    "Customer Service": [
        "Customer Service Representative",
        "Support Technician",
        "Client Services Coordinator",
        "Help Desk Specialist",
        "Customer Service Manager",
        "Client Relations Manager"
    ],
    "Healthcare": [
        "Registered Nurse",
        "Physician Assistant",
        "Medical Technician",
        "Physical Therapist",
        "Pharmacy Technician",
        "Health Informatics Specialist"
    ],
    "Education": [
        "School Teacher",
        "Curriculum Developer",
        "Education Administrator",
        "Special Education Teacher",
        "Career Counselor",
        "Academic Advisor"
    ],
    "Logistics and Transportation": [
        "Logistics Manager",
        "Warehouse Operations Manager",
        "Supply Chain Analyst",
        "Transportation Coordinator",
        "Fleet Manager",
        "Supply Chain Manager"
    ],
    "Legal": [
        "Lawyer",
        "Paralegal",
        "Legal Secretary",
        "Compliance Officer",
        "Litigation Assistant",
        "Corporate Counsel"
    ]
};


const departments =  [
    {
        "id": 38,
        "name": "Software Engineering",
        "sub_department": [
            {
                "id": 160,
                "name": "DBA / Data warehousing",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 161,
                "name": "DevOps",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 274,
                "name": "Frontend Development",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 275,
                "name": "Software Backend Development",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 164,
                "name": "Software Development",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 162,
                "name": "Software Project Management",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 163,
                "name": "Software Quality Assurance and Testing",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 276,
                "name": "Website Development",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": true,
        "prefill_sub_department": {
            "id": 164,
            "name": "Software Development",
            "classification": 4,
            "similarity": null
        }
    },
    {
        "id": 1,
        "name": "Admin / Back Office / Computer Operator",
        "sub_department": [
            {
                "id": 1,
                "name": "Admin",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 188,
                "name": "Admin Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 2,
                "name": "Back Office",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 3,
                "name": "Data Entry/Computer Operator",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 4,
                "name": "Front Office / Receptionist",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 5,
                "name": "Office Help / Peon",
                "classification": 1,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 2,
        "name": "Advertising / Communication",
        "sub_department": [
            {
                "id": 6,
                "name": "Advertising & Creative",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 189,
                "name": "Copywriting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 7,
                "name": "Corporate Communication",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 3,
        "name": "Aviation & Aerospace",
        "sub_department": [
            {
                "id": 193,
                "name": "Airline Operations Control",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 8,
                "name": "Airline Services",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 195,
                "name": "Airport Fueling and Refueling Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 197,
                "name": "Airport Ground Services",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 192,
                "name": "Airport Technical Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 190,
                "name": "Airport Terminal Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 194,
                "name": "Air Traffic Control",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 9,
                "name": "Aviation Engineering",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 10,
                "name": "Flight & Airport Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 191,
                "name": "Flight Crew / Hostess",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 196,
                "name": "In-flight Services",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 11,
                "name": "Pilot",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 4,
        "name": "Banking / Insurance / Financial Services",
        "sub_department": [
            {
                "id": 198,
                "name": "Banking/Loan Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 12,
                "name": "Banking Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 19,
                "name": "Banking - Treasury & Forex",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 17,
                "name": "BFSI Project Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 202,
                "name": "Credit Card Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 201,
                "name": "Debt Collections / Recovery",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 13,
                "name": "General Insurance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 200,
                "name": "Health Insurance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 199,
                "name": "Insurance Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 14,
                "name": "Investment Banking, Private Equity & VC",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 15,
                "name": "Lending Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 16,
                "name": "Life Insurance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 18,
                "name": "Trading, Asset & Wealth Management",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 5,
        "name": "Beauty, Fitness & Personal Care",
        "sub_department": [
            {
                "id": 20,
                "name": "Beauty & Personal Care",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 203,
                "name": "Gym Trainer",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 208,
                "name": "Hair Stylist / Barber",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 21,
                "name": "Health & Fitness",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 206,
                "name": "Makeup Artist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 210,
                "name": "Manicurist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 209,
                "name": "Massage Therapist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 207,
                "name": "Nail Technician/Artist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 204,
                "name": "Nutritionist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 211,
                "name": "Pedicurist",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 22,
                "name": "Sports Science & Medicine",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 23,
                "name": "Sports Staff and Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 205,
                "name": "Yoga Instructor",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 6,
        "name": "Construction & Site Engineering",
        "sub_department": [
            {
                "id": 212,
                "name": "Construction - Bricklayer",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 24,
                "name": "Construction Engineering",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 25,
                "name": "Construction - Labour / Factory Worker",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 26,
                "name": "Construction - Project & Site Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 213,
                "name": "Construction Supervisor",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 27,
                "name": "Construction Surveying",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 7,
        "name": "Consulting",
        "sub_department": [
            {
                "id": 215,
                "name": "Finance Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 217,
                "name": "Human Resources Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 28,
                "name": "IT Consulting",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 216,
                "name": "Legal Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 29,
                "name": "Management Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 214,
                "name": "Marketing Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 30,
                "name": "Other Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 218,
                "name": "Recruitment Consulting",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 219,
                "name": "Tax Consulting",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 8,
        "name": "Content, Editorial & Journalism",
        "sub_department": [
            {
                "id": 31,
                "name": "Content Writing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 32,
                "name": "Editing (Print / Online)",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 33,
                "name": "Journalism",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 9,
        "name": "CSR & Social Service",
        "sub_department": [
            {
                "id": 34,
                "name": "CSR & Sustainability",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 35,
                "name": "Social & Public Service",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 10,
        "name": "Customer Support",
        "sub_department": [
            {
                "id": 36,
                "name": "Customer Success",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 40,
                "name": "Customer Support - BPO / Voice / Blended",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 187,
                "name": "Customer Support - International Voice Process",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 37,
                "name": "Customer Support - Non Voice",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 220,
                "name": "Customer Support - Non Voice / Chat",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 39,
                "name": "Customer Support - Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 38,
                "name": "Customer Support - Service Delivery",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 11,
        "name": "Data Science & Analytics",
        "sub_department": [
            {
                "id": 41,
                "name": "Business Intelligence & Analytics",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 42,
                "name": "Data Science & Machine Learning",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 12,
        "name": "Delivery / Driver / Logistics",
        "sub_department": [
            {
                "id": 43,
                "name": "Delivery",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 44,
                "name": "Driver",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 45,
                "name": "Logistics",
                "classification": 1,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 13,
        "name": "Domestic Worker",
        "sub_department": [
            {
                "id": 46,
                "name": "Baby Care",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 47,
                "name": "Cleaning",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 48,
                "name": "Elder Care",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 238,
                "name": "Gardener",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 239,
                "name": "Home Caretaker",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 221,
                "name": "Home Helper",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 49,
                "name": "Home Maintenance",
                "classification": 1,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 14,
        "name": "Energy & Mining",
        "sub_department": [
            {
                "id": 52,
                "name": "Mining",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 50,
                "name": "Mining - Downstream",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 51,
                "name": "Mining - Midstream",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 55,
                "name": "Mining - Upstream",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 53,
                "name": "Power Generation",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 54,
                "name": "Power Supply and Distribution",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 15,
        "name": "Engineering - Hardware & Networks",
        "sub_department": [
            {
                "id": 56,
                "name": "Hardware",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 57,
                "name": "IT Network",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 58,
                "name": "Telecom",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 16,
        "name": "Environment Health & Safety",
        "sub_department": [
            {
                "id": 59,
                "name": "Community Health & Safety",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 60,
                "name": "Occupational Health & Safety",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 17,
        "name": "Facility Management",
        "sub_department": [
            {
                "id": 61,
                "name": "Food Services",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 62,
                "name": "Property Maintenance / Operations",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 63,
                "name": "Property Management",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 18,
        "name": "Finance & Accounting",
        "sub_department": [
            {
                "id": 64,
                "name": "Accounting & Taxation",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 65,
                "name": "Audit & Control",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 222,
                "name": "Billing / Cashier",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 66,
                "name": "Finance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 224,
                "name": "MIS Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 223,
                "name": "Payables / Receivables Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 67,
                "name": "Payroll & Transactions",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 68,
                "name": "Treasury",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 19,
        "name": "Healthcare / Doctor / Hospital Staff",
        "sub_department": [
            {
                "id": 232,
                "name": "Allergy Testing Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 231,
                "name": "Blood Testing Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 230,
                "name": "Brain Scan Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 233,
                "name": "Cancer Testing Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 226,
                "name": "CT Scan Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 69,
                "name": "Doctor",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 234,
                "name": "Genetic Testing Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 228,
                "name": "Heart Scan Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 70,
                "name": "Hospital Admin",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 71,
                "name": "Imaging & Diagnostics",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 237,
                "name": "Lab Assistant / Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 236,
                "name": "Medical representative",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 229,
                "name": "Minimally Invasive Scan Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 227,
                "name": "MRI Scan",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 72,
                "name": "Nurse / Patient Care / Hospital Staff",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 73,
                "name": "Pharmacist",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 235,
                "name": "Tissue Testing Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 74,
                "name": "Ward Helper",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 225,
                "name": "X-ray Technician",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 21,
        "name": "Human Resources",
        "sub_department": [
            {
                "id": 84,
                "name": "Compensation & Benefits",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 85,
                "name": "Employee Relations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 86,
                "name": "HR Business Advisory",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 87,
                "name": "HR Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 89,
                "name": "Recruitment Marketing & Branding",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 88,
                "name": "Recruitment & Talent Acquisition",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 22,
        "name": "IT & Information Security",
        "sub_department": [
            {
                "id": 90,
                "name": "IT Infrastructure Services",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 91,
                "name": "IT Security",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 92,
                "name": "IT Support",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 23,
        "name": "Legal & Regulatory",
        "sub_department": [
            {
                "id": 240,
                "name": "Civil Law",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 93,
                "name": "Corporate Affairs",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 94,
                "name": "Crime / Arbitration",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 96,
                "name": "Legal Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 95,
                "name": "Legal & Regulatory",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 20,
        "name": "Maintenance Services",
        "sub_department": [
            {
                "id": 75,
                "name": "Carpenter",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 242,
                "name": "CCTV Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 247,
                "name": "DTH Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 76,
                "name": "Electrician / Wireman",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 77,
                "name": "Heating / Ventilation / Air conditioning (HVAC)",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 78,
                "name": "Home & Office Maintenance",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 79,
                "name": "Installation Services",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 80,
                "name": "Kitchen Appliance Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 243,
                "name": "Laptop Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 246,
                "name": "Lift/Elevator Technician/Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 248,
                "name": "Maintenance Turner / Fitter",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 244,
                "name": "Mobile Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 81,
                "name": "Painter",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 82,
                "name": "Plumber",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 241,
                "name": "RO Technician",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 83,
                "name": "Service & Repair",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 245,
                "name": "Solar Energy Technician",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 24,
        "name": "Marketing / Brand / Digital Marketing",
        "sub_department": [
            {
                "id": 97,
                "name": "Brand Marketing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 98,
                "name": "BTL",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 99,
                "name": "Digital Marketing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 101,
                "name": "Marketing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 100,
                "name": "Market Research & Insights",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 25,
        "name": "Media Production & Entertainment",
        "sub_department": [
            {
                "id": 102,
                "name": "Actors / Artists / Creative",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 103,
                "name": "Animation / Effects",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 106,
                "name": "Make Up / Costume",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 104,
                "name": "Media Direction",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 105,
                "name": "Media Editing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 107,
                "name": "Media Production",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 249,
                "name": "Photographer",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 108,
                "name": "Sound / Light / Technical Support",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 250,
                "name": "Videographer",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 43,
        "name": "Operations",
        "sub_department": [
            {
                "id": 180,
                "name": "Account Receivable (AR)",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 183,
                "name": "Agriculture Operations",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 181,
                "name": "Logistics Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 185,
                "name": "Manufacturing/Production",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 182,
                "name": "Operations Planning & Control",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 184,
                "name": "Operations Quality Control",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 186,
                "name": "Telecom Operations",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 28,
        "name": "Production / Manufacturing / Engineering",
        "sub_department": [
            {
                "id": 263,
                "name": "Assembly Line Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 260,
                "name": "CNC Machine Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 265,
                "name": "Cutting Machine Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 268,
                "name": "Foundry",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 266,
                "name": "Grinding Machine Operators",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 259,
                "name": "Instrumentation Mechanic",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 264,
                "name": "Lathe Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 116,
                "name": "Manufacturing - Engineering",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 117,
                "name": "Manufacturing Labour / Factory Worker",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 252,
                "name": "Manufacturing Maintenance",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 118,
                "name": "Manufacturing Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 251,
                "name": "Manufacturing Operations",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 254,
                "name": "Manufacturing Quality",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 255,
                "name": "Manufacturing R&D",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 253,
                "name": "Manufacturing Support",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 261,
                "name": "Moulding Machine Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 119,
                "name": "Operations, Maintenance & Support",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 267,
                "name": "Power Press Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 258,
                "name": "Tool & Die maker",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 256,
                "name": "Turner / Fitter",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 262,
                "name": "VMC Machine Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 257,
                "name": "Welder",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 27,
        "name": "Product Management",
        "sub_department": [
            {
                "id": 114,
                "name": "Product Management",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 115,
                "name": "Product Management - Technology",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 29,
        "name": "Project & Program Management",
        "sub_department": [
            {
                "id": 120,
                "name": "Construction / Manufacturing Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 121,
                "name": "Finance Project Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 122,
                "name": "Other Program / Project Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 123,
                "name": "Technology / IT Project Management",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 26,
        "name": "Purchase & Supply Chain",
        "sub_department": [
            {
                "id": 270,
                "name": "Dispatch Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 109,
                "name": "Import & Export",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 110,
                "name": "Procurement & Purchase",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 111,
                "name": "Purchase - Quality Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 112,
                "name": "Stores & Material Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 113,
                "name": "Strategic Sourcing",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 269,
                "name": "Warehousing",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 30,
        "name": "Quality Assurance",
        "sub_department": [
            {
                "id": 124,
                "name": "Business Process Quality",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 125,
                "name": "Production & Manufacturing Quality",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 126,
                "name": "Quality Assurance - Other",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 31,
        "name": "Research & Development",
        "sub_department": [
            {
                "id": 127,
                "name": "Engineering & Manufacturing Research",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 128,
                "name": "Pharma & Biotech Research",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 129,
                "name": "Research & Development - Other",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 32,
        "name": "Restaurant / Hospitality / Tourism",
        "sub_department": [
            {
                "id": 130,
                "name": "Cook / Chef / Kitchen Help",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 131,
                "name": "Events & Banquet",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 132,
                "name": "Front Office & Guest Services",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 134,
                "name": "Hospitality Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 133,
                "name": "Housekeeping & Laundry",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 135,
                "name": "Restaurant Staff / Waiter / Steward",
                "classification": 1,
                "similarity": null
            },
            {
                "id": 136,
                "name": "Tourism Services",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 271,
                "name": "Visa Counselling",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 33,
        "name": "Retail & eCommerce",
        "sub_department": [
            {
                "id": 137,
                "name": "Category Management & Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 138,
                "name": "eCommerce Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 139,
                "name": "Merchandising & Planning",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 140,
                "name": "Retail Sales & Operations",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 34,
        "name": "Risk Management & Compliance",
        "sub_department": [
            {
                "id": 142,
                "name": "Business Risk Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 272,
                "name": "Risk Compliance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 141,
                "name": "Risk Management - Assessment / Advisory",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 143,
                "name": "Risk Management - Finance",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 144,
                "name": "Risk Management - Operations / Strategy",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 145,
                "name": "Risk Management - Security / Fraud",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 35,
        "name": "Sales & BD",
        "sub_department": [
            {
                "id": 146,
                "name": "B2C / Retail / Counter Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 147,
                "name": "BD / Pre Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 148,
                "name": "Enterprise & B2B Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 149,
                "name": "Field Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 273,
                "name": "Inside Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 150,
                "name": "Real Estate Sales",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 151,
                "name": "Sales Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 152,
                "name": "Sales Support & Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 153,
                "name": "Telesales",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 36,
        "name": "Security Services",
        "sub_department": [
            {
                "id": 155,
                "name": "Security Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 154,
                "name": "Security Services",
                "classification": 1,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 37,
        "name": "Shipping & Maritime",
        "sub_department": [
            {
                "id": 156,
                "name": "Port & Maritime Operations",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 158,
                "name": "Shipping Deck",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 159,
                "name": "Shipping Engineering & Technical",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 157,
                "name": "Shipping & Maritime - Other",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 39,
        "name": "Strategic & Top Management",
        "sub_department": [
            {
                "id": 165,
                "name": "Strategic Management",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 166,
                "name": "Top Management",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 40,
        "name": "Tailoring, Apparel & Home Furnishing",
        "sub_department": [
            {
                "id": 167,
                "name": "Fashion & Accessories",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 277,
                "name": "Jewellery Design",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 168,
                "name": "Tailoring / Garment Manufacturing",
                "classification": 2,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 41,
        "name": "Teaching & Training",
        "sub_department": [
            {
                "id": 170,
                "name": "Corporate Training",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 171,
                "name": "Language Teacher",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 172,
                "name": "Life Skills / ECA Teacher",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 173,
                "name": "Online Teacher",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 174,
                "name": "Preschool & Primary Education",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 175,
                "name": "Teacher / Faculty / Tutor",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 169,
                "name": "Teaching Admin & Staff",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 176,
                "name": "University Level Educator",
                "classification": 3,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    },
    {
        "id": 42,
        "name": "UX, Design & Architecture",
        "sub_department": [
            {
                "id": 177,
                "name": "Architecture & Interior Design",
                "classification": 3,
                "similarity": null
            },
            {
                "id": 178,
                "name": "Digital Design",
                "classification": 4,
                "similarity": null
            },
            {
                "id": 278,
                "name": "DTP Operator",
                "classification": 2,
                "similarity": null
            },
            {
                "id": 179,
                "name": "UI / UX Design",
                "classification": 4,
                "similarity": null
            }
        ],
        "recommended": false,
        "prefill_sub_department": {}
    }
]


export const PreferredCityOptions = [
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Hyderabad', label: 'Hyderabad' },
  { value: 'Ahmedabad', label: 'Ahmedabad' },
  { value: 'Chennai', label: 'Chennai' },
  { value: 'Kolkata', label: 'Kolkata' },
  {  value: 'Surat', label: 'Surat' },
  { value: 'Pune', label: 'Pune' },
  { value: 'Jaipur', label: 'Jaipur' },
  { value: 'Lucknow', label: 'Lucknow' },
  { value: 'Kanpur', label: 'Kanpur' },
  { value: 'Nagpur', label: 'Nagpur' },
  { value: 'Indore', label: 'Indore' },
  { value: 'Thane', label: 'Thane' },
  { value: 'Bhopal', label: 'Bhopal' },
  { value: 'Visakhapatnam', label: 'Visakhapatnam' },
  { value: 'Pimpri-Chinchwad', label: 'Pimpri-Chinchwad' },
  { value: 'Patna', label: 'Patna' },
  { value: 'Vadodara', label: 'Vadodara' },
  { value: 'Ghaziabad', label: 'Ghaziabad' },
  { value: 'Ludhiana', label: 'Ludhiana' },
  { value: 'Agra', label: 'Agra' },
  { value: 'Nashik', label: 'Nashik' },
  { value: 'Faridabad', label: 'Faridabad' },
  { value: 'Meerut', label: 'Meerut' },
  { value: 'Rajkot', label: 'Rajkot' },
  { value: 'Kalyan-Dombivli', label: 'Kalyan-Dombivli' },
  { value: 'Vasai-Virar', label: 'Vasai-Virar' },
  { value: 'Varanasi', label: 'Varanasi' },
  { value: 'Srinagar', label: 'Srinagar' },
  { value: 'Aurangabad', label: 'Aurangabad' },
  { value: 'Dhanbad', label: 'Dhanbad' },
  { value: 'Amritsar', label: 'Amritsar' },
  { value: 'Navi Mumbai', label: 'Navi Mumbai' },
  { value: 'Allahabad', label: 'Allahabad' },
  { value: 'Howrah', label: 'Howrah' },
  { value: 'Gurgaon', label: 'Gurgaon' },
  { value: 'Jabalpur', label: 'Jabalpur' },
  { value: 'Coimbatore', label: 'Coimbatore' },
  { value: 'Vijayawada', label: 'Vijayawada' },
  { value: 'Jodhpur', label: 'Jodhpur' },
  { value: 'Madurai', label: 'Madurai' },
  { value: 'Raipur', label: 'Raipur' },
  { value: 'Kota', label: 'Kota' }
];

export const degrees = [
  { value: 'mba', label: 'Master of Business Administration (MBA)' },
  { value: 'mca', label: 'Master of Computer Applications (MCA)' },
  { value: 'mtech', label: 'Master of Technology (M.Tech)' },
  { value: 'btech', label: 'Bachelor of Technology (B.Tech)' },
  { value: 'bsc', label: 'Bachelor of Science (B.Sc)' },
  { value: 'msc', label: 'Master of Science (M.Sc)' },
  { value: 'bcom', label: 'Bachelor of Commerce (B.Com)' },
  { value: 'mcom', label: 'Master of Commerce (M.Com)' },
  { value: 'ba', label: 'Bachelor of Arts (BA)' },
  { value: 'ma', label: 'Master of Arts (MA)' },
  { value: 'bba', label: 'Bachelor of Business Administration (BBA)' },
  { value: 'bca', label: 'Bachelor of Computer Applications (BCA)' },
  { value: 'llb', label: 'Bachelor of Laws (LLB)' },
  { value: 'llm', label: 'Master of Laws (LLM)' },
  { value: 'mbbs', label: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)' },
  { value: 'bds', label: 'Bachelor of Dental Surgery (BDS)' },
  { value: 'bpt', label: 'Bachelor of Physiotherapy (BPT)' },
  { value: 'bpharm', label: 'Bachelor of Pharmacy (B.Pharm)' },
  { value: 'mpharm', label: 'Master of Pharmacy (M.Pharm)' },
  { value: 'bvsc', label: 'Bachelor of Veterinary Science (BVSc)' },
  { value: 'barch', label: 'Bachelor of Architecture (B.Arch)' },
  { value: 'march', label: 'Master of Architecture (M.Arch)' },
  { value: 'bfa', label: 'Bachelor of Fine Arts (BFA)' },
  { value: 'mfa', label: 'Master of Fine Arts (MFA)' },
  { value: 'bed', label: 'Bachelor of Education (B.Ed)' },
  { value: 'med', label: 'Master of Education (M.Ed)' },
  { value: 'bds', label: 'Bachelor of Dental Surgery (BDS)' },
  { value: 'mpt', label: 'Master of Physiotherapy (MPT)' },
  { value: 'mphil', label: 'Master of Philosophy (MPhil)' },
  { value: 'dph', label: 'Doctor of Public Health (DrPH)' },
  { value: 'dsc', label: 'Doctor of Science (D.Sc)' },
  { value: 'dm', label: 'Doctorate of Medicine (DM)' },
  { value: 'dba', label: 'Doctor of Business Administration (DBA)' },
  { value: 'mphil', label: 'Master of Philosophy (MPhil)' }
];

export { companyName, companyRoles, titlesCategory,categories ,departments};