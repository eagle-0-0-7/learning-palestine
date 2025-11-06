import SignupForm from "../components/signup/SignUpForm";

export default async function SignupPage(
  { searchParams }: { searchParams: Promise<{ [key: string]: string }> },
) {
  const params = await searchParams;
  const email = params.email ?? "";
  return (
    <section className="relative w-full flex items-center justify-center py-12">
      {/* <Image
        src="/background-gradient.svg"
        alt="Background decorative gradient"
        fill
        priority
        fetchPriority="high"
        className="object-cover rounded-[32px] -z-10"
      /> */}
      <div className="w-full max-w-3xl px-6 py-24 z-2">
        <SignupForm email={email} />
      </div>
    </section>
  );
}
