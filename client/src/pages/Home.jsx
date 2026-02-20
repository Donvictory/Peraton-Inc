import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0b1220] text-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0b1220]" />

        {/* Navigation */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl 
                  bg-white/10 backdrop-blur-xl border border-white/10 
                  rounded-xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl"
        >
          <h1 className="font-semibold tracking-wide text-base sm:text-lg">
            <Link to="/">Peraton Inc.</Link>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm text-gray-200">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/careers" className="hover:text-white transition">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          <Link
            to="/job-application"
            className="bg-white text-black text-xs sm:text-sm 
                 font-medium px-4 sm:px-5 py-2 rounded-lg 
                 hover:bg-gray-200 transition"
          >
            Apply
          </Link>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mt-24 md:mt-0"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-6xl 
                   font-bold leading-tight mb-6"
          >
            Securing Tomorrow’s{" "}
            <span className="text-blue-400">Critical Missions</span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl 
                  text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Advanced cybersecurity, AI, and defense technologies powering
            national security and global intelligence operations.
          </p>

          <Link
            to="/job-application"
            className="inline-block bg-blue-600 hover:bg-blue-700 
                 px-6 sm:px-8 py-3 sm:py-4 
                 text-sm sm:text-base 
                 rounded-lg font-semibold transition shadow-xl"
          >
            Join Our Mission
          </Link>
        </motion.div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            Our Capabilities
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            Delivering mission-critical systems across cybersecurity, AI,
            defense modernization, and secure cloud infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {[
            {
              title: "Cybersecurity",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Artificial Intelligence",
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Defense Systems",
              img: "https://images.unsplash.com/photo-1581092918484-8313f9b5e0b2?q=80&w=2070&auto=format&fit=crop",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/10"
            >
              <img
                src={item.img}
                className="h-44 sm:h-56 w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Cutting-edge innovation built for secure, scalable, and
                  resilient national operations.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CEO SECTION ================= */}
      <section className="bg-[#111827] py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 text-center md:text-left">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            className="w-48 sm:w-72 md:w-96 rounded-2xl shadow-2xl"
          />

          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Leadership That Drives Innovation
            </h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Under visionary leadership, we continue to expand secure digital
              capabilities while delivering trusted mission outcomes globally.
            </p>
            <p className="text-blue-400 font-semibold text-sm sm:text-base">
              — Chief Executive Officer
            </p>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-5xl font-bold mb-12 sm:mb-16">
          Executive Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-10">
          {[
            {
              name: "Michael Carter",
              role: "Chief Technology Officer",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sarah Mitchell",
              role: "Director of Cyber Ops",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Daniel Brooks",
              role: "Head of AI Research",
              img: "https://randomuser.me/api/portraits/men/67.jpg",
            },
          ].map((person, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-lg"
            >
              <img
                src={person.img}
                className="w-24 sm:w-32 h-24 sm:h-32 mx-auto rounded-full mb-4 sm:mb-6 border-4 border-blue-500"
              />
              <h3 className="text-lg sm:text-2xl font-semibold">
                {person.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {person.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-10 sm:py-12 px-4 sm:px-6 text-gray-400">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-sm sm:text-base">
          <div>
            <h3 className="text-white font-semibold mb-3">Peraton Inc</h3>
            <p>Mission-critical solutions protecting our nation’s future.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/job-application">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Headquarters</h4>
            <p>
              123 Defense Parkway
              <br />
              Washington, DC
              <br />
              info@peraton.com
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} Peraton Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
