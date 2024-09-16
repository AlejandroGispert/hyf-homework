"use client";

import { useRef } from "react";
import styles from "./page.css";
export default function SubmitNote() {
  const refs = {
    firstName: useRef("firstName"),
    lastName: useRef("lastName"),
    email: useRef("email"),
    phoneNumber: useRef("phoneNumber"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    for (let key in refs) {
      formData[key] = refs[key].current.value;
      console.log(formData);
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const email = emailRef.current.value;
    setIsValid(emailRegex.test(email));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.myForm}>
      <h1>HOMEWORK FORM</h1>
      <br />
      <br />

      <label htmlFor="firstName">firstName: </label>
      <br />

      <input type="text" name="firstName" id="firstName" ref={refs.firstName} />
      <br />
      <br />

      <label htmlFor="lastName">lastName: </label>
      <br />

      <input type="text" name="lastName" id="lastName" ref={refs.lastName} />
      <br />
      <br />

      <label htmlFor="email">email: </label>
      <br />

      <input
        type="email"
        name="email"
        id="email"
        ref={refs.email}
        onChange={validateEmail}
      />
      <br />

      <br />
      <label htmlFor="phoneNumber">phoneNumber: </label>
      <br />

      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        ref={refs.phoneNumber}
      />
      <br />
      <br />

      <button type="submit">Send Form</button>
    </form>
  );
}
