import { createVote } from '../reducers/anecdoteReducers'
import React from 'react'
import { createNotification, clearNotification } from '../reducers/notificationReducers'


const AnecdoteList = (props) => {
    const anecdotes = props.store.getState().anecdotes

    const vote = (id) => {
      props.store.dispatch(createVote(id))
      const votedContent = props.store.getState().anecdotes.find(n => n.id === id)
      props.store.dispatch(createNotification(`you voted for ${votedContent.content}`))
      setTimeout(() => props.store.dispatch(clearNotification()), 5000)
    }

    return (
        <div>
            { anecdotes.filter(str => str.content.toLowerCase().includes(props.store.getState().filter)).sort((a,b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
                )}
          </div>
    )
}

export default AnecdoteList