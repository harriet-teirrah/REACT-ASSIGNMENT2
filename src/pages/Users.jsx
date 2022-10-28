import React, { useState } from 'react'
import { useFetch}  from '../useFetch'
import User from '../components/User'

function Users() {
    const[page,setPage]=useState(1)
    const{data,loading,error}=useFetch(`https://randomuser.me/api/?page=${page}&results=8&seed=abmc`)
    console.log(data,loading,error)

    let toTal =6
    let perPage= 8

      if (loading) {
        return <h2>Loading...</h2>;
      }

      // if (!loading && error) {
      //   return <h2>{error}</h2>;
      // }
    
    return (
      <>
       
        <div className="user-list">
          {data.results?.map((user) => {
            return <User key={user.login.uuid} {...user} />;
          })}
        </div>

        <div className="pagination">
          <div className="buttons">
            <button
              className="previous"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
              aria-disabled={page <= 1}
            >
              previous
            </button>
            <button
              className="previous"
              onClick={() => setPage(page + 1)}
              disabled={page >= 50}
              aria-disabled={page >= 50}
            >
              next
            </button>
          </div>
          <div className="pages">
            {new Array(toTal).fill().map((_, idx) => {
              return (
                <button
                  style={
                    page === idx + 1
                      ? { backgroundColor: "#000", color: "#fff" }
                      : {}
                  }
                  onClick={() => setPage(idx + 1)}
                  key={idx}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  
}

export default Users