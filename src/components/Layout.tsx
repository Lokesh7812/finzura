import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Linkedin, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Finzura Logo" className="h-10 w-auto" />
              <div>
                <div className="font-bold">FINZURA</div>
                <div className="text-xs text-muted-foreground">
                  NEXTGEN GLOBAL
                </div>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm ${
                    location === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="rounded-full px-6">Get Started</Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-30 pt-24 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="text-xl">{link.label}</a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container mx-auto px-6">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/logo.jpg" className="h-10 mb-4 invert" />
              <p className="text-sm opacity-70">
                Delivering modern bookkeeping solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Bookkeeping</li>
                <li>Payroll</li>
                <li>Tax Preparation</li>
                <li>Cash Flow</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><MapPin /> Chennai, India</li>
                <li className="flex gap-2"><Phone /> +91 98407 97545</li>
                <li className="flex gap-2"><Mail /> info@finzuranextgenglobal.com</li>
                <li className="flex gap-2"><Linkedin /> LinkedIn</li>
                <li className="flex gap-2"><Instagram /> Instagram</li>
              </ul>
            </div>
          </div> {/* ✅ GRID CLOSED */}

          {/* BOTTOM */}
          <div className="border-t border-white/10 pt-6 text-sm flex justify-between">
            <p>© {new Date().getFullYear()} Finzura NextGen Global</p>
            <div className="flex gap-6">
              <a>Privacy Policy</a>
              <a>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
