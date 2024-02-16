import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not_found'>
    <span>This page doesn't seem to exist.</span>
    <div className='not_found_marg'><Link to="/" >Go Back</Link></div>
    </div>
  )
}

export default PageNotFound