import { 
  Calculator, 
  Users, 
  TrendingUp, 
  FileText, 
  Sprout, 
  Car, 
  Home, 
  Briefcase,
  Landmark,
} from "lucide-react";

export interface SubService {
  slug: string;
  title: string;
  description: string;
  content: string;
  features: string[];
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: any;
  detailedContent: string;
  benefits: string[];
  subServices: SubService[];
}

export const serviceData: Record<string, ServiceCategory> = {
  "back-office-accounting": {
    title: "Back Office Accounting Services",
    description: "Comprehensive accounting support to streamline your daily financial operations.",
    icon: Calculator,
    detailedContent: "Our Back Office Accounting Services are designed to function as an extension of your internal team. We handle the tedious but critical day-to-day financial tasks, ensuring your books are always up-to-date and accurate.",
    benefits: [
      "Eliminate data entry errors with our validation processes",
      "Ensure vendors are paid on time with managed AP",
      "Improve cash flow with proactive AR management",
      "Audit-ready books at all times"
    ],
    subServices: [
      {
        slug: "bookkeeping",
        title: "Bookkeeping",
        description: "Accurate daily recording of financial transactions.",
        content: "Our bookkeeping service involves the systematic recording of financial transactions on a daily basis. We ensure that every purchase, sale, receipt, and payment is accurately logged into your accounting software. This forms the backbone of your financial data, allowing for precise reporting and analysis.",
        features: ["Daily Transaction Recording", "General Ledger Maintenance", "Expense Categorization", "Financial Reporting"]
      },
      {
        slug: "data-entry-validation",
        title: "Data Entry & Validation",
        description: "Ensuring data integrity through rigorous validation.",
        content: "We move beyond simple data entry by implementing strict validation protocols. We digitize physical records and verify digital entries against source documents to prevent errors. This ensures that your financial data is not just present, but 100% accurate and reliable for decision making.",
        features: ["Invoice Digitization", "Duplicate Detection", "Error Correction", "Source Document Verification"]
      },
      {
        slug: "checkbook-reconciliation",
        title: "Checkbook Reconciliation",
        description: "Matching your records with Back statements to ensure accuracy.",
        content: "We perform monthly reconciliations of your Back and credit card statements against your internal records. This process identifies discrepancies such as unauthorized transactions, Back fees, or missing entries, ensuring that your actual cash position matches your books.",
        features: ["Back Statement Matching", "Credit Card Reconciliation", "Discrepancy Resolution", "Fraud Detection"]
      },
      {
        slug: "accounts-payable",
        title: "Accounts Payable",
        description: "Managing vendor payments and obligations efficiently.",
        content: "Our AP services ensure your bills are paid on time, helping you maintain good relationships with vendors and avoid late fees. We handle invoice processing, approval workflows, and payment execution, giving you full visibility into your outstanding liabilities.",
        features: ["Invoice Processing", "Vendor Management", "Payment Scheduling", "Aging Reports"]
      },
      {
        slug: "accounts-receivable",
        title: "Accounts Receivable",
        description: "Accelerating revenue collection and managing customer invoices.",
        content: "We help you get paid faster by managing the entire invoicing and collections process. From generating accurate invoices to following up on overdue payments, we improve your cash inflow while maintaining professional relationships with your clients.",
        features: ["Invoice Generation", "Collections Management", "Payment Posting", "Aging Analysis"]
      }
    ]
  },
  "back-office-benefits": {
    title: "Back Office Benefits Support",
    description: "Supporting your HR and administrative teams with benefits management.",
    icon: Users,
    detailedContent: "Managing employee benefits can be complex and time-consuming. Our Back Office Benefits Support services take the administrative burden off your shoulders.",
    benefits: [
      "Streamlined enrollment processes",
      "Reduced administrative workload",
      "Improved employee satisfaction",
      "Accurate record-keeping"
    ],
    subServices: [
      {
        slug: "benefits-administration",
        title: "Benefits Administration Support",
        description: "Day-to-day management of employee benefit programs.",
        content: "We handle the operational aspects of your benefits programs, including health insurance, retirement plans, and other perks. We ensure that administrative tasks are completed accurately and on time.",
        features: ["Plan Administration", "Vendor Coordination", "Record Maintenance", "Policy Updates"]
      },
      {
        slug: "employee-inquiries",
        title: "Employee Inquiries Management",
        description: "Dedicated support for employee benefit questions.",
        content: "We act as a first point of contact for your employees regarding their benefits. Whether they have questions about coverage, claims, or eligibility, we provide timely and accurate responses.",
        features: ["Help Desk Support", "Issue Resolution", "Plan Explanation", "FAQ Management"]
      },
      {
        slug: "enrollment-processing",
        title: "Enrollment Processing",
        description: "Managing open enrollment and new hire setups.",
        content: "We manage the enrollment process for new hires and during annual open enrollment periods. We ensure all forms are collected, verified, and processed with the respective benefit providers.",
        features: ["New Hire Enrollment", "Open Enrollment Management", "Change of Status Processing", "Data Verification"]
      },
      {
        slug: "compliance-monitoring",
        title: "Compliance Monitoring",
        description: "Ensuring benefit plans meet regulatory standards.",
        content: "We help you stay compliant with complex regulations governing employee benefits. We monitor changes in laws and ensure your documentation and practices adhere to current standards.",
        features: ["Regulatory Audits", "Reporting Compliance", "Documentation Review", "Risk Management"]
      }
    ]
  },
  "cash-flow-management": {
    title: "Cash Flow Management",
    description: "Strategic analysis and forecasting to maintain healthy business liquidity.",
    icon: TrendingUp,
    detailedContent: "Cash flow is the lifeblood of any business. We analyze your income and expense patterns to provide accurate forecasts.",
    benefits: [
      "Predict cash shortages before they happen",
      "Optimize timing of payables",
      "Plan for growth with confidence",
      "Maintain healthy lender relationships"
    ],
    subServices: [
      {
        slug: "inflow-outflow-analysis",
        title: "Inflow/Outflow Analysis",
        description: "Detailed tracking of where money comes from and goes.",
        content: "We provide a granular analysis of your cash sources and uses. By understanding the timing and magnitude of inflows and outflows, we help you identify trends and potential bottlenecks in your cash cycle.",
        features: ["Revenue Tracking", "Expense Timing Analysis", "Variance Analysis", "Trend Identification"]
      },
      {
        slug: "cash-flow-forecasting",
        title: "Cash Flow Forecasting",
        description: "Projecting future cash positions.",
        content: "Using historical data and future commitments, we build robust cash flow models. These forecasts help you anticipate cash needs, plan for major expenditures, and ensure you always have sufficient liquidity.",
        features: ["Short-term Forecasting", "Long-term Projections", "Scenario Planning", "Sensitivity Analysis"]
      },
      {
        slug: "liquidity-planning",
        title: "Liquidity Planning",
        description: "Strategies to maintain optimal cash reserves.",
        content: "We help you determine the right level of cash reserves for your business. We develop strategies to optimize working capital, ensuring you have enough liquidity to operate efficiently without holding excess idle cash.",
        features: ["Working Capital Optimization", "Reserve Management", "Investment Planning", "Credit Line Management"]
      }
    ]
  },
  "payroll-processing": {
    title: "Payroll Processing",
    description: "End-to-end payroll management ensuring accuracy and compliance.",
    icon: Briefcase,
    detailedContent: "Our Payroll Processing service ensures your team is paid correctly and on time, every time.",
    benefits: [
      "100% accurate payroll calculations",
      "Timely tax filings",
      "Secure data handling",
      "Employee self-service support"
    ],
    subServices: [
      {
        slug: "payroll-calculations",
        title: "Payroll Calculations",
        description: "Accurate computation of gross to net pay.",
        content: "We handle all aspects of payroll calculation, including regular wages, overtime, bonuses, and commissions. We ensure that all deductions for taxes, benefits, and garnishments are applied correctly.",
        features: ["Wage Calculation", "Overtime Processing", "Bonus & Commission", "Deduction Management"]
      },
      {
        slug: "tax-deductions",
        title: "Tax Deductions & Filings",
        description: "Managing payroll tax obligations.",
        content: "We calculate and withhold the correct amount of federal, state, and local taxes from each paycheck. We also handle the periodic filing of payroll tax returns and the remittance of tax payments to authorities.",
        features: ["Federal Tax Withholding", "State Tax Compliance", "Local Tax Management", "Quarterly Filings"]
      },
      {
        slug: "compliance-reporting",
        title: "Compliance Reporting",
        description: "Reporting to government agencies and internal stakeholders.",
        content: "We generate all necessary payroll reports for compliance purposes, including W-2s, 1099s, and unemployment insurance reports. We also provide detailed payroll journals for your internal accounting.",
        features: ["W-2 & 1099 Generation", "Unemployment Reporting", "New Hire Reporting", "Payroll Journals"]
      }
    ]
  },
  "tax-preparation": {
    title: "Tax Preparation Support",
    description: "Preparing meticulous financial records for seamless tax filing.",
    icon: FileText,
    detailedContent: "Tax season doesn't have to be stressful. We provide year-round Tax Preparation Support, keeping your financials organized.",
    benefits: [
      "Reduced tax season stress",
      "Maximized deductions",
      "Seamless CPA collaboration",
      "Minimize audit risk"
    ],
    subServices: [
      {
        slug: "financial-statement-prep",
        title: "Financial Statement Preparation",
        description: "Creating tax-basis financial statements.",
        content: "We compile your financial data into standardized financial statements (Balance Sheet, Income Statement) that are ready for tax preparation. We ensure these statements adhere to the specific requirements of tax reporting.",
        features: ["Balance Sheet", "Profit & Loss", "Trial Balance", "General Ledger Cleanup"]
      },
      {
        slug: "expense-categorization",
        title: "Expense Categorization",
        description: "Properly classifying expenses for tax purposes.",
        content: "We meticulously review and categorize all expenses to ensure they are reported on the correct lines of your tax return. This helps maximize your eligible business deductions and reduces the risk of misclassification errors.",
        features: ["Deduction Optimization", "Capital vs Expense", "Meals & Entertainment", "Vehicle Expenses"]
      }
    ]
  },
  "tax-support": {
    title: "Tax Support Services",
    description: "Specialized support for tax payments, filings, and compliance.",
    icon: Landmark,
    detailedContent: "Navigating the maze of tax payments and filings requires precision. Our Tax Support Services handle the execution of critical tax-related tasks.",
    benefits: [
      "Timely execution of tax payments",
      "Accurate filing of withholding returns",
      "Avoidance of late fees",
      "Comprehensive multi-state handling"
    ],
    subServices: [
      {
        slug: "master-tax-deposit",
        title: "Master Tax Deposit Entries",
        description: "Managing large-scale tax deposits.",
        content: "We handle the accurate calculation and timely deposit of your master tax obligations. This ensures that your primary tax liabilities are settled in accordance with federal and state schedules.",
        features: ["Deposit Calculation", "Scheduling", "Confirmation Tracking", "Reconciliation"]
      },
      {
        slug: "pts-rts-upload",
        title: "PTS / RTS File Upload",
        description: "Handling specialized tax system uploads.",
        content: "We manage the technical aspect of uploading your tax data files (PTS/RTS) to the relevant government portals. We verify file formats and ensure successful transmission of data.",
        features: ["File Formatting", "Secure Upload", "Transmission Verification", "Error Resolution"]
      },
      {
        slug: "941-payments",
        title: "941 Payments (Batch Processing)",
        description: "Processing quarterly federal tax returns.",
        content: "We manage the batch processing of Form 941 payments, ensuring that your employer's quarterly federal tax return is filed correctly and that all withheld income, social security, and Medicare taxes are paid.",
        features: ["Batch Creation", "Payment Execution", "Filing Confirmation", "Record Retention"]
      },
      {
        slug: "local-withholding",
        title: "SIT / Local Withholding",
        description: "State and local tax compliance.",
        content: "We navigate the complex landscape of State Income Tax (SIT) and local withholding requirements. We ensure accurate payments and filings for every jurisdiction where you have employees.",
        features: ["Jurisdiction Analysis", "Rate Management", "Payment Processing", "Return Filing"]
      },
      {
        slug: "quarterly-processing",
        title: "Payments / Refunds – Quarterly & UI",
        description: "Managing quarterly adjustments and unemployment insurance.",
        content: "We handle quarterly tax true-ups, processing any necessary additional payments or refund requests. We also manage State Unemployment Insurance (UI) processing and rate updates.",
        features: ["Quarterly Reconciliation", "Refund Management", "UI Rate Updates", "State Filings"]
      }
    ]
  },
  "cannabis-accounting": {
    title: "Cannabis Accounting Services",
    description: "Industry-specific financial management for the cannabis sector.",
    icon: Sprout,
    detailedContent: "The cannabis industry faces unique financial challenges and regulatory scrutiny, particularly regarding IRS Section 280E.",
    benefits: [
      "Expert navigation of 280E regulations",
      "Precise inventory tracking",
      "Audit-defensible records",
      "Strategic financial planning"
    ],
    subServices: [
      {
        slug: "cannabis-bookkeeping",
        title: "Cannabis Bookkeeping",
        description: "Compliant record-keeping for dispensaries and cultivators.",
        content: "Our bookkeeping is tailored to the specific needs of the cannabis industry. We track seed-to-sale financials and ensure that your records are maintained in a way that supports strict regulatory compliance.",
        features: ["Seed-to-Sale Tracking", "Cash Management", "Compliance Logging", "Entity Structure Support"]
      },
      {
        slug: "cogs-tracking",
        title: "COGS Tracking",
        description: "Cost of Goods Sold tracking for 280E compliance.",
        content: "Because of IRS Section 280E, cannabis businesses can only deduct Cost of Goods Sold. We implement rigorous COGS tracking systems to maximize your allowable deductions while staying fully compliant with tax laws.",
        features: ["Inventory Valuation", "Direct Cost Allocation", "Indirect Cost Analysis", "280E Optimization"]
      }
    ]
  },
  "automobile-accounting": {
    title: "Automobile Accounting Services",
    description: "Tailored accounting solutions for dealerships and auto service centers.",
    icon: Car,
    detailedContent: "Running an automobile dealership or service center involves complex inventory and cash flow cycles.",
    benefits: [
      "Real-time view of inventory value",
      "Efficient floor plan management",
      "Detailed profitability analysis",
      "Streamlined service accounting"
    ],
    subServices: [
      {
        slug: "dealer-accounting",
        title: "Dealer Accounting",
        description: "Specialized accounting for car dealerships.",
        content: "We handle the unique accounting needs of dealerships, including deal deal jackets, commission calculations, and manufacturer rebates. We ensure your financial statements reflect the true performance of your sales department.",
        features: ["Deal Jacket Processing", "Commission Tracking", "Rebate Management", "Floor Plan Reconciliation"]
      },
      {
        slug: "inventory-management",
        title: "Inventory Management",
        description: "Tracking vehicle and parts inventory.",
        content: "We maintain accurate records of your vehicle inventory (new and used) and parts department stock. We help you track age, holding costs, and turnover rates to optimize your inventory levels.",
        features: ["Vehicle Stocking", "Parts Inventory", "Aging Analysis", "Valuation Adjustments"]
      },
      {
        slug: "service-income-tracking",
        title: "Income Tracking (Service & Repair)",
        description: "Accounting for service department revenue.",
        content: "We track income from your service and repair operations, separating labor, parts, and sublet work. This allows for detailed profitability analysis of your service department.",
        features: ["RO Reconciliation", "Labor vs Parts", "Warranty Claims", "Sublet Tracking"]
      },
      {
        slug: "expense-management",
        title: "Expense Management",
        description: "Controlling dealership operating costs.",
        content: "We monitor and categorize all dealership expenses, from advertising to showroom maintenance. We help you identify areas for cost control and improved efficiency.",
        features: ["Advertising Expense", "Facility Costs", "Policy Work", "Vendor Analysis"]
      }
    ]
  },
  "property-accounting": {
    title: "Property Accounting Services",
    description: "Financial management for real estate investors and property managers.",
    icon: Home,
    detailedContent: "Whether you manage a single rental unit or a large portfolio, our Property Accounting Services provide clarity.",
    benefits: [
      "Clear profitability tracking per property",
      "Organized records for tax depreciation",
      "Efficient expense management",
      "Transparent reporting"
    ],
    subServices: [
      {
        slug: "property-management",
        title: "Property Business Management",
        description: "Overall financial oversight for property portfolios.",
        content: "We provide comprehensive financial management for your property business. From consolidated reporting to individual property performance tracking, we give you the data you need to manage your portfolio effectively.",
        features: ["Portfolio Reporting", "Performance Metrics", "Budgeting", "Owner Distributions"]
      },
      {
        slug: "tax-ready-books",
        title: "Tax-Ready Books",
        description: "Preparing real estate financials for tax time.",
        content: "Real estate taxation is complex. We maintain your books throughout the year with tax implications in mind, tracking depreciation, improvements, and repairs separately to ensure a smooth tax filing process.",
        features: ["Depreciation Schedules", "CapEx vs Repairs", "1031 Exchange Support", "Passive Activity Tracking"]
      }
    ]
  }
};
