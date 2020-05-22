import React from 'react'
import Markdown from 'markdown-to-jsx'

const RepositoryName = (props) => {
  return (
    <div>
      <Markdown id="description">{props.text}</Markdown>
    </div>
  )
}

RepositoryName.propTypes = {}

export default RepositoryName
