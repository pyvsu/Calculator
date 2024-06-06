function calculate() {
  const num1Field = document.getElementById("num1");
  const num2Field = document.getElementById("num2");
  const operation = document.getElementById("operation").value;

  const num1 = num1Field.value;
  const num2 = num2Field.value;

  if (num1 === "") {
    num1Field.placeholder = "Enter number";
    return;
  }

  if (num2 === "") {
    num2Field.placeholder = "Enter number";
    return;
  }

  let result;
  if (operation === "add") {
    result = Number(num1) + Number(num2);
  } else if (operation === "subtract") {
    result = Number(num1) - Number(num2);
  } else if (operation === "multiply") {
    result = Number(num1) * Number(num2);
  } else if (operation === "divide") {
    result = Number(num1) / Number(num2);
  }

  document.getElementById(
    "result"
  ).innerHTML = `Result: <span>${result}</span>`;
}
