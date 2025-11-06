import SignupForm from "../components/signup/SignUpForm";

export default async function SignupPage(
  { searchParams }: { searchParams: Promise<{ [key: string]: string }> },
) {
  const params = await searchParams;
  const email = params.email ?? "";
  return (
    <section className="relative w-full flex items-center justify-center py-12">
      <div className="w-full max-w-3xl px-6 py-24 z-2">
        <SignupForm email={email} />
      </div>
    </section>
  );
}
