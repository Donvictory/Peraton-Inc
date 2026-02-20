import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Layout() {
  const location = useLocation();

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
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wide">
            Peraton Inc.
          </Link>

          {/* Links */}
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

          {/* CTA */}
          <Link
            to="/job-application"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold shadow-lg transition"
          >
            Apply Now
          </Link>
        </div>
      </nav>

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
