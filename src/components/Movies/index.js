import { Switch, Route, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  console.log(movies);
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((item) => (
          <NavLink to={`/movies/${item.id}`}>{item.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
