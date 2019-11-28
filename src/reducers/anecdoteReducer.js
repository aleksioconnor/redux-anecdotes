import generateId from '../utils'


const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: generateId(),
    votes: 0
  }
}


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': 
      const id = action.data.id
      const anectodeToVote = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anectodeToVote,
        votes: (anectodeToVote.votes + 1)
      }
      return state.map(note =>
        note.id !== id ? note : changedAnecdote 
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
        return action.data
    default: return state
  }
}

export default reducer