import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");
  if (req.body.title !== "" && req.body.content !== "") {
    let result = await db.collection("post").insertOne(req.body);
  } else {
    res.status(400).json("양식을 잘못 입력하였습니다.");
  }
  return res.status(200).redirect("/list");
}
