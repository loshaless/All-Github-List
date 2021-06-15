import React from 'react'

function Home() {
  return (
    <div classNameName="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" class="img-thumbnail" alt="..."></img>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

export default Home
