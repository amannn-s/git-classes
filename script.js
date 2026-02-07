// Click event -> addEventListener
document.getElementById("submit-btn").addEventListener("click", () => {
  // number
  let age = Number(document.getElementById("age-input").value);

  if (age >= 18) {
    document.getElementById("main-heading").textContent =
      "You can drive a Car.";
    document.getElementById("body").style.backgroundColor = "green";
  } else {
    document.getElementById("main-heading").textContent =
      "You can not drive a Car!";
    document.getElementById("body").style.backgroundColor = "red";
  }
});

console.log(12);
console.log(12.45);
console.log("Hello");
console.log(true);
