import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const RepositoryList = (props) => {
  const { repo, username } = props

  // const handleOnChange = (e) => {
  //   e.preventDefault()
  //   setRepoFilter(e.target.value)
  //   const filteredRepo = repo.filter((it) => {
  //     console.log(it)
  //     return it.name
  //       .toLowerCase()
  //       .includes(repoFilter)
  //       .toLowerCase()
  //   })
  //   setRepo(filteredRepo)
  // }
  const handleAnswerChange = (e) => {
    if (e.key === 'space') {
      history.push(`/${username}/${it.name}`)
    }
  }
  return (
    <div className="bg-black full-screen">
      <div className="flex text-yellow-700 text-left px-4 py-2">
        <div className="w-1/4">Repositories</div>
        <div className="w-1/4">language</div>
        <div className="w-1/4">Last update</div>
        <div className="w-1/4">Description</div>
      </div>
      {repo.map((it) => (
        <div
          key={it.id}
          className="flex bg-orange-400 mb-2 text-grey-600 border-red-400 text-left
          px-4 py-2 items-center justify-center hover:bg-orange-300 "
          onKeyPress={handleAnswerChange}
          onClick={() => history.push(`/${username}/${it.name}`)}
          aria-hidden="true"
        >
          <div className="w-1/4  text-justify">
            <img
              src={it.owner.avatar_url}
              alt="userpic"
              style={{ height: '90px', width: 'auto' }}
            />
            <Link to={`/${username}/${it.name}`}>
              <b>
                <u>{it.name}</u>
              </b>
              <br />
              ReadMe.MD
            </Link>
          </div>
          <div className="w-1/4">{it.language ? it.language : '-'}</div>
          <div className="w-1/4">last update: {it.updated_at.substring(0, 10)}</div>
          <div className="w-1/4 ">
            <div className="w-1/4 text-center flex-col">
              {it.description ? it.description : '-'}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

RepositoryList.propTypes = {}

export default RepositoryList
