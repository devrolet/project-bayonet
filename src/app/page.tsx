import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="bg-lime-500">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
