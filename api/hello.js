export default function handler(req, res) {
  const key = process.env.API_KEY;cb8f1dda03a4b9caa52e6d660e30b7fcf4de7f26224db2faf6
  res.status(200).json({ msg: "API jalan", key });
}
