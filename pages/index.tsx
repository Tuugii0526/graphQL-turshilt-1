import { todoAddMutation } from "@/lib/mutations-string/todo";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: todoAddMutation,
            variables: {
              input: {
                taskName: "hiking",
                description: "I like go hiking",
              },
            },
          }),
        });
        const data = await res.json();
        console.log("DATA:", data);
      } catch (error) {
        console.log(`ERROR:${error}`);
      }
    }
    getUsers();
  }, []);
  return <div>Hello From Pinecone Advocate Graphql Challenge</div>;
}
