import React from 'react'
import SearchWidget from './SearchWidget/SearchWidget'
import FilterWidget from './FilterWidget/FilterWidget'

const widgetsContainer = props => {
  return (
    <div>
      <SearchWidget
        changed={props.changed}
        clicked={props.clicked}
        titleValue={props.titleInputValue}
        yearValue={props.inputValue}
      />
      <FilterWidget genres={props.genres} />
    </div>
  )
}

export default widgetsContainer
