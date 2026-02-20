import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0b1220] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0b1220]" />

        {/* ================= NAVIGATION ================= */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl 
  bg-white/10 backdrop-blur-xl border border-white/10 
  rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl z-20"
        >
          {/* Logo */}
          <h1 className="font-semibold tracking-wide text-lg md:text-xl">
            <Link to="/" className="hover:text-blue-400 transition">
              Peraton Inc.
            </Link>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm text-gray-200 font-medium">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/careers" className="hover:text-white transition">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link to="/services" className="hover:text-white transition">
              Services
            </Link>
          </div>

          {/* CTA */}
          <Link
            to="/job-application"
            className="bg-blue-600 hover:bg-blue-700 
    px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg"
          >
            Apply Now
          </Link>
        </div>
        <div className="relative z-10 max-w-5xl">
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight 
               bg-gradient-to-r from-blue-400 via-white to-purple-400 
               bg-clip-text text-transparent"
          >
            Powering Secure Digital Infrastructure for{" "}
            <span className="text-blue-400">Technology & Operations</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Peraton Inc. delivers advanced technology solutions, high-volume
            secure data entry systems, and intelligent customer operations
            platforms that support government and enterprise missions worldwide.
          </p>

          <Link
            to="/job-application"
            className="bg-blue-600 px-8 py-4 rounded-lg font-semibold
shadow-[0_0_25px_rgba(59,130,246,0.6)]
hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
transition"
          >
            Join Our Growing Team
          </Link>
        </div>
      </section>

      {/* ================= TECHNOLOGY SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technology-Driven Foundation
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We build scalable systems powered by AI, automation, secure cloud
            infrastructure, and real-time analytics to streamline
            mission-critical workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-400">
              Secure, compliant cloud architecture supporting millions of
              transactions daily with high availability and redundancy.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              AI & Automation
            </h3>
            <p className="text-gray-400">
              Intelligent automation pipelines reducing operational workload,
              increasing speed, and eliminating human error.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Cyber Defense
            </h3>
            <p className="text-gray-400">
              Multi-layered cybersecurity architecture protecting sensitive
              government and enterprise data.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DATA ENTRY & OPERATIONS ================= */}
      <section className="bg-[#111827] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              High-Volume Secure Data Entry Operations
            </h2>
            <p className="text-gray-400 mb-6">
              Our structured data entry division handles sensitive
              documentation, digital records management, compliance processing,
              and secure information indexing for government and enterprise
              clients.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Secure document digitization & indexing</li>
              <li>• Compliance-driven data validation workflows</li>
              <li>• Automated verification systems</li>
              <li>• Real-time analytics dashboards</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= CUSTOMER OPERATIONS ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Intelligent Customer Operations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our customer operations team leverages advanced CRM systems, AI
            support tools, and secure communication frameworks to deliver
            efficient, responsive service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              24/7 Support Systems
            </h3>
            <p className="text-gray-400">
              Continuous monitoring and support channels ensuring seamless
              communication.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              CRM Integration
            </h3>
            <p className="text-gray-400">
              Centralized platforms managing customer data securely and
              efficiently.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Performance Analytics
            </h3>
            <p className="text-gray-400">
              Data-driven insights improving service quality and response times.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="bg-[#111827] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { number: "10M+", label: "Records Processed" },
            { number: "99.99%", label: "System Uptime" },
            { number: "24/7", label: "Operations Monitoring" },
            { number: "500+", label: "Tech Professionals" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Build the Future of Secure Operations With Us
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We are expanding across technology, data processing, and customer
          operations. Join a company that blends innovation with mission impact.
        </p>
        <Link
          to="/job-application"
          className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold transition shadow-xl"
        >
          Apply Now
        </Link>
      </section>

      {/* ================= PREMIUM FOOTER ================= */}
      <footer className="bg-black pt-16 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Peraton Inc.</h3>
            <p className="text-gray-400 text-sm">
              Advancing technology, secure data operations, and intelligent
              customer solutions for tomorrow’s digital landscape.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cloud Infrastructure</li>
              <li>Data Entry Operations</li>
              <li>Customer Support Systems</li>
              <li>Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/">Home</Link>
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
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              123 Defense Parkway
              <br />
              Washington, DC
              <br />
              info@peraton.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Peraton Inc. | Engineered for Security.
          Powered by Innovation.
        </div>
      </footer>
    </div>
  );
}
