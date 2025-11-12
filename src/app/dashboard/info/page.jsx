import { createClient } from "../../lib/db";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from("todos").select();

  return (
    <ul>
      jp
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
