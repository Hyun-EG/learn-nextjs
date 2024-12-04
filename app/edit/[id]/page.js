import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function Edit(props) {
  let db = (await connectDB).db("forum");
  let url = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  console.log(url);

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={url.title} />
        <input name="content" defaultValue={url.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={url._id.toString()}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
