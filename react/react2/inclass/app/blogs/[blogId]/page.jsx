"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function blog({ params }) {
  const path = usePathname();
  const query = useSearchParams();

  function removeHyphens(str) {
    const words = str.split("-");

    // Capitalize the first letter of each word except the first one
    const camelCased = words.map((word, index) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return camelCased.join(" ");
  }
  return (
    <main>
      <br />
      <br />
      <br />
      <h1> Blog dynamic path: {path}</h1>
      <p>{removeHyphens(params.blogId)}</p>
    </main>
  );
}
