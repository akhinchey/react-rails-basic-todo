import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Main from './main'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('root'),
  )
})
