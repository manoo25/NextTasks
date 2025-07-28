import { NextResponse } from "next/server";
import clientPromise from "@/db/mongoConector";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("todoDB");
  const todos = await db.collection("todos").find().toArray();
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const client = await clientPromise;
  const db = client.db("todoDB");
  await db.collection("todos").insertOne({ title });
  return NextResponse.json({ message: "Task Added" });
}
