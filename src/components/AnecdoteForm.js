import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducers'
import { createNotification, clearNotification } from '../reducers/notificationReducers'



const AnecdoteForm = (props) => {
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        props.store.dispatch(createAnecdote(content))
        props.store.dispatch(createNotification(`you added a new anecdote ${content}`))
        setTimeout(() => props.store.dispatch(clearNotification()), 5000)

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

export default AnecdoteForm