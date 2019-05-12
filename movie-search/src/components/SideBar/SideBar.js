import React from 'react'
import styles from './SideBar.module.css'

const sideBar = props => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarHeader}>
        <h1 className={styles.Title}>Wesley</h1>
        <div className={styles.Arrow} />
      </div>
      <h2 className={[styles.Subtitle, styles.Active].join(' ')}>
        Discover
        <div className={styles.Search} />
      </h2>
      <h2 className={[styles.Subtitle, styles.Underline].join(' ')}>Watched</h2>
      <ul style={{ marginBottom: '2rem' }}>
        <li className={styles.SubmenuItem}>Movies</li>
        <li className={styles.SubmenuItem}>TV Shows</li>
      </ul>
      <h2 className={[styles.Subtitle, styles.Underline].join(' ')}>Saved</h2>
      <ul>
        <li className={styles.SubmenuItem}>Movies</li>
        <li className={styles.SubmenuItem}>TV Shows</li>
      </ul>
    </div>
  )
}

export default sideBar
