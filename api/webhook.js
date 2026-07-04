const VERIFY_TOKEN = "ZZ429683C4C977415CAAFCCE10F7D57E11";

export default function handler(req, res) {
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    console.log("META VERIFY:", req.query);

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }

    return res.sendStatus(403);
  }

  if (req.method === "POST") {
    console.log("WEBHOOK:", req.body);
    return res.sendStatus(200);
  }

  return res.sendStatus(405);
}