import React from 'react'

const Follower = ({pageData}) => {
    return(
      <div className="container">
        {pageData && pageData.map((page) => {
          const { login, avatar_url, html_url, id} = page
          return (
            <article className="card" key={id}>
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url} className="btn">view profile</a>
            </article>
          )
        })}
      </div>
    )
}

export default Follower
