import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img src="/logo.jpg" alt="Finzura Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-none tracking-tight text-foreground">FINZURA</span>
                <span className="text-[10px] font-medium tracking-widest text-muted-foreground">NEXTGEN GLOBAL</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-brand"
                    />
                  )}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-gradient-brand text-white hover:opacity-90 transition-opacity rounded-full px-6 shadow-lg shadow-orange-500/20">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-xl font-heading font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </Link>
              ))}
               <Link href="/contact">
                  <Button className="w-full mt-4 bg-gradient-brand text-white rounded-full py-6 text-lg">
                    Get Started
                  </Button>
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                 <img src="/logo.jpg" alt="Finzura Logo" className="h-10 w-auto brightness-0 invert" />
                 <div className="flex flex-col">
                    <span className="font-heading font-bold text-lg leading-none tracking-tight text-white">FINZURA</span>
                    <span className="text-[10px] font-medium tracking-widest text-white/70">NEXTGEN GLOBAL</span>
                 </div>
              </div>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
                Delivering accurate, reliable, and modern bookkeeping solutions for international businesses.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-sm text-secondary-foreground/70">
                <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white">Services</h4>
              <ul className="space-y-4 text-sm text-secondary-foreground/70">
                <li>Bookkeeping</li>
                <li>Payroll Processing</li>
                <li>Tax Preparation</li>
                <li>Cash Flow Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact</h4>
              <ul className="space-y-4 text-sm text-secondary-foreground/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 98407 97545</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="break-all">FINZURANEXTGENGLOBALSERVICES@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Finzura NextGen Global Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
