// import "./other.js";
// import("./other.js"); //lazy import

import { logOther } from "./other.js";
import { numbersToExport } from "./add.js";

console.log("mami");
logOther();
console.log(numbersToExport(1, 2));
