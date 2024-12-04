import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const saltRounds = 10;
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  const db = (await connectDB).db("forum");

  const existingUser = await db.collection("user").findOne({ id: req.body.id });
  if (existingUser) {
    return res.status(400).json("이미 존재하는 아이디입니다.");
  }

  const result = await db.collection("user").insertOne(req.body);
  return res.status(200).json(req.body);
}
