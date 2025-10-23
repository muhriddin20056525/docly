import GoogleButton from "@/components/GoogleButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/my-documents");
  }

  return (
    <div>
      <div className="text-center w-[70%] mx-auto mt-20">
        <h1 className="text-4xl font-bold">📝 Docly — Your Mini Word Editor</h1>
        <p className="my-3 text-muted-foreground">
          Create, edit, and manage your documents effortlessly — all in one
          place.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Docly is a modern, lightweight word editor designed for simplicity and
          focus. Log in securely with Google and start writing instantly. Edit
          your text seamlessly using the powerful Tiptap editor, save your work
          manually, and access it anytime. Fast, secure, and distraction-free —
          writing has never been this smooth.
        </p>
      </div>

      <div className="flex items-center flex-col gap-3 mt-5 md:hidden">
        <GoogleButton />
      </div>
    </div>
  );
}
