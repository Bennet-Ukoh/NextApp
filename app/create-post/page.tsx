import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default async function Page() {
  return (
    <main className="text-center mt-20">
      <h1 className="md:text-5xl text-4xl font-bold mb-4">Create posts</h1>
      <Form />
      <LogoutLink>Log Out</LogoutLink>
    </main>
  );
}
