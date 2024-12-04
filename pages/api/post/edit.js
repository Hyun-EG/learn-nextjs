import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const handleEdit = { title: req.body.title, content: req.body.content };
  const db = (await connectDB).db("forum");
  const result = db
    .collection("post")
    .updateOne({ _id: new ObjectId(req.body._id) }, { $set: handleEdit });
  res.status(200).redirect("/list");
  console.log(result);
}
