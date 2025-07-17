//Array.map()
//배열을 다른 배열로 매핑할때 사용

let movies = [
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "SF",
  },
  {
    title: "Batman Begins",
    director: "Christopher Nolan",
    year: 2005,
    genre: "Action",
  },
  {
    title: "Avatar",
    director: "James Cameron",
    year: 2009,
    genre: "SF",
  },
];

//title 만 배열로 뽑아서 확인하고 싶다.
// for (let i =0; i< movies.length; i++) {
//     const movie = movies[i];
//     titles.push(movie.title);

// }

// const titlesByMap = movies.map((movie)=>{
//     console.log(movie);

// })

// const infoArr = [];
// for (const movie of movies) {
//     infoArr.push(
//         {
//             title: mo
//         }
//     )
// }

// for (const movie of movies) {
//     const {title,director } = movie;
//     infoArr.push({

//     })
// }

// //map
// const infoArrByMap = movies.map((movie)=>{
//     return {
//         title: movie.title,
//         director: movie.director,
//     }
// })

////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5];
//짝수만 뽑아낸 배열 만들기
//for문
const evenArr = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) evenArr.push(num);
}

//filter
const evenArrFilter = numbers.filter((num) => {
  return num % 2 === 0;
});


// 2024년 이후 영화만 사용한다.
const moviesAfter2024 = movies.filter((movie)=>{
    let year = movie.year;
    if(year >=2024) return true;
    else return false;
});
console.log(moviesAfter2024);

const moviesAfter2024Short = movies.filter((movie)=> movies.year >=2024);


// 조회수 350 초과 영화만 사용한다.
const moviesUpperHit350 = movies.filter((movie)=>{
    const hit = 
})

const moviesUpperHit350Shor = movies.filter((movie)=> movie.hit)


// for 
let sum = 0;
numbers.forEach(num => {
    sum +=num;
}) 

//reduce 
const sumReduce = numbers.reduce((acc, num)=>{

},0);

const sumReduceShort = numbers.reduce((acc, num) => acc + num, 0);


// 최대값, 최솟값 탐색
const min = numbers.reduce((acc, num)=>(
    return acc > num ? num: acc ;
),100)
console.log(min)


const max = numbers.reduce((acc, num)=>(
     acc > num ? num: acc 
),0)
(100, 1)
(1,2)
(1,3)
(1,4)
(1,5)


///////////////////////
const result = numbers.filter((num)=> num%2===0).map((num)=> num*2).reduce((acc,num)=> acc + num,0)