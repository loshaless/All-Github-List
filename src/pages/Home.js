import React, { useState, useEffect } from 'react'

function Home() {
  const [inputData, setInputData] = useState('')

  function handleInputChange(event) {
    setInputData(event.target.value)
    console.log(inputData);
  }

  function submit() {

  }

  return (
    <div className="container">
      <div className="row justify-content-center align-content-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{ maxWidth: "10vw" }} className="img-thumbnail mt-4" alt="..."></img>
        <span className="row justify-content-center" style={{ fontSize: "3em" }}>Enter Your Username</span>
        <div className="row justify-content-center mb-3">
          <input type="username" className="form-control w-25" placeholder="loshaless" onChange={handleInputChange} />
        </div>
        <button type="button" class="btn btn-primary w-25" onChange={submit}>Submit</button>
      </div>
    </div>
  )
}

export default Home
