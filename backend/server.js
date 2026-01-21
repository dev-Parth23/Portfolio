const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const PORTFOLIO_DATA = require("./data");

app.get("/", (req, res) => {
  res.send("Backend running");
});


app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    const prompt = `You are Buddy, Parth's AI assistant. Use the following context to answer questions about Parth:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

If the answer is not in the context, you can answer generally but mention you are not sure about Parth's specific view on it. Keep your answers concise and friendly.
User: ${message}`;
    console.log("Gemini model object:", model.model);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const botResponse = response.text();

    res.json({ response: botResponse });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Failed to fetch response from AI" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("Using model: gemini-2.5-flash");
});