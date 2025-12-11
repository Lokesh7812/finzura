import Layout from "@/components/Layout";
import { useRoute, useLocation, Link } from "wouter";
import { serviceData } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubServiceDetail() {
  const [match, params] = useRoute("/services/:category/:sub");
  const [, setLocation] = useLocation();

  if (!match || !params || !serviceData[params.category]) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
           <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
           <Button onClick={() => setLocation("/services")}>Back to Services</Button>
        </div>
      </Layout>
    );
  }

  const category = serviceData[params.category];
  const subService = category.subServices.find(s => s.slug === params.sub);

  if (!subService) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
           <h1 className="text-2xl font-bold mb-4">Sub-Service Not Found</h1>
           <Button onClick={() => setLocation(`/services/${params.category}`)}>Back to {category.title}</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden border-b border-border">
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${params.category}`} className="hover:text-primary transition-colors">{category.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{subService.title}</span>
          </div>
          
          <div className="max-w-4xl">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary font-medium text-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              {category.title}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground"
            >
              {subService.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {subService.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none mb-12"
              >
                <h3 className="text-2xl font-bold mb-4 font-heading text-foreground">Detailed Process</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {subService.content}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6 font-heading text-foreground">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {subService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/5 border border-border">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                 <div className="bg-background border border-border p-6 rounded-2xl">
                    <h4 className="font-bold text-lg mb-4 text-foreground">More in {category.title}</h4>
                    <div className="space-y-2">
                      {category.subServices.map((sub) => (
                        <Link key={sub.slug} href={`/services/${params.category}/${sub.slug}`}>
                          <a className={`block p-3 rounded-lg transition-colors text-sm font-medium ${
                            sub.slug === params.sub 
                              ? "bg-primary text-white" 
                              : "hover:bg-secondary/5 text-muted-foreground hover:text-foreground"
                          }`}>
                            {sub.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                 </div>

                 <div className="bg-gradient-brand text-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-4">Need help with {subService.title}?</h3>
                    <p className="text-white/90 mb-6 text-sm">
                      Get a customized quote for your business needs.
                    </p>
                    <Button 
                      className="w-full bg-white text-orange-600 hover:bg-gray-50 font-bold"
                      onClick={() => setLocation("/contact")}
                    >
                      Contact Us
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
