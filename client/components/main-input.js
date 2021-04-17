import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import logo from '../assets/images/gh-logo.png'

import { history } from '../redux'

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
      <div className="bg-orange-400 flex items-center justify-center h-screen ">
        <img
          src={logo}
          alt="gh-logo"
          style={{ height: '600px', width: 'auto', background: 'orange-400', position: 'absolute' }}
        />
        <div className="bg-black text-white font-bold rounded-lg border-0 shadow-lg p-10">
          <form action="" onSubmit={handleClick} className="relative">
            <input
              id="input-field"
              name="serch"
              background="black"
              placeholder="Enter username"
              className="bg-black h-10 px-5 text-gray-500 pr-10 rounded-null focus:outline-none focus:bg-black mr-5"
              type="text"
              area-label="Full-name"
              value={username}
              onChange={handleChange}
            />
            <button
              id="search-button"
              type="submit"
              className="px-8 rounded-null bg-orange-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 rounded-md border-0 hover:bg-orange-700 "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

MainInput.propTypes = {}

export default MainInput
