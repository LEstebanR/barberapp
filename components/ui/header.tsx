import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="w-full  flex items-center justify-between px-4 py-2 h-16 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <Logo />
      <div className="flex items-center gap-x-4">
        <p>Links</p>
      </div>
    </header>
  );
}
