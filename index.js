const express = require("express");
const app = express();
const VERIFY_TOKEN = "ZZ429683C4C977415CAAFCCE10F7D57E11";

// Middleware para interpretar JSON
app.use(express.json());

// Rota do webhook
app.post("/webhook", (req, res) => {
  console.log("Received webhook:");
  console.log(req.body); // já é um objeto JSON

  res.status(200).json({ message: "Webhook received successfully." });
});

// Verificação do webhook
app.get("/cloud-api", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verificado!");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
