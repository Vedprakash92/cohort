let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] },
];

const movieAvgRating = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
    let average = total/movie.ratings.length;

    return { title : movie.title, average:average.toFixed(2)}
});

console.log(movieAvgRating);