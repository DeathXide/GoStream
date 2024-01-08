import { Logo } from "./_components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" h-[100vh] flex flex-col gap-y-6 items-center justify-center">
        <Logo />
        {children}
      </div>
    </>
  );
}
