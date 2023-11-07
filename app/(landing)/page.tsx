import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sign-up">
                    <Button>
                        Sign Up
                    </Button>
                </Link>
                <Link href="/sign-in">
                    <Button>
                        Log In
                    </Button>
                </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;