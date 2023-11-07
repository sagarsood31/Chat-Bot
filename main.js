const express = require("express");
const OpenAI = require("openai");
const app = express();
app.use(express.json()); // Add this line to enable JSON request body parsing

const openai = new OpenAI({
  apiKey: "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"
});

app.get('/getResponse', async (req, res) => {
  const userPrompt = req.body.userPrompt;
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{"role": "user", "content": userPrompt}], // Use an array of objects
    max_tokens: 100
  });
  console.log(response.choices[0].message.content); // Fixed this line
  res.send(response.choices[0].message.content); // Fixed this line
});

app.listen(9131, () => {
  console.log("server started");
});
