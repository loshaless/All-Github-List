const axios = require('axios');

let baseURL = 'https://api.github.com/users/'

export function fetchRepositories(user) {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const { data } = await axios({
        url: baseURL + user + '/repos',
        method: "GET",
      })
      dispatch({ type: 'ADD_REPOSITORIES', payload: data })
    }
    catch (error) {
      console.log(error.response);
    }
  }
}