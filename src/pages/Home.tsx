import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  FileSpreadsheet, 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  FileText,
  CheckCircle2,
  Users,
  Clock,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import stockImageOffice from "@assets/stock_images/professional_account_ff44d1ea.jpg";

export default function Home() {
  const services = [
    {
      title: "Bookkeeping & Bank-Office",
      description: "Accurate daily recording of financial transactions and ledger maintenance.",
      icon: <Calculator className="w-8 h-8 text-white" />,
      href: "/services"
    },
    {
      title: "Accounts Payable & Receivable",
      description: "Efficient management of invoices, bills, and payment collections.",
      icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
      href: "/services"
    },
    {
      title: "Bank Reconciliation",
      description: "Monthly reconciliation of bank and credit card statements.",
      icon: <DollarSign className="w-8 h-8 text-white" />,
      href: "/services"
    },
    {
      title: "Cash Flow Management",
      description: "Analysis and forecasting to ensure healthy business liquidity.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      href: "/services"
    },
    {
      title: "Payroll Processing",
      description: "Complete payroll management including calculations and compliance.",
      icon: <Users className="w-8 h-8 text-white" />,
      href: "/services"
    },
    {
      title: "Tax Preparation Support",
      description: "Preparing CPA-ready financial records for tax filings.",
      icon: <FileText className="w-8 h-8 text-white" />,
      href: "/services"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
          <img 
            src={stockImageOffice} 
            alt="Office Background" 
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-100 text-orange-700 font-medium text-sm tracking-wide">
              Global Financial Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 text-foreground">
              Expert Bookkeeping for <span className="text-transparent bg-clip-text bg-gradient-brand">International Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Finzura NextGen Global Services delivers accurate, reliable, and modern financial control with expert support from India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-gradient-brand text-white hover:opacity-90 rounded-full px-8 text-lg h-14 shadow-lg shadow-orange-500/20">
                  Explore Services
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 rounded-full px-8 text-lg h-14 hover:bg-secondary/5">
                  About Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-brand rounded-full blur-3xl opacity-20 animate-pulse" />
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
                <img src="/logo.jpg" alt="Finzura Logo" className="w-full h-full object-contain drop-shadow-xl rounded-2xl" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-30"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Accuracy</p>
                  <p className="text-sm font-bold text-foreground">100% Verified</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-30"
              >
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Turnaround</p>
                  <p className="text-sm font-bold text-foreground">24/7 Support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">Comprehensive Financial Services</h2>
            <p className="text-lg text-muted-foreground">Tailored solutions to streamline your financial operations and ensure compliance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">Why Partner With Finzura?</h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                We combine industry expertise with cutting-edge technology to deliver financial services that drive growth and stability.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "100% Accurate Bookkeeping", desc: "Error-free recording and reconciliation." },
                  { title: "Transparent Pricing", desc: "Affordable rates with no hidden costs." },
                  { title: "Fast Turnaround", desc: "Daily and weekly reporting commitments." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-secondary-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Industry Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {["Cannabis", "Automobile", "Property Management", "Retail", "Healthcare", "Tech"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-brand p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-2">Ready to optimize?</h3>
                <p className="mb-6 opacity-90">Get a free consultation for your business today.</p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full bg-white text-orange-600 hover:bg-gray-50 font-bold">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
