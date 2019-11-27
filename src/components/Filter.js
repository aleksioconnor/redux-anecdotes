import React from 'react'
import { updateFilter } from '../reducers/filterReducers'
import { connect } from 'react-redux'


const Filter = (props) => {
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    props.updateFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  updateFilter,
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Filter)

export default ConnectedFilter

