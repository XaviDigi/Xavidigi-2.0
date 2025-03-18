import { Link } from "wouter";
import { gradientText } from "@/lib/utils";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <img 
          src="/images/logo.png" 
          alt="XaviDigi Logo" 
          className="h-16 w-auto" 
        />
      </div>
    </Link>
  );
}
