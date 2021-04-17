import React from 'react'
import Markdown from 'markdown-to-jsx'
// import '../viewRepos.scss'

const RepositoryName = ({ text }) => {
  return (
    <div className="bg-purple-300 full-screen black text-center px-4 py-0 markdown">
      <Markdown id="description">{text}</Markdown>
    </div>
  )
}

RepositoryName.propTypes = {}

export default RepositoryName
