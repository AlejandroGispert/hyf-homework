"use client";
import { useEffect, useState } from "react";
gi;
import Image from "next/image";
// Exercise 2

export default function pictureOfTheDay2() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty array means it runs only once on mount

  return (
    <>
      <h3>Date: {data.date}</h3>
      <p>Explanation: {data.explanation}</p>
      {data.url && (
        <Image src={data.url} alt="NASA Image" width={500} height={500} />
      )}
    </>
  );
}
