"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
export default function Note({ params }) {
  const path = usePathname();
  const query = useSearchParams();
  const allQuery = Object.fromEntries(query.entries());

  return (
    <main>
      <h1> {path}</h1>
      <p>{JSON.stringify(params)}</p>
      {/* <p>{query.get("notetaker")}</p> */}

      {query.getAll("notetaker").map((nt) => (
        <p>{nt}</p>
      ))}
    </main>
  );
}
