import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">Contact Our Operations Team</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect with our technology, data, and customer operations experts to
          discuss secure and scalable solutions.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* FORM */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 p-10 rounded-2xl border border-white/10 space-y-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black/40 p-4 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/40 p-4 rounded-lg outline-none"
          />
          <textarea
            rows="5"
            placeholder="How can we assist you?"
            className="w-full bg-black/40 p-4 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold"
          >
            Submit Inquiry
          </button>
        </motion.form>

        {/* INFO */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Headquarters
          </h3>
          <p className="text-gray-400 mb-6">
            123 Defense Parkway
            <br />
            Washington, DC
            <br />
            info@peraton.com
            <br />
            +1 (800) 555-0199
          </p>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h4 className="font-semibold mb-3">Operational Support Hours</h4>
            <p className="text-gray-400">
              24/7 Secure Monitoring & Customer Operations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
