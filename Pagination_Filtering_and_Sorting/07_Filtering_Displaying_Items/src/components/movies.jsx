import React, { Component, Fragment } from 'react';
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';

class Movies extends Component {
  state = {
    movies: [],
    geners: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), geners: getGenres() });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    // console.log(this.state);
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleGenerSelect = gener => {
    console.log(gener);
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0) return <p>There are no movies in the database.</p>;
    const movies = paginate(allMovies, currentPage, pageSize);
    console.log(movies);
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={this.state.geners}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenerSelect}
          />
        </div>
        <div className='col'>
          <p>Showing {count} movies in the database.</p>
          <table className='table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className='btn btn-danger btn-sm'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
