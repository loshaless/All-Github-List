const initialState = {
  repositories: [],
  isLoading: true,
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_REPOSITORIES':
      return { ...state, repositories: action.payload }

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }

    default:
      return state
  }
}

export default reducer