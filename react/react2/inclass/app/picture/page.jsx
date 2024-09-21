//Exercise 1
import Image from "next/image";
export default async function pictureOfTheDay() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();

  return (
    <>
      <h3> {data.date}</h3>
      <h3> Explanation: {data.explanation}</h3>
      <Image src={data.hdurl} width={100} height={100}></Image>
      <Image src={data.url} width={100} height={100}></Image>
    </>
  );
}
