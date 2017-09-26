const tournaments = (state = [], action) => {
  switch (action.type) {
    case 'TOURNAMENTS':
      return action.tournaments
    case 'ADD TOURNAMENT':
      return action.tournaments
    case 'UPDATE TOURNAMENT':
      return state.map( tournament => {
        if (tournament.id === action.tournament.id)
          return action.tournament 
        return tournament 
      })
    case 'DELETE TOURNAMENT':
      return action.tournament
    default:
      return state
  }
}

export default tournaments