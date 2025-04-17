import Link from "next/link";
// import Homepage from "./screens/Hompage";
import TestScreen from "./screens/TestScreen";
export default function Home() {
  return (
    <div>
      <Link href="/TestScreen">
        <TestScreen />
      </Link>
    </div>
  );
}
