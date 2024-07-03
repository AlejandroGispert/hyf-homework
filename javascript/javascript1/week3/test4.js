let arr = ["a", "b"];

arr.push(function () {
  window.alert(this);
});

arr[2](); // a,b,function(){...}
