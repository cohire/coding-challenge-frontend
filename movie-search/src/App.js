import React from 'react'
import Sidebar from './components/SideBar/SideBar'
import SearchContainer from './components/SearchContainer/SearchContainer'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
      <Sidebar />
      <SearchContainer />
    </div>
  )
}

export default App
