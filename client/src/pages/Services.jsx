import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      {/* HERO */}
      <section className="py-24 text-center px-6 bg-gradient-to-b from-[#0b1220] to-[#111827]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">
            Advanced Technology & Operational Services
          </h1>
          <p className="text-gray-400 text-lg">
            Delivering secure digital infrastructure, high-volume data
            operations, and intelligent customer systems engineered for
            mission-critical environments.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Secure Cloud Infrastructure",
            desc: "Enterprise-grade cloud architecture designed for scalability, compliance, redundancy, and 99.99% uptime performance.",
          },
          {
            title: "High-Volume Data Entry",
            desc: "Secure document processing, digital record indexing, compliance validation, and automation-assisted workflows.",
          },
          {
            title: "Customer Operations Systems",
            desc: "CRM-driven support platforms, AI-powered service tools, and performance analytics dashboards.",
          },
          {
            title: "AI & Automation",
            desc: "Workflow automation pipelines reducing processing time and improving operational efficiency.",
          },
          {
            title: "Cybersecurity Architecture",
            desc: "Multi-layered data protection, secure access management, and threat monitoring systems.",
          },
          {
            title: "Data Analytics & Reporting",
            desc: "Real-time dashboards, predictive insights, and operational intelligence for leadership teams.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-[#111827] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our Operational Framework
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-gray-300">
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">01. Assess</h4>
              <p>Evaluate infrastructure & operational needs.</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">02. Build</h4>
              <p>Deploy secure, scalable tech architecture.</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">03. Operate</h4>
              <p>Manage data entry & customer systems efficiently.</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">04. Optimize</h4>
              <p>Continuously improve performance via analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Secure Systems Together
        </h2>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold transition shadow-xl"
        >
          Request Consultation
        </Link>
      </section>
    </div>
  );
}
