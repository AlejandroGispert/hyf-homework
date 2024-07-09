const change = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchase = document.getElementById("purchase-btn");

//1.87.
//3.26
let price = 19.5;
let cid = [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

//console.log(change.textContent)
const allCalculationsHere = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash.value == price) {
    change.textContent = "No change due - customer paid with exact cash";

    change.style.fontSize = "12px";
  } else {
    let amountToChange = cash.value - price;

    const resultLeftInCashMachine = [];
    // console.log(cid.reverse().toString())

    for (let i = 0; i < cid.length; i++) {
      for (let j = 0; j < cid[i].length / 2; j++) {
        // names console.log(cid[i][j])
        //money console.log(cid[i][1])

        resultLeftInCashMachine.push(cid[i][1]);

        //console.log(resultLeftInCashMachine)
        //console.log(cid[i][j])
      }
    }
    const totalCashLeft = resultLeftInCashMachine.reduce((a, b) => a + b, 0);
    console.log("totalCashLeft: " + totalCashLeft);
    console.log("amountToChange: " + amountToChange);

    let status = "";
    if (amountToChange < totalCashLeft) {
      status = "Status: OPEN";
    } else if (amountToChange === totalCashLeft) {
      status = "Status: CLOSED";
    } else if (totalCashLeft < amountToChange) {
      status = "Status: INSUFFICIENT_FUNDS";
    }

    /*const divideAmountToChange =(x)=>{
  let values = [100,20,10,5,1,0.25,0.1,0.05,0.01]  
  
}
const chooseRightArray=()=>{}
*/

    //function
    const minusInvertedValPrint = (i, arr) => {
      const reversedArray = arr.reverse();

      const finalArray = [];

      //while(i < reversedArray.length){
      //console.log("value: " + reversedArray[i][1])
      i++;

      let finalResultToPrint = "";

      //start hundreds if
      if (amountToChange < 400) {
        let countOfHundreds = 0;

        const restHundreds = (x) => {
          while (x > 99) {
            x -= 100;
            countOfHundreds += 1;
          }
          console.log(
            "x: " + x.toFixed(2) + " the hundred count is: " + countOfHundreds
          );
          return x.toFixed(2);
        };
        //here i got the values to pass to the nextafter the hundreds
        let remainingValToPass = restHundreds(amountToChange);
        console.log("rem100 " + remainingValToPass);
        if (countOfHundreds > 0) {
          finalArray.push(`ONE HUNDRED: $${countOfHundreds * 100}`);
        }

        //start twenties if
        if (remainingValToPass < 99) {
          let countOftwenties = 0;
          let countOfTwentiesOnCidArray = cid[1][1];

          const restTwentys = (x) => {
            while (x > 19 && countOfTwentiesOnCidArray > 0) {
              x -= 20;
              countOfTwentiesOnCidArray -= 20;
              // if(cid[1][1] > countOftwenties * 20){}
              countOftwenties += 1;
            }
            console.log(
              "x: " + x + " the " + cid[1] + " count is: " + countOftwenties
            );
            return x;
          };
          remainingValToPass = restTwentys(remainingValToPass);
          console.log("rem20 " + remainingValToPass);

          if (countOftwenties > 0) {
            finalArray.push(`TWENTY: $${countOftwenties * 20}`);
          }

          //start tens if
          if (remainingValToPass < 99) {
            let countOftens = 0;
            let countOfTenOnCidArray = cid[2][1];
            console.log("aquiiii" + countOfTenOnCidArray);

            const restTens = (x) => {
              while (x > 9 && countOfTenOnCidArray > 0) {
                x -= 10;
                countOfTenOnCidArray -= 10;
                //if(cid[2][1] > countOftens * 10){}
                countOftens += 1;
              }

              console.log(
                "x: " + x + " the " + cid[2][0] + " ccount is: " + countOftens
              );
              return x;
            };

            let remainingAfterTen = restTens(remainingValToPass);
            console.log("rem10 " + remainingAfterTen);

            if (countOftens > 0) {
              finalArray.push(`TEN: $${countOftens * 10}`);
            }

            /* 5 */

            //start fives if
            if (remainingAfterTen < 99) {
              let countOfFive = 0;

              const restFive = (x) => {
                while (x > 5) {
                  x -= 5;
                  countOfFive += 1;
                }

                console.log("x: " + x + " the fives count is: " + countOfFive);
                return x;
              };

              let remainingAfterFives = restFive(remainingAfterTen);
              console.log("rem5 " + remainingAfterFives);

              if (countOfFive > 0) {
                finalArray.push(`FIVE: $${countOfFive * 5}`);
              }

              /*  ones */

              //start ones if
              if (remainingAfterFives < 5) {
                let countOfOnes = 0;

                const restOnes = (x) => {
                  while (x > 0.9) {
                    x -= 1;
                    countOfOnes += 1;
                  }

                  console.log("x: " + x + " the ones count is: " + countOfOnes);
                  return x;
                };

                let remainingAfterOnes = restOnes(remainingAfterFives);
                console.log("rem-1 " + remainingAfterOnes);

                if (countOfOnes > 0) {
                  finalArray.push(`ONE: $${countOfOnes * 1}`);
                }

                /*  Quarters */

                //start quarters if
                if (remainingAfterOnes < 1) {
                  let countOfQuarters = 0;

                  const restQuarters = (x) => {
                    console.log("answer" + cid[6] + cid[5][1]);

                    while (x > 0.24 && cid[5][1] > 0) {
                      x -= 0.25;
                      countOfQuarters += 1;
                    }

                    console.log(
                      "x: " + x + " the quarters count is: " + countOfQuarters
                    );
                    return x;
                  };

                  let remainingAfterQuarters = restQuarters(remainingAfterOnes);
                  console.log("rem-0.25 " + remainingAfterQuarters);

                  if (countOfQuarters > 0) {
                    finalArray.push(`QUARTER: $${countOfQuarters * 0.25}`);
                  }

                  console.log(
                    "remainingAfterQuarters: " + remainingAfterQuarters
                  );
                  /*  Dimes */

                  //start dime if

                  let countOfDimes = 0;

                  const restDimes = (x) => {
                    while (x > 0.09 && cid[6][1] > 0) {
                      x -= 0.1;
                      countOfDimes += 1;
                    }

                    console.log(
                      "x: " +
                        x +
                        " the " +
                        cid[6][0] +
                        " count is: " +
                        countOfDimes
                    );
                    return x;
                  };

                  let remainingAfterDimes = restDimes(remainingAfterQuarters);
                  console.log("rem-0.1 " + remainingAfterDimes);

                  if (countOfDimes > 0) {
                    finalArray.push(`DIME: $${countOfDimes * 0.1}`);
                  }

                  /*  Nickels */

                  //start nickels if

                  let countOfNickels = 0;

                  const restNickels = (x) => {
                    let xNew = parseFloat(x).toFixed(2);

                    while (xNew > 0.04 && cid[7][1] > 0) {
                      xNew -= 0.05;
                      countOfNickels += 1;
                    }

                    console.log(
                      "x: " +
                        xNew +
                        " the " +
                        cid[7][0] +
                        " count is: " +
                        countOfNickels
                    );
                    return xNew;
                  };

                  let remainingAfterNickels = restNickels(remainingAfterDimes);
                  console.log("rem-0.05 " + remainingAfterNickels);

                  if (countOfNickels > 0) {
                    finalArray.push(`NICKEL: $${countOfNickels * 0.05}`);
                  }

                  /*  PENNYS */
                  let triggeredBigPennies = false;
                  //start pennys if
                  if (parseInt(remainingAfterNickels) < 0.04) {
                    let countOfPennies = 0;
                    let countOfPennysOnCidArray = cid[8][1];

                    const restPennies = (x) => {
                      if (x >= 0.1) {
                        x = x * 1000;
                        triggeredBigPennies = true;
                        console.log("yes");
                      } else {
                        x = x * 10000;
                        console.log("no");
                      }

                      console.log("x: " + x);

                      while (x >= 100 && countOfPennysOnCidArray > 0) {
                        x -= 100;
                        countOfPennysOnCidArray -= 0.01;
                        countOfPennies += 1;
                      }

                      console.log(
                        "x: " +
                          parseInt(x) +
                          " the " +
                          cid[8][0] +
                          " are: " +
                          countOfPennies
                      );

                      return x;
                    };

                    let remainingAfterPennies = restPennies(
                      remainingAfterNickels
                    );
                    console.log("rem-0.01 " + remainingAfterPennies);

                    if (countOfPennies > 0.01 && triggeredBigPennies == false) {
                      finalArray.push(`PENNY: $${countOfPennies * 0.01}`);
                    }
                    if (triggeredBigPennies == true) {
                      finalArray.push(`PENNY: $${countOfPennies * 0.1}`);
                    }

                    console.log(finalArray.toString().replaceAll(",", " "));
                    finalResultToPrint = finalArray
                      .toString()
                      .replaceAll(",", " ");

                    if (status == "Status: INSUFFICIENT_FUNDS") {
                      change.textContent = status;
                    } else {
                      change.textContent = status + " " + finalResultToPrint;
                    }

                    if (remainingAfterPennies / 1000 > 0) {
                      console.log(
                        "remainingAfterPennies: " + remainingAfterPennies / 1000
                      );
                      change.textContent = "Status: INSUFFICIENT_FUNDS";
                    }
                  } //end pennyes if
                } //end Quarters if
              } //end ones if
            } //end of fives if
          } //end of tens if
        } //end of twenties if
      } //End of hundredsif

      //}
      // number arr[i][1], name arr[i]
      /* console.log("the result is: " + arr[8][0].includes("ONE HUNDRED")) */
    }; //end of function
    minusInvertedValPrint(0, cid);

    //console.log(totalCashLeft + price)
    //change.textContent = status + " $" + amountToChange
  }
};

purchase.addEventListener("click", allCalculationsHere);

/* console.log("the amount: " +amountToChange + "and the result: " + restHundreds(amountToChange).toFixed(2))
 finalArray.push(arr[i]) */
