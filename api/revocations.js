export default function handler(req, res) {
  if (req.method === "GET") {
    const response = {
      revoked: ["ABCD-ZZZZ"]
    };

    return res.status(200).json(response);
  }

  return res.status(405).send("Method Not Allowed");
}
