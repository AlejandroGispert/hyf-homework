class ShoppingCart {
  constructor(items, totalAmount) {
    this.items = items;
    this.totalAmount = totalAmount;
  }
  addItem(item, price, quantity) {
    this.items.push({ item, price, quantity });
  }
  removeItem(item) {
    this.items = this.items.filter((item) => item.name !== item.name);
  }
  getTotalCart() {
    for (let i = 0; i < this.items.length; i++) {
      this.totalAmount += this.items[i].price * this.items[i].quantity;
    }
    return this.totalAmount;
  }

  checkout(moneyIn) {
    this.totalAmount = 0;
    console.log(this.totalAmount - moneyIn);
  }
}
const myCart = new ShoppingCart(
  [
    { name: "bananas", price: 2, quantity: 1 },
    { name: "pears", price: 3, quantity: 1 },
    { name: "chicken", price: 10, quantity: 2 },
  ],
  100
);

// console.log(myCart);
myCart.addItem("broccoli", 2, 1);
console.log(myCart);
// myCart.getTotalCart();

console.log(myCart.checkout(30));
