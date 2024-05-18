for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
for (var i = 0; i < 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    0,
    i
  );
}
console.log(a);
const a = 10; // Temporal Dead Zone

var a = function () {}; //Expression function

var b = () => {}; //arrow function
