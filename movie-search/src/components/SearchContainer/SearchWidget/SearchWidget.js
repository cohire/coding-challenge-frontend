import React from 'react'
import styles from './SearchWidget.module.css'

const searchWidget = props => {
  return (
    <div className={styles.SearchWidget}>
      <div className={styles.TitleSearch}>
        <button className={styles.TitleButton} onClick={props.clicked} />
        <input
          className={styles.SearchInput}
          type='text'
          placeholder='Movie title'
          value={props.titleValue}
          onChange={props.changed}
        />
      </div>
      <div className={styles.YearSearch}>
        <button className={styles.YearButton} onClick={props.clicked} />
        <input
          className={styles.SearchInput}
          type='text'
          placeholder='Year of release'
          value={props.yearValue}
          onChange={props.changed}
        />
      </div>
    </div>
  )
}

export default searchWidget
