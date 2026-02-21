import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="bg-[#0b0c0f] text-slate-200 overflow-hidden antialiased">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Careers in
            <span className="text-[#d4af37]"> Secure Technology</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join professionals advancing digital infrastructure, operational
            intelligence, and mission-critical systems.
          </p>
        </div>
      </section>

      {/* ================= OPEN ROLES ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
        {[
          "Cloud Infrastructure Engineer",
          "Senior Data Entry Operations Specialist",
          "Customer Operations Manager",
          "Cybersecurity Analyst",
          "AI Systems Engineer",
        ].map((role, index) => (
          <div
            key={index}
            className="bg-[#12141a] p-6 rounded-xl border border-white/5
            hover:border-[#d4af37]/40 transition-all duration-300 flex justify-between items-center"
          >
            <h3 className="text-white">{role}</h3>

            <Link
              to="/job-application"
              className="bg-[#d4af37] text-black px-6 py-2 rounded-md font-semibold
              hover:bg-[#c19b2e] transition"
            >
              Apply
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
