import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config(); // 🔑 THIS WAS MISSING

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function test() {
  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: "Say hello in one sentence.",
  });

  console.log(response.output_text);
}

test();
