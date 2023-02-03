import React from 'react'

// eslint-disable-next-line react/prop-types
const Submit = ({ value }) => (
  <div className='ed-item form__item'>
    <input type='submit' value={value} className='button full' />
  </div>
)

export default Submit
