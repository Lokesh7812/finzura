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
        title: "Bank Reconciliation",
        description: "Matching your records with Back statements to ensure accuracy.",
        content: "We perform monthly reconciliations of your Back and credit card statements against your internal records. This process identifies discrepancies such as unauthorized transactions, Back fees, or missing entries, ensuring that your actual cash position matches your books.",
       features: [
  "Bank Statements",
  "Checking Accounts",
  "Savings Accounts",
  "Credit Card Statements",
  "Online Payments"
]

      },
      {
        slug: "accounts-payable",
        title: "Accounts Payable",
        description: "Managing vendor payments and obligations efficiently.",
        content: "Our AP services ensure your bills are paid on time, helping you maintain good relationships with vendors and avoid late fees. We handle invoice processing, approval workflows, and Payment Preparation, giving you full visibility into your outstanding liabilities.",
        features: ["Invoice Processing", "Scheduling and Vendor Record Management", "Payment Scheduling", "Aging Reports"]
      },
      {
        slug: "accounts-receivable",
        title: "Accounts Receivable",
        description: "Accelerating revenue collection and managing customer invoices.",
        content: "We help you get paid faster by managing the entire invoicing and collections process. From generating accurate invoices to following up on overdue payments, we improve your cash inflow while maintaining professional relationships with your clients.",
        features: ["Invoice Generation", "Payment Follow-up Support", "Payment Posting", "Aging Analysis"]
      }
    ]
  },
  "back-office-benefits": {
    title: "Back Office Benefits Support",
    description: "Supporting your HR and administrative teams with benefits management.",
    icon: Users,
    detailedContent: "Managing employee benefits can be complex and time-consuming. Our Back Office Benefits Support services take the administrative burden off your shoulders .                          Disclamer : Our services are administrative in nature. We do not provide legal, tax, or benefits advisory services.",
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
        content: "We handle the operational aspects of your benefits programs, including health insurance, retirement plans, and other perks. We support the accurate and timely completion of administrative tasks.   Our support is administrative in nature. We do not provide legal, tax, insurance, or benefits advisory services.",
        features: ["Plan Administration", "Vendor Coordination", "Record Maintenance", "Policy Updates"]
      },
      {
        slug: "employee-inquiries",
        title: "Employee Inquiries Management",
        description: "Dedicated support for employee benefit questions.",
        content: "We act as a first point of contact for your employees regarding their benefits. Whether they have questions about coverage, claims, or eligibility, we provide timely and consistent responses based on available information.",
        features: ["Help Desk Support", "Issue Tracking & Resolution Support", "Plan Explanation", "FAQ Management"]
      },
      {
        slug: "enrollment-processing",
        title: "Enrollment Processing",
        description: "Managing open enrollment and new hire setups.",
        content: "We manage the enrollment process for new hires and during annual open enrollment periods. We assist with collecting, verifying, and submitting enrollment forms to benefit providers.",
        features: ["New Hire Enrollment", "Open Enrollment Management", "Change of Status Processing", "Data Verification"]
      },
      {
        slug: "compliance-monitoring",
        title: "Compliance Monitoring",
        description: "Supporting benefits-related compliance documentation and tracking.",
        content: "We provide administrative support to help track benefits-related compliance requirements based on client guidelines and advisor inputs. Our role includes monitoring documentation timelines, maintaining records, and coordinating information as required by clients and their professional advisors. Disclaimer : Our services are administrative in nature. We do not provide legal, tax, insurance, or benefits advisory services.",
       features: [
  "Compliance Documentation Tracking",
  "Policy & Record Review Support",
  "Compliance Calendar Monitoring",
  "Reporting Preparation Support"
]

      }
    ]
  },
  "cash-flow-management": {
    title: "Cash Flow Management",
    description: "Based on accounting data and client inputs. Strategic analysis and forecasting to maintain healthy business liquidity.",
    icon: TrendingUp,
    detailedContent: "Cash flow is the lifeblood of any business.We analyze your income and expense patterns to help you maintain steady liquidity and make informed financial decisions.",
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
        content: "We provide back-office support by analyzing cash inflow and outflow data based on information provided by the client. Our analysis helps highlight trends, timing gaps, and potential bottlenecks for management review and decision-making.",
        features: ["Revenue Tracking", "Expense Timing Analysis", "Variance Analysis", "Trend Identification"]
      },
      {
        slug: "cash-flow-forecasting",
        title: "Cash Flow Forecasting",
        description: "Projecting future cash positions.",
        content: "Using historical data and future commitments provided by the client, we support the preparation of cash flow models. Disclaimer : This service is provided as back-office support based on client-approved data. Final business decisions remain with the client.",
        features: ["Short-term Forecasting", "Long-term Projections", "Scenario Planning", "Sensitivity Analysis"]
      },
      {
        slug: "liquidity-planning",
        title: "Liquidity Planning",
        description: "Strategies to maintain optimal cash reserves.",
        content: "We support your business by analyzing cash positions and preparing liquidity insights based on client-provided data. These insights help you plan working capital and maintain adequate liquidity. Disclaimer : Liquidity analysis and planning support is provided based on information shared by the client. Final financial decisions remain with the client.",
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
        content: "We provide back-office support for payroll calculations, including regular wages, overtime, bonuses, and commissions, based on data provided by the client. All deductions for taxes, benefits, and garnishments are applied using client-approved information and payroll systems.",
        features: ["Wage Calculation", "Overtime Processing", "Bonus & Commission", "Deduction Management"]
      },
      {
        slug: "tax-deductions",
        title: "Tax Deductions & Filings",
        description: "Managing payroll tax obligations.",
        content: "We provide back-office support for payroll tax deductions and filings using client-approved data and payroll systems. We assist with calculating payroll tax withholdings and preparing periodic payroll tax filings for client review and approval.",
        features: ["Federal Tax Withholding", "State Tax Compliance", "Local Tax Management", "Quarterly Filings"]
      },
      {
        slug: "compliance-reporting",
        title: "Compliance Reporting",
        description: "Reporting to government agencies and internal stakeholders.",
        content: "We assist in preparing payroll compliance reports, including W-2s, 1099s, and unemployment insurance reports, using client-provided and approved data. We also prepare detailed payroll journals to support your internal accounting and review processes. Disclaimer : Final submission and statutory responsibility remain with the client.",
        features: ["W-2 & 1099 Generation", "Unemployment Reporting", "New Hire Reporting", "Payroll Journals"]
      }
    ]
  },
  "tax-preparation": {
    title: "Tax Preparation Support",
    description: "Preparing organized financial records to support client-approved tax filing processes.",
    icon: FileText,
    detailedContent: "We provide year-round Tax Preparation Support, assisting businesses by organizing financial data and reports required for tax filing.We work alongside client-appointed CPAs or tax professionals.",
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
        description: "Creating tax-ready financial statements based on client-approved data.",
        content: "We compile financial data into standardized financial statements (Balance Sheet, Income Statement) to support tax preparation activities. Statements are prepared based on client instructions and CPA-approved requirements. Disclaimer : We provide back-office financial statement preparation support only. We do not provide tax advice or file tax returns. All filings are completed by licensed tax professionals.",
        features: ["Balance Sheet", "Profit & Loss", "Trial Balance", "General Ledger Cleanup"]
      },
      {
        slug: "expense-categorization",
        title: "Expense Categorization",
        description: "Properly categorizing expenses to support accurate tax reporting. ",
        content: "We review and categorize expenses based on client-provided information and predefined rules to support tax preparation activities.Our work helps ensure expenses are organized consistently and reduces the risk of misclassification for review by licensed tax professionals.",
        features: ["Expense Classification Support", "Capital vs Expense Classification(as instructed)", "Meals & Entertainment Categorization", "Vehicle Expenses Categorization"]
      }
    ]
  },
  "tax-support": {
  title: "Tax Processing Support",
  description: "Back-office support for tax data preparation and processing under client direction.",
  icon: Landmark,
  detailedContent: "Navigating tax payments and filings requires accuracy and coordination. Our Tax Support Services provide structured data preparation and processing support to assist CPAs and tax professionals.",
  benefits: [
    "Timely tax data readiness",
    "Improved filing accuracy",
    "Reduced processing delays",
    "Consistent multi-state support"
  ],
  subServices: [
    {
      slug: "tax-deposit-data-prep",
      title: "Tax Deposit Data Preparation Support",
      description: "Preparing tax deposit data for client-approved execution.",
      content: "We compile, validate, and organize tax deposit data based on payroll and withholding records. All outputs are prepared for client or CPA review prior to submission or payment processing.",
      features: [
        "Deposit Data Compilation",
        "Schedule Alignment",
        "Client Review Support",
        "Audit-Ready Documentation"
      ]
    },
    {
      slug: "system-upload-support",
      title: "System Upload Support (Client-Approved)",
      description: "Supporting approved uploads into tax systems and portals.",
      content: "We assist with formatting and uploading tax files into approved systems (including PTS/RTS platforms) based on client authorization. Uploads are performed strictly under provided instructions.",
      features: [
        "File Validation",
        "Secure Upload Assistance",
        "Upload Confirmation",
        "Error Identification Support"
      ]
    },
    {
      slug: "941-data-support",
      title: "941 Data Compilation & Review Support",
      description: "Preparing quarterly payroll tax data for Form 941.",
      content: "We compile and review payroll tax data required for Form 941 filings, ensuring consistency across wages, withholdings, and payment records before CPA submission.",
      features: [
        "Data Aggregation",
        "Variance Review",
        "Reconciliation Support",
        "Filing Readiness Checks"
      ]
    },
    {
      slug: "state-tax-data-support",
      title: "State Tax Data Preparation Support",
      description: "Supporting state and local withholding data preparation.",
      content: "We prepare State Income Tax (SIT) and local withholding data based on payroll records and jurisdictional requirements, supporting accurate reporting across multiple states.",
      features: [
        "Jurisdiction Mapping",
        "Withholding Data Review",
        "Rate Reference Support",
        "State-Level Documentation"
      ]
    },
    {
      slug: "payment-refund-reconciliation",
      title: "Tax Payment & Refund Reconciliation Support",
      description: "Reconciling tax payments and refunds for quarterly and UI processing.",
      content: "We reconcile tax payments and refunds against filed data and payroll records, identifying variances and preparing reconciliation reports for client or CPA follow-up.",
      features: [
        "Payment Matching",
        "Refund Tracking",
        "Variance Reporting",
        "Quarterly & UI Reconciliation"
      ]
    }
  ]
}
,
  "cannabis-accounting": {
    title: "Cannabis Accounting Services",
    description: "Industry-specific accounting & compliance support for the cannabis sector",
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
        features: ["Seed-to-Sale Tracking", "Cash Management", "Compliance Record Support", "Entity-Level Accounting Support"]
      },
      {
        slug: "cogs-tracking",
        title: "COGS Tracking",
        description: "Cost of Goods Sold tracking for 280E compliance.",
        content: "Because of IRS Section 280E, cannabis businesses can only deduct Cost of Goods Sold. We implement rigorous COGS tracking systems to maximize your allowable deductions while staying fully compliant with tax laws.",
        features: ["Inventory Valuation", "Direct Cost Allocation", "Indirect Cost Analysis", "280E Documentation & Reporting Support"]
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
        title: "Property Financial Management",
        description: "Overall financial oversight for property portfolios.",
        content: "We provide comprehensive financial management for your property business. From consolidated reporting to individual property performance tracking, we give you the data you need to manage your portfolio effectively.",
        features: ["Rental Income Tracking", "Expense Allocation (Property-wise / Unit-wise)", "Bank & Escrow Reconciliation", "Owner Statements & Reports", "CAM Charges / HOA Tracking (Commercial)", "Depreciation Support (for CPA)"]
      },
      {
        slug: "tax-ready-books",
        title: "Tax-Ready Books",
        description: "Preparing real estate financials for tax time.",
        content: "Real estate taxation is complex. We maintain your books throughout the year with tax implications in mind, tracking depreciation, improvements, and repairs separately to ensure a smooth tax filing process.",
        features: ["Depreciation Schedules", "CapEx vs Repairs", "Financial Record Support for 1031 Exchanges", "Passive Activity Tracking"]
      }
    ]
  }
};
