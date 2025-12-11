import Layout from "@/components/Layout";
import { useRoute, useLocation, Link } from "wouter";
import { serviceData } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  const [, setLocation] = useLocation();

  if (!match || !params || !serviceData[params.slug]) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
           <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
           <Button onClick={() => setLocation("/services")}>Back to Services</Button>
        </div>
      </Layout>
    );
  }

  const service = serviceData[params.slug];
  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 text-sm text-white/60">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{service.title}</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <Icon className="w-16 h-16 text-primary" />
            </motion.div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading font-bold mb-4"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/80 max-w-2xl leading-relaxed"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.detailedContent}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">What We Cover</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.subServices.map((sub, i) => (
                    <Link key={sub.slug} href={`/services/${params.slug}/${sub.slug}`}>
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="flex flex-col p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md cursor-pointer group transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {sub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {sub.description}
                        </p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-lg text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-secondary text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-brand opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4">Ready to get started?</h3>
                  <p className="text-white/80 mb-8">
                    Contact us today to discuss how our {service.title} can support your business growth.
                  </p>
                  <Button 
                    className="w-full bg-white text-secondary hover:bg-gray-100 font-bold h-12 text-lg"
                    onClick={() => setLocation("/contact")}
                  >
                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
