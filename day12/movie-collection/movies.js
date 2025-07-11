const movie = {
  title: "케이팝 데몬 헌터스",
  director: "매기 강",
  year: 2025,
  genre: "Animation",
};

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

function printMovies() {
  console.log("Movie Collection:");

  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].title) movies[i].title = "Unknown";
    if (!movies[i].director) movies[i].director = "Unknown Director";
    if (!movies[i].genre) movies[i].genre = "Unknown Genre";

    console.log(`
        ${i + 1}. Title: "${movies[i].title}", Director: "${
      movies[i].director
    }", Year: ${movies[i].year}, Genre: "${movies[i].genre}";
      `);
  }

  console.log(`Total Movies: [${movies.length}]`);
}

printMovies();

function searchMoviesByGenre(genre) {
  console.log(`${genre} Movies:`);

  let found = false;
  let count = 1;

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre === genre) {
      console.log(
        `${count}. Title: ${movies[i].title}, Director: ${movies[i].director}, Year: ${movies[i].year}, Genre: ${movies[i].genre}`
      );
      found = true;
      count++;
    }
  }

  if (!found) {
    console.log(`No movies found for genre: ${genre}.`);
  }
}

// 사용 예시
searchMoviesByGenre("SF");

const calculateAverageYear = function (movies) {
  let totalYear = 0;
  for (let i = 0; i < movies.length; i++) {
    totalYear += movies[i].year;
  }
  return Math.round(totalYear / movies.length);
};

const findNewestMovie = (movies) => {
  let newest = movies[0];
  for (let i = 1; i < movies.length; i++) {
    if (movies[i].year > newest.year) {
      newest = movies[i];
    }
  }
  return newest;
};

function printStatistics() {
  console.log("Statistics:");
  console.log(`Average Year: ${calculateAverageYear(movies)}`);
  const newest = findNewestMovie(movies);
  console.log(`Newest Movie: ${newest.title} (${newest.year})`);
}

printStatistics();

function addMovies(...newMovies) {
  movies.push(...newMovies);
  console.log(`${newMovies.length} movies added successfully.`);
}

addMovies(
  { title: "The Matrix", director: "Wachowskis", year: 1999, genre: "SF" },
  { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "SF" }
);
