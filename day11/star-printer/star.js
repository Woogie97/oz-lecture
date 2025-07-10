// 사용자 입력
var inputStr = prompt("출력할 별 갯수를 입력하세요.");
let input = Number(inputStr);
console.log("input:", input);

// 입력받은 수 만큼 별 찍기

const maxStars = 10;
var stars = "";

function printStars(count = 1) {
  for (i = 0; i < count; i++) {
    if (count == 0) continue;
    stars += "*";
  }

  console.log(stars);
}

function main() {
  while (isNaN(inputStr) || inputStr <= 0 || inputStr > 10) {
    console.log("Invalid input! Enter a number between 1 and 10.");
    inputStr = prompt("출력할 별 갯수를 입력하세요.");
  }

  printStars(input);
}

//마지막 함수 실행
main();
