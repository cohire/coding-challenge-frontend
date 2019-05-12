import React from 'react'
import SearchResult from './SearchResult/SearchResult'
import styles from './SearchResults.module.css'

const searchResults = props => {
  const results = props.movies.map(movie => {
    let genres = movie.genre_ids.map(genre => {
      return props.genres.find(gnr => gnr.id === genre).name
    })

    return (
      <SearchResult
        title={movie.title}
        poster={movie.poster_path}
        releaseDate={movie.release_date}
        overview={movie.overview}
        averageVote={movie.vote_average}
        genres={genres}
        movieId={movie.id}
        key={movie.id}
      />
    )
  })
  return <div className={styles.SearchResults}>{results}</div>
}

export default searchResults
