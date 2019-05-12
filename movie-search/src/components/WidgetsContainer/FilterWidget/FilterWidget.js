import React, { Component } from 'react'
import styles from './FilterWidget.module.css'

class FilterWidget extends Component {
  state = {
    genreOpen: false,
    voteOpen: false,
    languageOpen: false
  }

  toggleGenres = () => {
    this.setState(prevState => ({
      genreOpen: !prevState.genreOpen
    }))
  }

  toggleVotes = () => {
    this.setState(prevState => ({
      voteOpen: !prevState.voteOpen
    }))
  }

  toggleLanguages = () => {
    this.setState(prevState => ({
      languageOpen: !prevState.languageOpen
    }))
  }

  render () {
    const genres = this.state.genreOpen
      ? this.props.genres
        .sort((a, b) => a - b)
        .map(genre => {
          return (
            <li className={styles.ListItem} key={genre.id}>
              <input className={styles.CheckBox} type='checkbox' />
              {genre.name}
            </li>
          )
        })
      : null

    return (
      <div className={styles.FilterWidget}>
        <h6>Movie</h6>
        <div
          className={
            this.state.genreOpen
              ? [styles.GenreDropdown, styles.Open].join(' ')
              : styles.GenreDropdown
          }
        >
          <div className={styles.GenreHeader} onClick={this.toggleGenres}>
            <p className={styles.GenreTitle}>Select genre(s)</p>
          </div>
          <ul
            className={
              this.state.genreOpen
                ? [styles.CheckboxContainer, styles.Open].join(' ')
                : styles.CheckboxContainer
            }
          >
            {genres}
          </ul>
        </div>
        <div
          className={
            this.state.voteOpen
              ? [styles.GenreDropdown, styles.Open].join(' ')
              : styles.GenreDropdown
          }
        >
          <div className={styles.GenreHeader} onClick={this.toggleVotes}>
            <p className={styles.GenreTitle}>Select min. vote</p>
          </div>
          <ul
            className={
              this.state.voteOpen
                ? [styles.CheckboxContainer, styles.Open].join(' ')
                : styles.CheckboxContainer
            }
          >
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />1
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />2
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />3
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />4
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />5
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />6
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />7
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />8
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' />9
            </li>
          </ul>
        </div>
        <div
          className={
            this.state.languageOpen
              ? [styles.GenreDropdown, styles.Open].join(' ')
              : styles.GenreDropdown
          }
        >
          <div className={styles.GenreHeader} onClick={this.toggleLanguages}>
            <p className={styles.GenreTitle}>Select language</p>
          </div>
          <ul
            className={
              this.state.languageOpen
                ? [styles.CheckboxContainer, styles.Open].join(' ')
                : styles.CheckboxContainer
            }
          >
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' /> English
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' /> Spanish
            </li>
            <li className={styles.ListItem}>
              <input className={styles.CheckBox} type='checkbox' /> Italian
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FilterWidget
