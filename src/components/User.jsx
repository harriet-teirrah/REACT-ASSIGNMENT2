import React from 'react'

function User({picture,name,email,location}) {
  return (
    <article className='user'>
        <img src={picture.large}alt="" />
        <p className='user-name'>Name: {`${name.title} ${name.first} ${name.last}`}</p>
        <p className="email">{email}</p>
        <p className="location">{location.city}</p>
    </article>
  )
}

export default User