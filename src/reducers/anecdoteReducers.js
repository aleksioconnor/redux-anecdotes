import generateId from '../utils'

export const createAnecdote = (content) => {
    return {
        type: 'NEW_ANECDOTE',
        data: {
        content,
        id: generateId(),
        votes: 0
        }
    }
}

export const createVote = (id) => {
    return{
        type: 'VOTE',
        data: {
          id
        }
    }
}
