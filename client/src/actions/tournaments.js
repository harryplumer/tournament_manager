import axios from 'axios'

//getAllCategories
export const getTournaments = () => {
  //thunk
  return(dispatch) => {
    axios.get('/api/tournaments')
      .then( res => dispatch({type: 'TOURNAMENTS', tournaments: res.data}))
  }
}

//AddCatgeory
export const addTournament = (tournament) => {
  return(dispatch) => {
    axios.post('/api/tournaments', {tournament})
      .then( res => dispatch({ type: 'ADD TOURNAMENT', tournaments: res.data }))
  }
}

//EditCategory
export const updateTournament = (tournament) => {
  return(dispatch) => {
    axios.put(`/api/tournaments/${tournament.id}`, {tournament})
      .then(res => dispatch({type: 'UPDATE TOURNAMENT', tournament: res.data}))
  }
}

//DeleteCategory
export const deleteTournament = (id) => {
  return(dispatch) => {
    axios.delete(`/api/tournament/${id}`)
      .then(res => dispatch({type: 'DELETE TOURNAMENT', categories: res.data}))
  }
}
