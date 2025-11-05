import SignupForm from "../components/signup/SignUpForm";

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) {
  const params = await searchParams; 
  const email = params.email ?? "";  
  return (
    <section className="relative w-full flex items-center justify-center py-12"
      // className="relative min-h-[99vh] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden"
      // style={{ backgroundImage: "url('/background-gradient.svg')" }}
    >
      <div className="w-full max-w-3xl px-6 py-24">
        <SignupForm email={email} />
      </div>
    </section>
  );
}