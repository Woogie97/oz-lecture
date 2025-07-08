var hi = "CHA";
hi = "CHA SEONG WOOK";

let Wow = "SEONG WOOK CHA";
Wow = "WOOGIE";

const Name = "차성욱";

let templateString = `나의 이름은 ${Name}입니다.`;

const num = 1;
const string = "차성욱";
const boolean = true;

const greeting = "안녕하세요!\n 저는 차성욱입니다.";
const greetingCombine = greeting + "당신의 이름은 무엇인가요?";

const myHobbies = ["Bodybuilding", "Combatsports", "Soccer", "Imagination"];

const Privacy = {
  name: "Seong Wook Cha",
  age: 28,
  isStudentOfOz: true,
};

console.log("Variable my last name is " + hi);
console.log("My friendly name is " + Wow);
console.log("저의 한국 이름은 " + Name + " 입니다.");
console.log(templateString);
console.log("My habbies : " + myHobbies);
console.log("Privacy :" + Privacy);
console.log(typeof myHobbies);
console.log(typeof Privacy);

// 도전과제

const undefinedValue = undefined;
const nulllValue = null;

let value; // undefined

console.log(null === undefined); // false

templateString: `Name: ${Privacy.name}, Age: ${Privacy.age}, OZ's Student?: ${Privacy.isStudentOfOz}`;

console.log();

Privacy.email = null;
Privacy.wife = undefined;

console.log(`Type of name is ${typeof Privacy.name}`);
console.log(`Type of age is ${typeof Privacy.age}`);
console.log(`Type of "isstudentofoz" is ${typeof Privacy.isStudentOfOz}`);
console.log(`Type of wife is ${typeof Privacy.wife}`);
console.log("type of email is :" + Privacy.email);
