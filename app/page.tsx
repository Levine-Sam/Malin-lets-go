import Link from "next/link";
import Homepage from "./screens/Hompage";
export default function Home() {
  return (
    <div>
      <Link href="/Homepage">
        <Homepage />
      </Link>
    </div>
  );
}
