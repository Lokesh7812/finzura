import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { serviceData } from "@/data/services";
import { 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Services() {
  // Convert serviceData object to array for mapping
  const servicesList = Object.entries(serviceData).map(([slug, data]) => ({
    slug,
    ...data
  }));

  // Separate into Main and Industry specific for layout structure matching previous design
  const mainServices = servicesList.filter(s => !s.slug.includes("cannabis") && !s.slug.includes("automobile") && !s.slug.includes("property"));
  const industryServices = servicesList.filter(s => s.slug.includes("cannabis") || s.slug.includes("automobile") || s.slug.includes("property"));

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground"
            >
              Our Services
            </motion.h1>
            <p className="text-xl text-muted-foreground">
              Specialized financial solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid gap-24">
            {/* Main Services List */}
            <div className="grid md:grid-cols-2 gap-8">
              {mainServices.map((service, i) => (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all group h-full cursor-pointer relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-6 h-6 text-primary" />
                     </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                        <div className="text-white">
                          <service.icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                        
                        <ul className="space-y-3">
                          {service.subServices.slice(0, 3).map((sub, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {sub.title}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 text-primary font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Industry Specific */}
            <div className="bg-secondary rounded-3xl p-12 text-white overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
               <div className="relative z-10">
                 <h2 className="text-3xl font-heading font-bold mb-12 text-center">Industry Specialized Solutions</h2>
                 
                 <div className="grid md:grid-cols-3 gap-8">
                   {industryServices.map((service, i) => (
                     <Link key={service.slug} href={`/services/${service.slug}`}>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group h-full">
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <service.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                          <ul className="space-y-2">
                            {service.subServices.slice(0, 3).map((sub, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {sub.title}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 text-white/50 text-sm flex items-center gap-2 group-hover:text-white transition-colors">
                             View Details <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                     </Link>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
