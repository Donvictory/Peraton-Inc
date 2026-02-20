import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Careers() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen">
      {/* HERO */}
      <section className="py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Build The Future of Secure Operations
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Join a team driving innovation in technology infrastructure, secure
          data entry operations, and intelligent customer systems.
        </p>
      </section>

      {/* WHY JOIN */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Technology Innovation",
            desc: "Work with AI systems, secure cloud infrastructure, and advanced automation tools.",
          },
          {
            title: "Mission Impact",
            desc: "Support critical enterprise and operational systems globally.",
          },
          {
            title: "Career Growth",
            desc: "Continuous learning, certifications, and leadership development programs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-10 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl text-blue-400 font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* OPEN ROLES */}
      <section className="bg-[#111827] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Current Openings
          </h2>

          {[
            "Cloud Infrastructure Engineer",
            "Senior Data Entry Operations Specialist",
            "Customer Operations Manager",
            "Cybersecurity Analyst",
            "AI Systems Engineer",
          ].map((role, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white/5 p-6 mb-6 rounded-xl border border-white/10"
            >
              <h3>{role}</h3>
              <Link
                to="/job-application"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm"
              >
                Apply
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Built on Technology. Powered by People.
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Our teams combine technical precision with operational excellence,
          delivering secure and scalable systems that drive measurable impact.
        </p>
      </section>
    </div>
  );
}
