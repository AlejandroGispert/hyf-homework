// Weather wear

const appropiateWearHelper = (temp) => {
  console.log("--we only have support for jackets at the moment--");

  const jacketDrawer = [
    "Down Jacket",
    "Insulated Jacket",
    "Winter Jacket",
    "Lightweight Jacket",
    "Sports Jacket",
    "Lightweight Hoodie",
    "Fleece Jacket",
    "Windbreaker",
    "Leather Jacket",
    "Parka",
  ];

  if (-10 >= temp) {
    return "you should wear a: " + jacketDrawer[0];
  } else if (temp <= 0) {
    return "you should wear a: " + jacketDrawer[1];
  } else if (temp <= 10) {
    return "you should wear a: " + jacketDrawer[9] + " or a " + jacketDrawer[2];
  } else if (temp <= 20) {
    return "you should wear a: " + jacketDrawer[8] + " or a " + jacketDrawer[5];
  } else if (temp <= 30) {
    return "you should wear a: " + jacketDrawer[7];
  } else if (temp <= 40) {
    return "you should wear a: " + jacketDrawer[4];
  } else if (40 < temp) {
    return "you shouldn't wear anything";
  }
};

const clothesToWear = appropiateWearHelper(-10);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
