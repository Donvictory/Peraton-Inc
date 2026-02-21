export default function ContactUs() {
  return (
    <div className="bg-[#0b0c0f] text-slate-200 overflow-hidden antialiased">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Contact Our
            <span className="text-[#d4af37]"> Operations Team</span>
          </h1>

          <p className="text-lg text-slate-300">
            Connect with our technology and operational experts.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <form className="bg-[#12141a] p-10 rounded-xl border border-white/5 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black/40 p-4 rounded-md outline-none border border-white/5"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/40 p-4 rounded-md outline-none border border-white/5"
          />

          <textarea
            rows="5"
            placeholder="How can we assist you?"
            className="w-full bg-black/40 p-4 rounded-md outline-none border border-white/5"
          />

          <button
            type="submit"
            className="w-full bg-[#d4af37] hover:bg-[#c19b2e]
            text-black py-4 rounded-md font-semibold
            shadow-[0_10px_30px_rgba(212,175,55,0.25)]
            hover:shadow-[0_12px_40px_rgba(212,175,55,0.35)] transition"
          >
            Submit Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}
