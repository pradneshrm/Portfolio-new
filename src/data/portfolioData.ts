export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
  techStack: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  description: string;
  items: {
    name: string;
    proficiency: number;
    badge?: string;
    description: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  examCode?: string;
  credentialUrl?: string;
  category: string;
  skills: string[];
}

export interface Award {
  title: string;
  organization: string;
  type: string;
  description: string;
  impact: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  gradDate: string;
  field: string;
  focus: string;
}

export const PORTFOLIO_DATA = {

  credlyBadges: [
      {
          "title": "Python Essentials 1",
          "image": "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
          "url": "https://www.credly.com/badges/620b29e9-1ebb-4e2f-afc4-5fc22d99471a/public_url"
      },
      {
          "title": "Google AI for Data Analysis",
          "image": "https://images.credly.com/images/34ac978e-748e-4e7e-9227-34e0746716c8/blob",
          "url": "https://www.credly.com/badges/5061b27e-5387-48ff-a947-d6701e23a7c4/public_url"
      },
      {
          "title": "Google AI for Content Creation",
          "image": "https://images.credly.com/images/14f51379-d8b0-49ea-b1d0-f97039ff27b8/blob",
          "url": "https://www.credly.com/badges/7de9edbe-1c05-4e97-ac91-6f9b36db4f0a/public_url"
      },
      {
          "title": "Google AI for Brainstorming and Planning",
          "image": "https://images.credly.com/images/a1bec460-6545-4b61-9dd2-e56b7d6ccf63/blob",
          "url": "https://www.credly.com/badges/200ab1db-bfcc-421c-bac8-ada4d5899149/public_url"
      },
      {
          "title": "Google AI for Research and Insights",
          "image": "https://images.credly.com/images/2f5411ce-c54c-4ddb-83ec-bdd3b28dd2a4/blob",
          "url": "https://www.credly.com/badges/398cd44f-6b91-4881-8f69-0c0005b63250/public_url"
      },
      {
          "title": "Google AI for Writing and Communicating",
          "image": "https://images.credly.com/images/18687a40-458e-44fc-b539-db34d92de0d4/blob",
          "url": "https://www.credly.com/badges/88565754-7946-4889-9540-7fb5084a35bd/public_url"
      },
      {
          "title": "Google AI Fundamentals",
          "image": "https://images.credly.com/images/d6521452-e64b-4f96-bc20-4758b720757b/blob",
          "url": "https://www.credly.com/badges/f4ad7a00-ffa9-4d79-99fe-a0c0cf4d3480/public_url"
      },
      {
          "title": "Artificial Intelligence Fundamentals",
          "image": "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
          "url": "https://www.credly.com/badges/60b14c87-584e-4ce9-82da-67126682d6a6/public_url"
      },
      {
          "title": "Data Fundamentals",
          "image": "https://images.credly.com/images/edaf0f19-2df0-4759-8871-7b1b44687f53/image.png",
          "url": "https://www.credly.com/badges/d02ed66f-aeab-4806-b9af-e0a4eb51c369/public_url"
      },
      {
          "title": "Python for Data Science",
          "image": "https://images.credly.com/images/b40db465-587f-45eb-a854-af8630a630e7/blob",
          "url": "https://www.credly.com/badges/195192f4-1c00-4aab-93c8-bf40c6dc4e72/public_url"
      },
      {
          "title": "Data Analytics Essentials",
          "image": "https://images.credly.com/images/1fdfeaeb-e61c-4450-bdfe-a07bd4e715df/image.png",
          "url": "https://www.credly.com/badges/c1cceb87-f729-4da7-bdae-9540421b273d/public_url"
      },
      {
          "title": "Exam 462: Administering Microsoft SQL Server 2012/2014 Databases",
          "image": "https://images.credly.com/images/bdd6587b-26ce-4788-9671-90ea499d2325/Administering_Microsoft_SQL_Server_2012.2014_Databases-01.png",
          "url": "https://www.credly.com/badges/8a639515-a55f-467a-88a7-a3049d9f25c5/public_url"
      },
      {
          "title": "Exam 461: Querying Microsoft SQL Server 2012/2014",
          "image": "https://images.credly.com/images/868cddfc-28ba-4671-82b3-0a893807a77e/Querying_Microsoft_SQL_Server_2012.2014-01.png",
          "url": "https://www.credly.com/badges/fafc7cea-61fb-4e09-a165-982bdd682ae1/public_url"
      },
      {
          "title": "Microsoft Certified: Azure Administrator Associate",
          "image": "https://images.credly.com/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
          "url": "https://www.credly.com/badges/12aa1313-9dba-42a0-b2d6-5e2b95c8d8a2/public_url"
      }
  ],

  personal: {
    name: "PRADNESH RAJEEV MOHITE",
    firstName: "Pradnesh",
    lastName: "Mohite",
    title: "Healthcare Data & Analytics Professional",
    shortTitle: "Healthcare Data & Analytics Professional",
    location: "India",
    relocation: "Open to Remote & Global Opportunities",
    email: "pradneshmohite110@gmail.com",
    linkedin: "https://www.linkedin.com/in/pradnesh-mohite",
    linkedinDisplay: "linkedin.com/in/pradnesh-mohite",
    summary:
      "Healthcare IT professional with 6.5+ years of experience working with US healthcare data, SQL, data extraction, ETL workflows, troubleshooting, and clinical applications. I bring a strong combination of healthcare domain knowledge and hands-on data engineering experience, with growing expertise in Power BI, Tableau, Python, GCP, and AI-driven analytics.",
    stats: [
      { id: "exp", value: "6.5+", label: "Years Experience", sublabel: "US Healthcare IT" },
      { id: "sql", value: "SQL", label: "Core Strength", sublabel: "T-SQL & Data Troubleshooting" },
      { id: "data", value: "ETL", label: "Data Focus", sublabel: "Extraction & Data Quality" },
      { id: "bi", value: "BI + AI", label: "Growing Focus", sublabel: "Power BI, Tableau & Python" },
    ],
  },

  skills: [
    {
      id: "databases",
      category: "Databases & Querying",
      icon: "Database",
      description: "Enterprise relational database architecture, high-throughput query design, and index tuning.",
      items: [
        { name: "MS SQL Server", proficiency: 98, badge: "Expert", description: "Enterprise clustering, database engine optimization, high availability" },
        { name: "T-SQL Scripting", proficiency: 96, badge: "Expert", description: "Complex CTEs, window functions, dynamic SQL, transaction management" },
        { name: "SQL Server Management Studio (SSMS)", proficiency: 95, badge: "Expert", description: "Object Explorer, execution plan analysis, maintenance plans" },
        { name: "Stored Procedures & UDFs", proficiency: 95, badge: "Core", description: "Modular business logic, error handling, parameter sniffing resolution" },
        { name: "Advanced Indexing", proficiency: 92, badge: "Specialist", description: "Clustered/Non-clustered, filtered indices, columnstore, defragmentation" },
        { name: "Query Optimization & Tuning", proficiency: 96, badge: "Specialist", description: "Cost threshold analysis, index seek enforcement, plan cache tuning" },
      ],
    },
    {
      id: "healthcare",
      category: "Healthcare Systems & Interoperability",
      icon: "HeartPulse",
      description: "Clinical data standards, secure health information exchange, and EHR ecosystem mastery.",
      items: [
        { name: "EMR / EHR Systems", proficiency: 95, badge: "Specialist", description: "Clinical workflows, encounter mapping, medical history structures" },
        { name: "Healthcare Data Standards", proficiency: 0, badge: "Familiarity", description: "Awareness of healthcare interoperability concepts and structured clinical data" },
        
        { name: "Allscripts Professional EHR", proficiency: 95, badge: "Deep Domain", description: "Database schema navigation, reporting views, workflow customization" },
        { name: "Clinical Workflows", proficiency: 0, badge: "Domain", description: "US healthcare workflows and clinical application context" },
        { name: "Output Manager & Patient Data", proficiency: 90, badge: "Production", description: "Print/fax queue automation across 30+ physical healthcare facilities" },
      ],
    },
    {
      id: "data_eng",
      category: "Data Engineering & Analytics",
      icon: "Cpu",
      description: "Scalable data ingestion pipelines, clinical data mining, and executive decision intelligence.",
      items: [
        { name: "ETL Pipeline Development", proficiency: 94, badge: "Core", description: "Automated extraction, schema transformation, multi-facility loading" },
        { name: "Clinical Data Mining", proficiency: 92, badge: "Specialist", description: "Cohort extraction, risk stratification, clinical measure computations" },
        { name: "Relational Schema Design", proficiency: 93, badge: "Architecture", description: "3NF normalization, dimensional modeling, constraint integrity" },
        { name: "Data Validation & Reconciliation", proficiency: 95, badge: "Quality", description: "Automated checksums, schema drift detection, anomaly mitigation" },
        { name: "Analytics (Tableau & Power BI)", proficiency: 88, badge: "BI", description: "Executive KPI dashboards, clinical measure visualization" },
        { name: "Advanced Excel Modeling", proficiency: 90, badge: "Tool", description: "Power Query, VBA automation, dynamic cohort auditing" },
      ],
    },
    {
      id: "tools_governance",
      category: "Tools, Observability & ITIL",
      icon: "ShieldCheck",
      description: "Enterprise observability, diagnostics, and SLA-governed service delivery.",
      items: [
        { name: "SQL Profiler & Extended Events", proficiency: 94, badge: "Observability", description: "Deep engine tracing, deadlock analysis, long-running query interception" },
        { name: "ITIL Framework", proficiency: 90, badge: "Certified", description: "Incident, problem, change, and release management lifecycle" },
        { name: "ServiceNow & Jira", proficiency: 92, badge: "Workflow", description: "SLA incident tracking, backlog grooming, root-cause documentation" },
        { name: "SLA Management & Escalations", proficiency: 0, badge: "Core", description: "Incident triage, issue tracking, root-cause documentation and escalation" },
        { name: "Microsoft Azure (Foundational)", proficiency: 82, badge: "Cloud", description: "Azure SQL Database, Blob storage, cloud migration fundamentals" },
      ],
    },
  ],

  experiences: [
    {
      id: "mro-corp",
      role: "Senior Software Engineer",
      company: "MRO Corp",
      period: "2022 – Present",
      location: "Pune, India",
      isCurrent: true,
      summary:
        "Work on healthcare data extraction, SQL configuration, EMR mapping, clinical measure dashboards, and production troubleshooting for US healthcare workflows.",
      highlights: [
        "Investigate healthcare data extraction issues, update EMR mappings and SQL configuration, and support clinical measure dashboard refreshes and data-quality workflows.",
        "Develop and execute optimized T-SQL scripts for EMR map updates and clinical measure dashboards, consistently achieving a 40% reduction in average query response times via targeted structural indexing and query plan refactoring.",
        "Troubleshoot recurring extraction and schema/configuration issues by tracing data flow, correcting practice-level settings, and validating downstream results.",
        "Support data extraction and ingestion workflows, identify hard-coded logic, and improve maintainability of SQL-driven healthcare data processes.",
        "Collaborate with developers, QA, and product teams to diagnose production data issues, document root causes, and deliver fixes within operational SLAs.",
      ],
      metrics: [
        { label: "Query Execution Speedup", value: "40%", trend: "Faster average response time" },
        { label: "Data Extraction", value: "Core", trend: "Healthcare ingestion workflows" },
        { label: "Issue Resolution", value: "200+", trend: "Extraction & schema issues" },
        { label: "Query Optimization", value: "40%", trend: "Reported performance improvement" },
      ],
      techStack: [
        "MS SQL Server",
        "T-SQL",
        "ETL Pipelines",
        "SSMS",
        "Clinical Data & Reporting",
        "Query Profiler",
        "ServiceNow / Jira",
      ],
    },
    {
      id: "allscripts-sr",
      role: "Senior Support Consultant",
      company: "Allscripts LLP",
      period: "2020 – 2022",
      location: "Pune, India",
      isCurrent: false,
      summary:
        "Promoted to Senior Consultant following exceptional delivery. Spearheaded deep relational database bottleneck investigations, advanced SQL Profiler tracing, and enterprise SLA management across 75+ active healthcare systems.",
      highlights: [
        "Earned progressive professional promotions within 4 years due to top-tier technical delivery, technical data troubleshooting velocity, and client satisfaction rankings.",
        "Identified and eliminated severe relational database performance bottlenecks utilizing SQL Profiler, Extended Event Traces, and SSMS, accelerating average system troubleshooting and resolution speeds by 25%.",
        "Managed robust SLA compliance thresholds across 75+ active healthcare systems and enterprise accounts using ITIL-aligned issue tracking and technical escalation frameworks.",
      ],
      metrics: [
        { label: "Troubleshooting Speedup", value: "25%", trend: "Faster resolution cycles" },
        { label: "Healthcare Systems Managed", value: "75+", trend: "Active enterprise SLA" },
        { label: "Promotions & Honors", value: "4-Yr Fast Track", trend: "Top satisfaction rank" },
      ],
      techStack: [
        "SQL Profiler",
        "Extended Events",
        "SSMS",
        "ITIL Framework",
        "SLA Governance",
        "Allscripts EHR",
        "Relational Schema Tuning",
      ],
    },
    {
      id: "allscripts-consultant",
      role: "Support Consultant / Intern Consultant",
      company: "Allscripts LLP",
      period: "Dec 2017 – 2020",
      location: "Pune, India",
      isCurrent: false,
      summary:
        "Engineered customized clinical reporting pipelines, deployed enterprise print and document automation across 30+ physical healthcare facilities, and conducted defect analysis leading to 3 confirmed core product hotfixes.",
      highlights: [
        "Engineered 100+ customized clinical patient data reports and data views, enabling advanced data-driven operational and clinical decision-making for healthcare providers and clinical administrators.",
        "Designed and deployed complex Output Manager print templates to regulate clinical printing and secure document faxing workflows across 30+ physical healthcare facilities.",
        "Conducted detailed system defect analysis and code reviews, resulting in the successful identification, documentation, and release of three confirmed core product hotfixes.",
      ],
      metrics: [
        { label: "Clinical Reports Built", value: "100+", trend: "Custom data views" },
        { label: "Physical Facilities Deployed", value: "30+", trend: "Output Manager & Fax" },
        { label: "Core Hotfixes Released", value: "3 Confirmed", trend: "Product code defects" },
      ],
      techStack: [
        "SQL Views & Reports",
        "Output Manager",
        "Defect Analysis",
        "Clinical Workflows",
        "Patient Data Management",
        "Document Routing",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Engineering (M.E.) in Computer Engineering",
      institution: "Mumbai University",
      location: "Mumbai, India",
      gradDate: "Nov 2021",
      field: "Computer Engineering",
      focus: "Advanced Database Architectures, Distributed Systems & High-Performance Computing",
    },
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Ratnagiri / Mumbai University",
      location: "Ratnagiri / Mumbai, India",
      gradDate: "Aug 2015",
      field: "Computer Engineering",
      focus: "Relational Database Management Systems, Data Structures & Algorithms, Software Engineering",
    },
  ],

  certifications: [
    {
      title: "Microsoft SQL Server Certification: Querying",
      issuer: "Microsoft",
      examCode: "Exam 70-461",
      category: "Database & T-SQL",
      skills: ["Advanced T-SQL", "Query Plans", "Window Functions", "Subqueries", "Indexing Strategies"],
    },
    {
      title: "Microsoft SQL Server Certification: Administration",
      issuer: "Microsoft",
      examCode: "Exam 70-462",
      category: "Database Administration",
      skills: ["DB Engine Maintenance", "High Availability", "Disaster Recovery", "Security & Permissions", "Backup Automation"],
    },
    {
      title: "ITIL Foundation Certified",
      issuer: "AXELOS / ITIL",
      category: "Service Management",
      skills: ["IT Service Management (ITSM)", "Incident Lifecycle", "Change Management", "SLA Assurance"],
    },
    {
      title: "Data Analytics Professional Credential",
      issuer: "Accenture / Forage",
      category: "Data & BI",
      skills: ["Data Modeling", "Executive Storytelling", "Reconciliation", "Exploratory Analysis"],
    },
  ],

  awards: [
    {
      title: "Employee of the Month",
      organization: "MRO Corp",
      type: "Excellence Award",
      description: "Voted for exceptional engineering performance and measurable client impact across concurrent healthcare data pipelines.",
      impact: "Recognized across cross-functional clinical IT leadership for high-volume ETL reliability and precision.",
    },
    {
      title: "Beyond the Call of Duty Award",
      organization: "MRO Corp",
      type: "Heroic Incident Response",
      description: "Honored for single-handedly identifying and repairing a critical client data pipeline outage outside business hours, completely preventing a high-exposure corporate SLA breach.",
      impact: "Recognition for ownership, responsiveness, and technical problem solving during critical support situations.",
    },
    {
      title: "Peer-to-Peer Recognition Award",
      organization: "MRO Corp",
      type: "Teamwork & Collaboration",
      description: "Awarded by fellow software engineering colleagues for outstanding cross-functional collaboration and structural data technical contributions.",
      impact: "Demonstrated mentorship and proactive technical guidance across software developers and QA teams.",
    },
    {
      title: "Multiple Client Appreciation Awards",
      organization: "Allscripts LLP",
      type: "Client Commendations",
      description: "Received continuous client commendations for exemplary technical database optimization and troubleshooting quality across a 4-year tenure.",
      impact: "Recognition for client-facing troubleshooting, technical support, and collaboration.",
    },
  ],
};
