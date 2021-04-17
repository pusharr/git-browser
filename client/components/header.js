import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, repositoryname } = useParams()

  return (
    <nav className="flex items-center top-0 justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 border-2 border-black">
        <div className="text-orange-400 text-left object-center" id="repository-name">
          {(repositoryname && `github.com/${username}/${repositoryname}`) ||
            (username && `github.com/${username}`) ||
            'GitHub Bro'}
        </div>
      </div>
      {username && (
        <div className="text-orange-400" id="go-back">
          <Link to="/">Back to Main</Link>
        </div>
      )}
      {repositoryname && (
        <div className="text-orange-400" id="go-repository-list">
          <Link to={`/${username}`}>List of Repositories</Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
