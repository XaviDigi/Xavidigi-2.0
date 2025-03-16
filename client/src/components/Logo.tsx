import { Link } from "wouter";
import { gradientText } from "@/lib/utils";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <img 
          src="/images/logo.png" 
          alt="XaviDigi Logo" 
          className="h-10 w-auto" 
        />
        <span className={`text-2xl font-bold ${gradientText}`}>
          XaviDigi
        </span>
      </div>
    </Link>
  );
}
