import { createVote } from '../reducers/anecdoteReducers'
import React from 'react'
import { createNotification, clearNotification } from '../reducers/notificationReducers'
import { connect } from 'react-redux'



const AnecdoteList = (props) => {
    const vote = (id) => {
      const votedContent = props.anecdotes.find(n => n.id === id)
      props.createVote(votedContent)
      props.createNotification(`you voted for ${votedContent.content}`, 3)
    //   setTimeout(() => props.clearNotification(), 5000)
    }

    return (
        <div>
            { props.visibleAnecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
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

const visibleAnecdotes = ({ anecdotes, filter }) => { 
    return anecdotes.length > 1 ?  anecdotes.filter(str => {
        return str.content.toLowerCase().includes(filter)
    }) : []
}



const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
      visibleAnecdotes: visibleAnecdotes(state)
    }
  }

  const mapDispatchToProps = {
    createVote,
    createNotification,
    clearNotification,
  }

const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
    )(AnecdoteList)
export default ConnectedAnecdoteList
