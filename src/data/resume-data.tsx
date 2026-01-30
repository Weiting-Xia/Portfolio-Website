import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Weiting Xia",
  initials: "WX",
  location: "Washington, DC, USA (Open to Relocate)",
  locationLink: "https://www.google.com/maps/place/Washingtondc",
  personalWebsiteUrl: "https://weiting-xia.vercel.app",
  about: "I thought I wanted to be an analyst for the title, but I realized I simply enjoy building dashboards and working with data.",
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
        url: "https://github.com/Weiting-Xia",
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
      badges: ["SQL", "Python","Tableau", "ETL","Anomaly Detection"],
      title: "Global Data Analyst Intern",
      start: "Jan 2025",
      end: "Jul 2025",
      description: (
        <>
          Analyzed 40K+ payment records over 3 years using SQL, Python, and Tableau to identify regional invoice risks, automate data-quality validation, and support on-time financial close
          <ul className="list-inside list-disc">
            <li>
              Extracted and Cleaned 40K+ payment and invoice records using SQL for analytics
            </li>
            <li>
              Identified regional operation risks through Python-based geographic and EDA analysis
            </li>
            <li>
              Built a Tableau dashboard to automate month-end risk and performance monitoring
            </li>
             <li>
              Impact: +33% data reliability, −20% coordination effort, supporting on-time R2R close
            </li>
          </ul>
        </>
      ),
      images: [
        "/Pasted Graphic 3.png",
        "/Screenshot 2026-01-18 at 01.49.49.png",
         "/Screenshot 2026-01-18 at 01.51.14.png",
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
          Built an automated demand forecasting system on 45K+ SKU-level sales records (15 months) using SQL, Python, and Power BI to improve planning accuracy and drive sales growth
          <ul className="list-inside list-disc">
            <li>
              Extracted and processed 45K+ SKU-level sales and inventory records using SQL
            </li>
            <li>
              Utilized Python to analyze demand stability and select products with stable and sufficient demand for modeling
            </li>
            <li>
              Built Holt–Winters forecasts (~12% MAPE) to support monthly sales planning with Ops
            </li>
            <li>
              Developed a Power BI dashboard to monitor forecast accuracy, stockout risk, and sales progress
            </li>
              Impact: 87% full fulfillment, +26% pilot in-store sales, eliminated manual forecasting
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
        "Python",
        "Power BI",
        "K-means",
        "Multivariate Regression"
      ],
      title: "Data Analyst Intern",
      start: "Apr 2024",
      end: "Jun 2024",
      description: (
        <>
          Analyzed and segmented 200K+ EV customer preference data  using Python o uncover design-preference drivers and deliver actionable, segment-specific insights to the client
          <ul className="list-inside list-disc">
            <li>
              Segmented customers into technology focused segment  vs. luxury focused segment with K-means
            </li>
            <li>
              Identified key design-preference drivers among the 2 segments via multivariate regression
            </li>
             <li>
              Delivered segment-level insights to support advertising decisions that increased conversion rates by 13%
            </li>
          </ul>
        </>
      ),
      images: [
        "/Overall Preference Ranking.png",
        "/11111.png",
        ],
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
