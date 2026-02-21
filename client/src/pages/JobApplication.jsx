import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProcessingWorkflow from "../Components/ProcessingWorkflow";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function JobApplication() {
  const [step, setStep] = useState("form");

  const stepOrder = [
    "form",
    "processing",
    "verification",
    "processingVerification",
    "background",
    "success",
  ];

  const getStepIndex = () => stepOrder.indexOf(step);
  const progressPercent = Math.round(
    (getStepIndex() / (stepOrder.length - 1)) * 100,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    resume: null,
    coverLetter: "",
  });

  const [phone, setPhone] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("US");
  const [phoneError, setPhoneError] = useState("");

  const [verification, setVerification] = useState({
    ssn: "",
    dob: "",
    employeeRef: "",
    idFront: null,
    idBack: null,
  });

  const [idPreview, setIdPreview] = useState({
    front: null,
    back: null,
  });

  const [backgroundInfo, setBackgroundInfo] = useState({
    fatherName: "",
    motherName: "",
    maidenName: "",
    birthCityState: "",
    additionalInfo: "",
  });

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country_code) {
          setDefaultCountry(data.country_code);
        }
      })
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setPhoneError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setStep("processing");
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setStep("processingVerification");
  };

  const handleIdUpload = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (!file) return;

    setVerification((prev) => ({
      ...prev,
      [name]: file,
    }));

    const previewUrl = URL.createObjectURL(file);

    setIdPreview((prev) => ({
      ...prev,
      [name === "idFront" ? "front" : "back"]: previewUrl,
    }));
  };

  const handleBackgroundSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setStep("success");
  };

  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-white overflow-hidden py-12">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
        alt="Defense Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/90 via-[#0b0f19]/85 to-[#0b0f19]/95"></div>

      <div className="relative z-10 py-24 px-6">
        {/* ================= FORM ================= */}
        {/* ===== Progress Stepper ===== */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Application</span>
            <span>Verification</span>
            <span>Background</span>
            <span>Complete</span>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <p className="text-center text-xs text-gray-400 mt-2">
            {progressPercent}% completed
          </p>
        </div>
        {step === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
          >
            <h1 className="text-3xl font-semibold mb-10 text-center tracking-tight">
              Apply to Join Peraton
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                required
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <div className="space-y-2">
                <PhoneInput
                  international
                  defaultCountry={defaultCountry}
                  value={phone}
                  onChange={setPhone}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 focus-within:border-white/30"
                />

                {phoneError && (
                  <p className="text-red-400 text-sm">{phoneError}</p>
                )}
              </div>

              <select
                name="position"
                required
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 focus:outline-none"
              >
                <option value="">Select Position Applied For</option>
                <option>Cybersecurity Analyst</option>
                <option>Cloud Engineer</option>
                <option>AI Research Scientist</option>
                <option>Systems Engineer</option>
              </select>

              <select
                name="department"
                required
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-gray-300 focus:outline-none"
              >
                <option value="">Select Department</option>
                <option>Cyber Operations</option>
                <option>Defense Systems</option>
                <option>Artificial Intelligence</option>
                <option>Cloud Infrastructure</option>
              </select>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Upload Resume / CV
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleChange}
                  className="w-full text-sm text-gray-400"
                />
              </div>

              <textarea
                name="coverLetter"
                rows="5"
                required
                placeholder="Cover Letter"
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        )}

        {/* ================= PROCESSING ================= */}
        {step === "processing" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center min-h-[70vh]"
          >
            <ProcessingWorkflow
              showPercent
              onComplete={() => setStep("verification")}
            />
          </motion.div>
        )}

        {step === "processingVerification" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center min-h-[70vh]"
          >
            <ProcessingWorkflow
              showPercent
              onComplete={() => setStep("background")}
            />
          </motion.div>
        )}

        {/* ================= VERIFICATION ================= */}
        {step === "verification" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Applicant Verification
            </h2>

            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              {/* SSN */}
              <h3 className="text-sm uppercase tracking-widest text-gray-300">
                Social Security Number (SSN)
              </h3>
              <input
                type="text"
                placeholder="XXX - XX - XXXX"
                required
                onChange={(e) =>
                  setVerification({ ...verification, ssn: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              {/* DOB */}
              <h3 className="text-sm uppercase tracking-widest text-gray-300">
                Date of Birth
              </h3>
              <input
                type="date"
                required
                onChange={(e) =>
                  setVerification({ ...verification, dob: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              {/* Employee Ref */}
              <input
                type="text"
                placeholder="Employee Referral Code (if any)"
                onChange={(e) =>
                  setVerification({
                    ...verification,
                    employeeRef: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              {/* ================= ID UPLOAD SECTION ================= */}
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gray-300">
                  Government ID Verification
                </h3>

                {/* Front ID */}
                <div>
                  <label className="block text-sm text-gray-300 mb-3 font-medium">
                    Government ID — Front
                  </label>

                  <label className="relative flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer bg-white/5 hover:bg-white/10 hover:border-white/40 transition group">
                    <input
                      type="file"
                      accept="image/*"
                      required
                      name="idFront"
                      onChange={handleIdUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <span className="text-white font-medium text-sm group-hover:scale-105 transition">
                      📤 Click to upload front of ID
                    </span>

                    <span className="text-xs text-gray-400 mt-1">
                      PNG, JPG supported
                    </span>
                  </label>

                  {idPreview.front && (
                    <img
                      src={idPreview.front}
                      alt="Front ID Preview"
                      className="mt-4 w-full max-h-48 object-cover rounded-xl border border-white/10"
                    />
                  )}
                </div>

                {/* Back ID */}
                <div>
                  <label className="block text-sm text-gray-300 mb-3 font-medium">
                    Government ID — Back
                  </label>

                  <label className="relative flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-white/20 rounded-2xl cursor-pointer bg-white/5 hover:bg-white/10 hover:border-white/40 transition group">
                    <input
                      type="file"
                      accept="image/*"
                      required
                      name="idBack"
                      onChange={handleIdUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <span className="text-white font-medium text-sm group-hover:scale-105 transition">
                      📤 Click to upload back of ID
                    </span>

                    <span className="text-xs text-gray-400 mt-1">
                      PNG, JPG supported
                    </span>
                  </label>

                  {idPreview.back && (
                    <img
                      src={idPreview.back}
                      alt="Back ID Preview"
                      className="mt-4 w-full max-h-48 object-cover rounded-xl border border-white/10"
                    />
                  )}
                </div>
              </div>

              {/* ================= SECURITY BLOCK ================= */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-gray-300 leading-relaxed">
                <p className="font-medium text-white mb-2">
                  🔒 Your Data Is Secure
                </p>
                <p>
                  We use enterprise-grade encryption and strict access controls
                  to protect your personal information. Your documents are used
                  solely for identity verification and are never shared with
                  third parties outside the hiring process.
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition"
              >
                Submit for Verification
              </button>
            </form>
          </motion.div>
        )}

        {step === "background" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Background Information
            </h2>

            <p className="text-center text-sm text-gray-400 mb-8">
              Please provide the following details for final identity
              verification.
            </p>

            <form onSubmit={handleBackgroundSubmit} className="space-y-6">
              <input
                type="text"
                required
                placeholder="Father's Full Name"
                onChange={(e) =>
                  setBackgroundInfo({
                    ...backgroundInfo,
                    fatherName: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <input
                type="text"
                required
                placeholder="Mother's Full Name"
                onChange={(e) =>
                  setBackgroundInfo({
                    ...backgroundInfo,
                    motherName: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <input
                type="text"
                required
                placeholder="Mother's Maiden Name"
                onChange={(e) =>
                  setBackgroundInfo({
                    ...backgroundInfo,
                    maidenName: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <input
                type="text"
                required
                placeholder="City and State of Birth"
                onChange={(e) =>
                  setBackgroundInfo({
                    ...backgroundInfo,
                    birthCityState: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              <textarea
                rows="4"
                placeholder="Additional Information (optional)"
                onChange={(e) =>
                  setBackgroundInfo({
                    ...backgroundInfo,
                    additionalInfo: e.target.value,
                  })
                }
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-white/30"
              />

              {/* 🔐 Security Note */}
              <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-4">
                <p className="text-xs text-emerald-200 leading-relaxed">
                  🔐 <strong>Data Security & Confidentiality:</strong> All
                  submitted information is encrypted and securely stored in
                  compliance with enterprise data protection standards. Your
                  personal data is used solely for identity verification and
                  will never be shared with unauthorized parties.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep("verification")}
                  className="w-1/2 bg-white/10 text-white py-4 rounded-xl font-medium hover:bg-white/20 transition"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 bg-white text-black py-4 rounded-xl font-medium hover:bg-gray-200 transition"
                >
                  Complete Verification
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6"
            >
              <span className="text-4xl">✅</span>
            </motion.div>

            <h2 className="text-3xl font-semibold mb-3">
              Verification Complete
            </h2>

            <p className="text-gray-400 max-w-md mb-8">
              Your application and identity verification have been successfully
              submitted. Our team will review your information and contact you
              if further steps are required.
            </p>

            <button
              onClick={() => setStep("form")}
              className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
            >
              Return Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
