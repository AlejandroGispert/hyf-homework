// Weather wear

const appropiateWearHelper = (temp) => {
  console.log("--we only have support for jackets at the moment--");
  //deleted array
  if (-10 >= temp) {
    return "you should wear a Down Jacket";
  } else if (temp <= 0) {
    return "you should wear an Insulated Jacket";
  } else if (temp <= 10) {
    return "you should wear a Parka or a Winter Jacket";
  } else if (temp <= 20) {
    return "you should wear a Leather Jacket or a Lightweight Jacket";
  } else if (temp <= 30) {
    return "you should wear a Sports Jacket";
  } else if (temp <= 40) {
    return "you should wear a Lightweight Hoodie";
  } else if (40 < temp) {
    return "you shouldn't wear anything";
  }
};

const clothesToWear = appropiateWearHelper(41);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
