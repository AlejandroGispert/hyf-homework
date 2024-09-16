"use client";
import { useState } from "react";
import { Image } from "next/image";
import { useRouter } from "next/navigation";

export default function Notes() {
  const [data, setData] = useState({ notetaker: "", noteId: "" });
  const router = useRouter();

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleClick = (e) => {
    router.push(`/notes/${data.noteId}?notetaker=${data.notetaker}`);
  };

  return (
    <main>
      <h1> NOTES</h1>
      <label htmlFor="notetaker">Notetaker</label>
      <input
        type="text"
        name="notetaker"
        id="notetaker"
        onChange={handleChange}
        value={data.notetaker}
      />
      <label htmlFor="noteId">NoteId</label>
      <input
        type="text"
        name="noteId"
        id="noteId"
        onChange={handleChange}
        value={data.noteId}
      />
      <button onClick={handleClick}>go to note</button>
    </main>
  );
}
