import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0b0c0f] text-slate-200 overflow-hidden antialiased">
      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* subtle gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white mb-6 tracking-tight">
            Powering Secure Digital Infrastructure for
            <span className="text-[#d4af37]"> Technology & Operations</span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Peraton Inc. delivers advanced technology solutions, high-volume
            secure data entry systems, and intelligent customer operations
            platforms supporting government and enterprise missions worldwide.
          </p>

          <Link
            to="/job-application"
            className="inline-flex items-center gap-2
        bg-[#d4af37] hover:bg-[#c19b2e]
        text-black
        px-8 py-4 rounded-md font-semibold
        transition-all duration-200
        shadow-[0_10px_30px_rgba(212,175,55,0.25)]
        hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)]"
          >
            Join Our Team
          </Link>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-white tracking-tight">
            Technology-Driven Foundation
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We build scalable systems powered by AI, automation, secure cloud
            infrastructure, and real-time analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cloud Infrastructure",
              text: "Secure, compliant cloud architecture supporting millions of daily transactions.",
            },
            {
              title: "AI & Automation",
              text: "Intelligent automation pipelines reducing workload and improving accuracy.",
            },
            {
              title: "Cyber Defense",
              text: "Multi-layered cybersecurity protecting sensitive government and enterprise data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#12141a]
              p-8 rounded-xl
              border border-white/5
              hover:border-[#d4af37]/40
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <h3 className="text-lg font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DATA OPS ================= */}
      <section className="py-24 px-6 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white tracking-tight">
              High-Volume Secure Data Entry Operations
            </h2>

            <p className="text-slate-400 mb-6">
              Our structured data entry division handles sensitive
              documentation, digital records management, compliance processing,
              and secure information indexing.
            </p>

            <ul className="space-y-3 text-slate-300">
              <li>• Secure document digitization & indexing</li>
              <li>• Compliance-driven validation workflows</li>
              <li>• Automated verification systems</li>
              <li>• Real-time analytics dashboards</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
            className="rounded-xl shadow-2xl border border-white/5"
            alt="data operations"
          />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { number: "10M+", label: "Records Processed" },
            { number: "99.99%", label: "System Uptime" },
            { number: "24/7", label: "Operations Monitoring" },
            { number: "500+", label: "Tech Professionals" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-semibold text-[#d4af37] mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6 text-white tracking-tight">
          Build the Future of Secure Operations With Us
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Join a company that blends innovation with mission impact.
        </p>

        <Link
          to="/job-application"
          className="bg-[#d4af37] hover:bg-[#c19b2e]
          text-black px-10 py-4 rounded-md font-semibold
          transition duration-200
          shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)]"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
