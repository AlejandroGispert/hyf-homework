"use client";
import Image from "next/image";
import styles from "./page.module.css";

const ToggleContent = ({ isToggled }) => {
  const setIsToggled = () => !isToggled;
  return (
    <button onClick={setIsToggled}> {"Toggle Content " + isToggled}</button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
};
export function Layout({ children }) {
  return (
    <div className={styles.card}>
      <Header />

      <main>{children}</main>
      <ToggleContent isToggled={false} />
      <Footer />
    </div>
  );
}

export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} width={200} height={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default function Home() {
  return (
    <Layout>
      <h1>Hola</h1>
      <Card
        imageUrl={"https://placehold.co/400"}
        title={"My card"}
        description={"this is an example card"}
      />
      <Button
        text={"Me gusta"}
        onClick={() => {
          alert("Yeah");
        }}
      />
      <Button
        text={"No me gusta"}
        onClick={() => {
          alert("Noo");
        }}
      />
    </Layout>
  );
}
