import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((e, i) => (
        <div>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            href={`detail/${result[i]._id.toString()}`}
          >
            <div key={i} className="list-item">
              <h4>{e.title}</h4>
              <p>{e.content}</p>
            </div>
          </Link>
          <Link href={`edit/${result[i]._id.toString()}`}>
            <button style={{ cursor: "pointer" }}>수정</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
