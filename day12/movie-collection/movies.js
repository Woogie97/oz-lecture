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

// 장르별 영화 검색 함수
function searchMoviesByGenre(genre) {
  console.log(`${genre} Movies:`);

  let found = false; // 검색 결과 있는지 확인
  let count = 1; // 검색 결과 번호

  // 모든 영화를 순회하며 장르 확인
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === genre) {
      console.log(
        `${count}. Title: ${movies[i].title}, Director: ${movies[i].director}, Year: ${movies[i].year}, Genre: ${movies[i].genre}`
      );
      found = true;
      count++;
    }
  }

  // 검색 결과가 없을 경우
  if (!found) {
    console.log(`No movies found for genre: ${genre}.`);
  }
}

// SF 장르 영화 검색 실행
searchMoviesByGenre("SF");

// 평균 출시 연도 계산 함수
const calculateAverageYear = function (movies) {
  let totalYear = 0;

  // 모든 영화의 연도 합계
  for (let i = 0; i < movies.length; i++) {
    totalYear += movies[i].year;
  }

  // 평균 계산 후 반올림
  return Math.round(totalYear / movies.length);
};

// 가장 최신 영화 찾기 함수
const findNewestMovie = (movies) => {
  let newest = movies[0]; // 첫 번째 영화를 기준으로 설정

  // 나머지 영화들과 비교
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].year > newest.year) {
      newest = movies[i];
    }
  }

  return newest;
};

// 통계 정보 출력 함수
function printStatistics() {
  console.log("Statistics:");
  console.log(`Average Year: ${calculateAverageYear(movies)}`);
  const newest = findNewestMovie(movies);
  console.log(`Newest Movie: ${newest.title} (${newest.year})`);
}

// 통계 정보 출력 실행
printStatistics();

// rest 파라미터를 사용한 영화 추가 함수
function addMovies(...newMovies) {
  movies.push(...newMovies); // 배열에 새 영화들 추가
  console.log(`${newMovies.length} movies added successfully.`);
}

// 새로운 영화 추가 실행
addMovies(
  { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "SF" },
  { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "SF" }
);
