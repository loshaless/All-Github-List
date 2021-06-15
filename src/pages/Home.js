import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepositories } from "../store/action";
import Table from '../components/Table'

function Home() {
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState('')
  const repositories = useSelector(state => state.repositories)

  useEffect(() => {
    dispatch(fetchRepositories(inputData));
  }, [dispatch]);

  function handleInputChange(event) {
    setInputData(event.target.value)
  }

  function submit() {
    dispatch(fetchRepositories(inputData));
    console.log(repositories);
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-content-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{ maxWidth: "10vw" }} className="img-thumbnail mt-4" alt="..."></img>
        <span className="row justify-content-center" style={{ fontSize: "3em" }}>Enter Your Username</span>
        <div className="row justify-content-center mb-3">
          <input type="username" className="form-control w-25" placeholder="loshaless" onChange={handleInputChange} />
        </div>
        <button type="button" className="btn btn-primary w-25 mb-5" onClick={submit}>Submit</button>
        {repositories.length !== 0 && (
          <Table data={repositories} />
        )}
      </div>
    </div>
  )
}

export default Home
