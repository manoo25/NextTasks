import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">My ToDo List</h1>
      <Link href="/add" className="text-blue-500 underline">+ Add Task</Link>
      {/* هنبقى نعرض هنا اللي جاي من MongoDB */}
    </main>
  );
}
