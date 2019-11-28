import axios from 'axios'
import generateId from '../utils'

const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const createNew = async (content) => {
    const object = { 
        id: generateId(), 
        content: content,
        votes: 0
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (obj) => {
    const response = await axios.put(`${baseUrl}/${obj.id}`, {...obj, votes: obj.votes + 1})
    return response.data
}
  
export default { getAll, createNew, vote }
