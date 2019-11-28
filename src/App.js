import React from 'react';
import { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducers'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  })
  return (
    <div>
      <Notification/>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(
  null, { initializeAnecdotes }
)(App)