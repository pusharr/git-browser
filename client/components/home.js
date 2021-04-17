import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import MainInput from './main-input'
import RepositoryList from './repository-list'
import RepositoryName from './repository-name'

const Home = () => {
  const { username, repositoryname } = useParams('')
  const [repo, setRepo] = useState([])

  useEffect(() => {
    if (username) {
      axios(`https://api.github.com/users/${username}/repos`).then((it) => {
        const namesArray = it.data
        setRepo(namesArray)
      })
    }
  }, [username])

  const [text, setText] = useState('')

  useEffect(() => {
    if (username && repositoryname) {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios(`https://api.github.com/repos/${username}/${repositoryname}/readme`, {
        param: {},
        headers
      }).then(({ data }) => setText(data))
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
            component={() => <RepositoryList repo={repo} setRepo={setRepo} username={username} />}
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
