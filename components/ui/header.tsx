import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="w-full  flex items-center justify-center h-16 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between md:w-8/12 w-full px-4 md:px-0">
        <Logo />
        <div className="flex items-center gap-x-4">
          <p>Links</p>
        </div>
      </div>
    </header>
  );
}
