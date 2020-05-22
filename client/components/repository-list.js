import React from 'react'
import { Link } from 'react-router-dom'

const RepositoryList = (props) => {
  const { repo, username } = props
  return (
    <div>
      {repo.map((it) => (
        <div>
          <Link to={`/${username}/${it}`}>{it}</Link>
        </div>
      ))}
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
