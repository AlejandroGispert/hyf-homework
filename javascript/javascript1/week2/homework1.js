// Flight booking fullname function
const getFullName = (firstName, surName, useFormalName) => {
  return useFormalName
    ? `Lord ${firstName} ${surName}`
    : `${firstName} ${surName}`;
};

getFullName("Benjamin", "Hughes"); // returns "Benjamin Hughes"

const fullName1 = getFullName("Pepe", "Cuba", false);
const fullName2 = getFullName("Loco", "Rodriguez", true);

console.log(`fullName1: ${fullName1}; fullName2: ${fullName2}`);
