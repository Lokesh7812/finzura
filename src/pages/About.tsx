import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import stockImageOffice from "@assets/stock_images/professional_account_ff44d1ea.jpg";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            About Finzura
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            We are a Chennai-based accounting support company offering high-quality bookkeeping and back-office solutions for international clients.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={stockImageOffice} 
              alt="Office" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-heading font-bold text-4xl text-primary mb-2">2024</p>
              <p className="text-muted-foreground font-medium">Founded with a vision for global excellence.</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide accurate, reliable, technology-driven bookkeeping solutions for global businesses, enabling them to focus on growth while we handle the numbers.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a trusted global partner for end-to-end financial support, recognized for our commitment to precision and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center text-foreground">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle2 className="w-8 h-8" />, title: "Accuracy", desc: "Precision in every entry and report." },
              { icon: <Users className="w-8 h-8" />, title: "Transparency", desc: "Clear communication and honest practices." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Efficiency", desc: "Streamlined processes for faster turnaround." },
              { icon: <Award className="w-8 h-8" />, title: "Technology", desc: "Leveraging modern tools for better results." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 text-primary flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center text-foreground">Our Journey</h2>
           
           <div className="space-y-12">
             <div className="flex gap-8 group">
               <div className="flex flex-col items-center">
                 <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all" />
                 <div className="w-0.5 h-full bg-border group-hover:bg-primary/50 transition-colors my-2" />
               </div>
               <div className="pb-12">
                 <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-2">2024</span>
                 <h3 className="text-2xl font-bold mb-2 text-foreground">Inception</h3>
                 <p className="text-muted-foreground">Finzura NextGen Global Services was founded in Chennai with a small team of dedicated experts.</p>
               </div>
             </div>
             
              <div className="flex gap-8 group">
               <div className="flex flex-col items-center">
                 <div className="w-4 h-4 rounded-full bg-secondary ring-4 ring-gray-200 group-hover:ring-gray-300 transition-all" />
                 <div className="w-0.5 h-full bg-border group-hover:bg-secondary/50 transition-colors my-2" />
               </div>
               <div className="pb-12">
                 <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-2">Today</span>
                 <h3 className="text-2xl font-bold mb-2 text-foreground">Expanding Horizons</h3>
                 <p className="text-muted-foreground">Serving international clients across various industries including Cannabis, Automobile, and Real Estate.</p>
               </div>
             </div>
           </div>
        </div>
      </section>
    </Layout>
  );
}
