// 영화 데이터 배열 (하드코딩)
const movies = [
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

// 전체 영화 목록 출력 함수
function printMovies() {
  console.log("Movie Collection:");

  // 각 영화 정보 출력
  for (let i = 0; i < movies.length; i++) {
    // 빈 속성 확인 후 기본값 설정
    if (!movies[i].title) movies[i].title = "Unknown";
    if (!movies[i].director) movies[i].director = "Unknown Director";
    if (!movies[i].genre) movies[i].genre = "Unknown Genre";

    // 영화 정보 출력
    console.log(`
       ${i + 1}. Title: "${movies[i].title}", Director: "${
      movies[i].director
    }", Year: ${movies[i].year}, Genre: "${movies[i].genre}";
     `);
  }

  // 총 영화 개수 출력
  console.log(`Total Movies: [${movies.length}]`);
}

// 전체 영화 목록 출력 실행
printMovies();
