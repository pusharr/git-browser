import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { history } from '../redux'
// import { useState } from 'react-router-dom'

const MainInput = () => {
  const [username, setUsername] = useState('')

  const handleClick = () => {
    history.push(`/${username}`)
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input
            id="input-field"
            placeholder="Search"
            type="text"
            value={username}
            onChange={handleChange}
          />
          <button onClick={handleClick} id="search-button" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

MainInput.propTypes = {}

export default MainInput
