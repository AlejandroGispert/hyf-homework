// Flight booking fullname function

const getFullname = (firstname, surname, useFormalName) => {
  if (useFormalName) {
    return "Lord " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
};
getFullname("Benjamin", "Hughes"); // returns "Benjamin Hughes"

const fullname1 = getFullname("Pepe", "Cuba", false);
const fullname2 = getFullname("Loco", "Rodriguez", true);

console.log("fullname1: " + fullname1 + " fullname2: " + fullname2);
