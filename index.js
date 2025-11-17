const express = require("express");
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota do webhook
app.post("/webhook", (req, res) => {
  console.log("Received webhook:");
  console.log(req.body); // já é um objeto JSON

  res.status(200).json({ message: "Webhook received successfully." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
