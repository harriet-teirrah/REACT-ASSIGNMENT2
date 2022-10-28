import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate=useNavigate()
  console.log(navigate)
  return (
    <div>
      <h1>Route not found</h1>
      <a onClick={() => navigate(-1)}>Go back home</a>
    </div>
  );
}

export default Error