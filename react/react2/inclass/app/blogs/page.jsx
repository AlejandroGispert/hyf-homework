"use client";

import { usePathname } from "next/navigation";

// Exercise 3 pathname

export default function blogs() {
  const pathname = usePathname();

  return (
    <>
      <h3>blogs</h3>
      <p>Current pathname: {pathname}</p>
    </>
  );
}
