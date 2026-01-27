import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram
} from "lucide-react";
import stockImageMap from "@assets/stock_images/chennai_india_city_m_6fdddfd3.jpg";

export default function Contact() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We're here to help you with your financial needs. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-background -mt-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* CONTACT INFO CARDS */}
            <div className="lg:col-span-1 space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  content: "+91 98407 97545",
                  link: "tel:+919840797545",
                  sub: "Mon–Fri, 24x7 Support",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "WhatsApp",
                  content: "+91 98407 97545",
                  link: "https://wa.me/919840797545",
                  sub: "Quick chat support",
                  color: "bg-green-50 text-green-600"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Us",
                  content: "info@finzuranextgenglobal.com",
                  link: "mailto:info@finzuranextgenglobal.com",
                  sub: "We'll reply within 24 hours",
                  color: "bg-orange-50 text-orange-600"
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  title: "LinkedIn",
                  content: "finzura-nextgen-global",
                  link: "https://www.linkedin.com/in/finzura-nextgen-global-9458803a4",
                  sub: "Follow us on LinkedIn",
                  color: "bg-sky-50 text-sky-600"
                },
                {
                  icon: <Instagram className="w-6 h-6" />,
                  title: "Instagram",
                  content: "@finzura_nextgen_global",
                  link: "https://www.instagram.com/finzura_nextgen_global",
                  sub: "Photos & updates",
                  color: "bg-pink-50 text-pink-600"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Visit Us",
                  content: "Chennai, Tamil Nadu, India",
                  sub: "Head Office",
                  color: "bg-purple-50 text-purple-600"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className={`p-3 rounded-full ${item.color} shrink-0`}>
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium mb-1 block hover:underline break-all"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mb-1 break-all">
                        {item.content}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MAP SECTION */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group"
              >
                <img
                  src={stockImageMap}
                  alt="Chennai Map"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Our Location
                    </h3>
                    <p className="opacity-90">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
