import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hugging Face backend running 🚀");
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ reply: "Invalid messages format" });
    }

    const prompt = messages
      .map((m) =>
        m.role === "user"
          ? `User: ${m.content}`
          : `Assistant: ${m.content}`
      )
      .join("\n");

    const hfResponse = await axios.post(
      "https://router.huggingface.co/hf-inference/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: 256,
          temperature: 0.7,
          return_full_text: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 60000,
      }
    );

    const reply =
      hfResponse.data?.[0]?.generated_text ??
      "Sorry, I couldn’t generate a response.";

    return res.json({ reply });
  } catch (error) {
    console.error(
      "❌ Hugging Face error:",
      error?.response?.data || error.message
    );
    return res.status(500).json({
      reply: "⚠️ AI service is temporarily unavailable.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
