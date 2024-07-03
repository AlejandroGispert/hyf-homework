//Looops

const items = [1, 2, 3];
const result1 = [];
const result2 = [];
const result3 = [];

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const double = item * 2;
  const divided = double / 6;
  result1.push(divided);
}

for (const item of items) {
  const double = item * 2;
  const divided = double / 6;
  result1.push(divided);
}

const mapLoop = items.map((item) => {
  const double = item * 2;
  const divided = double / 6;
  return divided;
});

const filteredLoop = items
  .filter((item) => isOdd(item))
  .map((item) => {
    const double = item * 2;
    const divided = double / 6;
    return divided;
  });

console.log(filteredLoop);
