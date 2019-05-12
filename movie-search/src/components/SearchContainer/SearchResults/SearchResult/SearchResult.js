import React from 'react'
import styles from './SearchResult.module.css'

const searchResult = props => {
  const imageURL = 'https://image.tmdb.org/t/p/w185'
  const genres = props.genres.join(' | ')
  return (
    <div className={styles.Result}>
      <div className={styles.ResultImageContainer}>
        <img src={imageURL + props.poster} alt={`${props.title}-poster`} />
      </div>
      <div className={styles.ResultDetails}>
        <div className={styles.ResultCardHeader}>
          <h2>{props.title}</h2>
          <div className={styles.ResultVote}>{props.averageVote}</div>
          <div className={styles.Genres}>{genres}</div>
        </div>
        <div className={styles.ResultOverview}>{props.overview}</div>
        <div className={styles.ReleaseDate}>{props.releaseDate}</div>
      </div>
    </div>
  )
}

export default searchResult
