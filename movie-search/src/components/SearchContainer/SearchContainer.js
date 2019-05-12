import React, { Component } from 'react'
import axios from 'axios'
import styles from './SearchContainer.module.css'
import SearchResults from './SearchResults/SearchResults'
import SearchWidget from './SearchWidget/SearchWidget'

class SearchContainer extends Component {
  state = {
    titleInputValue: '',
    yearInputValue: '',
    savedSearch: '',
    totalResults: '',
    moviesList: [],
    totalPages: '',
    genres: []
  }

  componentDidMount () {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=e16c1f5204dd23fdebe3cf4ed1ca9581'
      )
      .then(response =>
        this.setState({
          genres: response.data.genres
        })
      )
  }

  inputChangedHandler = e => {
    this.setState({
      titleInputValue: e.target.value,
      savedSearch: e.target.value
    })
  }

  findMoviesHandler = (movie, pageNumber) => {
    const baseURL =
      'https://api.themoviedb.org/3/search/movie?api_key=e16c1f5204dd23fdebe3cf4ed1ca9581'
    const query = pageNumber
      ? this.state.savedSearch
      : this.state.titleInputValue
    axios
      .get(baseURL, {
        params: {
          query: query.toLowerCase(),
          page: pageNumber || null
        }
      })
      .then(response => {
        const generalInfo = response.data
        const page = response.data.page
        console.log(response.data)
        const movies = response.data.results.map(movie => ({
          ...movie,
          year: movie.release_date.split('-')[0]
        }))
        movies.length > 0
          ? this.setState({
            error: false,
            moviesList: movies,
            totalResults: generalInfo.total_results,
            titleInputValue: '',
            totalPages: generalInfo.total_pages,
            page: page
          })
          : this.setState({
            error: true
          })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: true })
      })
  }

  render () {
    return (
      <div className={styles.SearchContainer}>
        <SearchResults
          movies={this.state.moviesList}
          genres={this.state.genres}
          totalResults={this.state.totalResults}
        />
        <SearchWidget
          titleValue={this.state.titleInputValue}
          yearValue={this.state.inputValue}
          changed={e => this.inputChangedHandler(e)}
          clicked={this.findMoviesHandler}
        />
      </div>
    )
  }
}

export default SearchContainer
