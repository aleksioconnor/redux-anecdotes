import anecdoteService from '../services/anecdotes'

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote,
        })
    }
}

export const createVote = (content) => {
    return async dispatch => {
        const votedAnecdote = await anecdoteService.vote(content)
        dispatch({
            type: 'VOTE',
            data: {
              id: votedAnecdote.id
            }
        })

    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes,
        })
    }
  }