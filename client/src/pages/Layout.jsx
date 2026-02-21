import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0b1220] text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* ================= GLOBAL GRADIENT BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] 
                        bg-blue-600/20 blur-[120px] rounded-full animate-pulse"
        />
        <div
          className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] 
                        bg-purple-600/20 blur-[120px] rounded-full animate-pulse"
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl 
              bg-[#111c2d]/95 backdrop-blur-md
            border border-white/5
            rounded-xl
            shadow-lg px-5 py-4 flex items-center justify-between shadow-2xl z-20"
      >
        {/* Logo */}
        <h1 className="font-semibold tracking-wide text-lg md:text-xl">
          <Link to="/" className="hover:text-blue-400 transition">
            Peraton Inc.
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
          <NavLink to="/" current={location.pathname}>
            Home
          </NavLink>
          <NavLink to="/services" current={location.pathname}>
            Services
          </NavLink>
          <NavLink to="/careers" current={location.pathname}>
            Careers
          </NavLink>
          <NavLink to="/contact" current={location.pathname}>
            Contact
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA (desktop) */}
          <Link
            to="/job-application"
            className="hidden md:block bg-[#1f3a5f] hover:bg-[#18314f] 
      px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg"
          >
            Apply Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 
      w-[95%] bg-[#0b1220]/95 backdrop-blur-xl border border-white/10 
      rounded-2xl p-6 z-20 shadow-2xl"
          >
            <div className="flex flex-col space-y-5 text-gray-200 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/careers" onClick={() => setMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>

              <Link
                to="/job-application"
                className="hidden md:inline-flex items-center
  bg-[#1f3a5f] hover:bg-[#18314f]
  px-4 py-2 rounded-md text-sm font-medium
  transition-colors duration-200
  border border-white/10"
              >
                Apply
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PAGE CONTENT ================= */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Peraton Inc.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Secure digital infrastructure. Advanced data operations.
              Intelligent customer systems. Engineered for mission-critical
              environments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Secure Cloud Infrastructure</li>
              <li>High-Volume Data Entry</li>
              <li>Customer Operations Systems</li>
              <li>Cybersecurity Architecture</li>
              <li>AI & Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Headquarters</h4>
            <p className="text-gray-400 text-sm">
              123 Defense Parkway
              <br />
              Washington, DC
              <br />
              info@peraton.com
              <br />
              +1 (800) 555-0199
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Peraton Inc. | Trusted. Secure.
          Mission-Ready.
        </div>
      </footer>
    </div>
  );
}

/* Active Link */
function NavLink({ to, children, current }) {
  const active = current === to;

  return (
    <Link
      to={to}
      className={`transition ${
        active ? "text-white border-b border-blue-500 pb-1" : "hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
