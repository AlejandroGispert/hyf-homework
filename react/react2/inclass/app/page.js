import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HolA</h1>
      <Link href="/notes">
        <button>go to notes</button>
      </Link>
      <br />
      <Link href="/picture">
        <button>go to picture of the day</button>
      </Link>
      <br />
      <Link href="/picture2">
        <button>go to picture of the day with useEffect</button>
      </Link>
    </>
  );
}
