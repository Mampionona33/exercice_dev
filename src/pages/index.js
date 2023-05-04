import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "./../../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div class="home">
      <Navbar />
      <div>
        <h1>Home page</h1>
      </div>
    </div>
  );
}
