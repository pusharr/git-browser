import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import MainInput from './main-input'
import RepositoryList from './repository-list'
import RepositoryName from './repository-name'

const Home = () => {
  const { username, repositoryname } = useParams()
  const [repo, setRepo] = useState([])

  useEffect(() => {
    if (typeof username !== 'undefined') {
      axios.get(`https://api.github.com/users/${username}/repos`).then((it) => {
        const namesArray = it.data.map((elem) => elem.name)
        setRepo(namesArray)
      })
    }
  }, [username])

  const [text, setText] = useState('')

  useEffect(() => {
    if (typeof username !== 'undefined' && typeof repositoryname !== 'undefined') {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios
        .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`, {
          param: {},
          headers
        })
        .then((it) => setText(it.data))
    }
    return () => {}
  }, [username, repositoryname])

  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={() => <MainInput />} />
          <Route
            exact
            path="/:username"
            component={() => <RepositoryList repo={repo} username={username} />}
          />
          <Route
            exact
            path="/:username/:repositoryname"
            component={() => <RepositoryName text={text} />}
          />
        </Switch>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
