import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Weiting Xia",
  initials: "WX",
  location: "Washington, DC, USA (Open to Relocate)",
  locationLink: "https://www.google.com/maps/place/Washingtondc",
  personalWebsiteUrl: "https://weiting-xia.vercel.app",
  about: "Business & Data Analyst dedicated to turning data into actionable business insights and measurable impact.",
  summary: (
    <>
      Business Analytics & AI master’s student at Johns Hopkins University with 
      hands-on experience in SQL, Python, and dashboarding, delivering data quality, 
      forecasting, and operational insights across Apple, MUJI, and EY.
    </>
  ),
  avatarUrl: "/DSCF4747.JPG",
  contact: {
    email: "weiting_xia@outlook.com",
    tel: "+1-202-394-8273",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Weiting-Xia?tab=repositories",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/weiting-xia",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Johns Hopkins University",
      degree: "Master of Science in Business Analytics and Artificial Intelligence",
      start: "2025",
      end: "2026",
      gpa: "3.76/4.0",
      badge: "Dean’s Scholarship",
    },
    {
      school: "Shanghai University",
      degree: "Bachelor of Arts in Finance",
      start: "2021",
      end: "2025",
      gpa: "3.84/4.0",
    },
  ],
  work: [
    {
      company: "Apple Inc.",
      link: "https://www.apple.com",
      badges: ["SQL", "Tableau", "ETL","Data Automation","Anomaly Detection"],
      title: "Global Data Analyst Intern",
      start: "Jan 2025",
      end: "Jul 2025",
      description: (
        <>
          Developed a SQL-Based automated ETL for finance operations optimization.
          <ul className="list-inside list-disc">
            <li>
              SQL ETL & Data Integration (CTEs, JOINs, Window Functions) 
              for large-scale billing and invoice reconciliation
            </li>
            <li>
              Data Quality Monitoring & Anomaly Detection with automated 
              alerts to improve finance operational accuracy
            </li>
            <li>
              Tableau BI Dashboards & KPI Analytics
              for invoice turnaround, posting performance, and stakeholder reporting
            </li>
          </ul>
        </>
      ),
      images: [
        "/Screenshot 2026-01-18 at 01.49.49.png",
         "/Screenshot 2026-01-18 at 01.51.14.png"
        ],
    },
    {
      company: "MUJI",
      link: "https://www.muji.us",
      badges: ["Python", "Power BI", "Demand Forecasting", "Time Series Analysis"],
      title: "Business Analyst Intern",
      start: "Jul 2024",
      end: "Dec 2024",
      description: (
        <>
          Developing a data forecasting model for supply chain operations.
          <ul className="list-inside list-disc">
            <li>
              Built Python-based demand 
              forecasting models (Seasonal ES) achieving 5% MAPE across 100+ products
            </li>
            <li>
              Automated stockout and inventory tracking 
              using Python (Pandas) and Power BI, improving forecast accuracy to 72%
            </li>
            <li>
              Applied logistic regression for 
              customer segmentation on 1K+ social data points, reducing manual analysis by 50%
            </li>
          </ul>
        </>
      ),
      images: [
        "/Picture1.png",
         "/Picture2.png"
        ],
    },
    {
      company: "EY",
      link: "https://www.ey.com/en_us",
      badges: [
        "SQL",
        "Power BI",
        "Reporting Automation",
        "Data Quality Validation"
      ],
      title: "Data Analyst Intern",
      start: "Apr 2024",
      end: "Jun 2024",
      description: (
        <>
          Delivered data quality validation and risk monitoring solutions.
          <ul className="list-inside list-disc">
            <li>
              Supported data quality and
               risk validation using SQL rule-based checks to identify and flag risk issues.
            </li>
            <li>
              Automated SQL reporting 
              pipelines with CTEs and Power BI dashboards, saving 2 hours/week in review time.
            </li>
            <li>
              Built Power BI dashboards for real-time fraud and AML risk monitoring.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Excel (Pivot Table, VBA Macros, Power Query)",
    "R",
    "Google Analytics",
    "Linear Regression",
    "Logistic Regression",
    "XGBoost",
    "A/B testing",
    "K-Means",
    "PCA"
  ],
  projects: [
    {
      title: "Global Apple Repair Dashboard (Tableau)",
      techStack: ["Tableau", "Python","Data Cleaning","Trend Analysis","Hypothesis Testing"],
      description:
        "Integrated 160K+ global sales and repair records in Python and built Tableau dashboards to analyze return patterns, revealing that returns account for ~2% of annual sales and are concentrated in iPhone products with a clear seasonal peak in August.",
      link: {
        label: "Global Apple Repair Dashboard Creation",
        href: "https://public.tableau.com/shared/Y8MFDH5QJ?:display_count=n&:origin=viz_share_link",
      },
    },
    {
      title: "Inventory Optimization and Replenishment Analysis(Python)",
      techStack: ["Python", "Data Cleaning", "Cost–Benefit Analysis", "Capacity Planning","Demand Forecasting"],
      description:
        "Conducted an inventory optimization and replenishment analysis to identify cost-saving ordering strategies, optimal purchase timing, and the financial feasibility of capacity expansion.",
      link: {
        label: "Inventory Optimization and Replenishment Analysis(Python)",
        href: "https://github.com/Weiting-Xia/Inventory-Optimization-and-Replenishment-Analysis-",
      },
    },
    {
      title: "Data-Driven User Engagement Optimization in Green Marketing (Machine Learning)",
      techStack: [
        "Python",
        "Logistic Regression",
        "PCA",
        "K-Means Clustering",
        "Discriminant Analysis",
        "Collaborative Filtering"
      ],
      description:
        "Applied machine learning–based user profiling to analyze IdleFish’s green marketing campaign, and propose targeted, incentive-driven strategies to improve engagement and support sustainable growth.",
      link: {
        label: "User Profiling Analysis (Machine Learning)",
        href: "https://github.com/Weiting-Xia/User-Profiling-Analysis-Machine-Learning",
      },
    },
    {
      title: "RedNote LandingLift A/B Test (Python)",
      techStack: ["Python", "A/B Testing", "Statistical Analysis","Hypothesis Testing"],
      description:
        "Conducted a Python-based A/B test for RedNote to evaluate whether a redesigned landing page could improve conversion rates from 12% to a targeted 15% prior to full launch",
      link: {
        label: "RedNote LandingLift A/B Test",
        href: "https://github.com/Weiting-Xia/RedNote-LandingLift-A-B-Test",
      },
    },
  ],
} as const;
