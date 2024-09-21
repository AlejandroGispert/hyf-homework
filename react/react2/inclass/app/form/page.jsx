"use client";

import { useRef } from "react";
export default function SubmitNote() {
  const refs = {
    title: useRef("title"),
    content: useRef("content"),
    author: useRef("author"),
    data: useRef("data"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    for (let key in refs) {
      formData[key] = refs[key].current.value;
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Take a Note</h1>
      <label htmlFor="title">Note Title: </label>
      <input type="text" name="title" id="title" ref={refs.title} />
      <br />
      <label>Note Content: </label>
      <input type="text" name="content" id="content" ref={refs.content} />
      <br />
      <label>Note Author: </label>
      <input type="text" name="author" id="author" ref={refs.author} />
      <br />
      <label>Note Date: </label>
      <input type="text" name="date" id="date" ref={refs.date} />
      <br />
      <button type="submit">Send Form</button>
    </form>
  );
}
