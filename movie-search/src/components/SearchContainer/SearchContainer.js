import React, { Component } from 'react'
import axios from 'axios'
import styles from './SearchContainer.module.css'
import SearchResults from './SearchResults/SearchResults'
import SearchWidget from './SearchWidget/SearchWidget'

class SearchContainer extends Component {
  state = {}
  render () {
    return (
      <div className={styles.SearchContainer}>
        <SearchResults />
        <SearchWidget />
      </div>
    )
  }
}

export default SearchContainer
