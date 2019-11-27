import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducers'
import { createNotification, clearNotification } from '../reducers/notificationReducers'
import { connect } from 'react-redux'



const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        props.createAnecdote(content)
        props.createNotification(`you added a new anecdote ${content}`)
        setTimeout(() => props.clearNotification(), 5000)

        event.target.anecdote.value = ''
      }
    return ( 
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
        </form>
    </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
    }
}

const mapDispatchToProps = {
    createAnecdote,
    createNotification,
    clearNotification
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm