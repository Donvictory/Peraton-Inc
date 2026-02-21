import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-[#0b0c0f] text-slate-200 overflow-hidden antialiased">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Advanced Digital
            <span className="text-[#d4af37]"> Capabilities & Services</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Secure infrastructure, mission-driven data operations, and
            enterprise customer systems engineered for precision.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Secure Cloud Infrastructure",
            "High-Volume Data Entry",
            "Customer Operations Systems",
            "AI & Automation",
            "Cybersecurity Architecture",
            "Operational Analytics & Reporting",
          ].map((service, index) => (
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
                {service}
              </h3>
              <p className="text-slate-400">
                Enterprise-grade systems built to operate securely, efficiently,
                and at scale.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-semibold mb-6 text-white tracking-tight">
          Let’s Build Secure Systems Together
        </h2>

        <Link
          to="/contact"
          className="bg-[#d4af37] hover:bg-[#c19b2e]
          text-black px-10 py-4 rounded-md font-semibold
          transition duration-200
          shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)]"
        >
          Request Consultation
        </Link>
      </section>
    </div>
  );
}
