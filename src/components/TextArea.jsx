import React from 'react'

// eslint-disable-next-line react/prop-types
const TextArea = ({ value, label, name }) => {
  return (
    <div className='ed-item form__item'>
      <label htmlFor={name}>
        {label}
        <textarea name={name} id={name} defaultValue={value} cols='30' row='10' />
      </label>
    </div>
  )
}

export default TextArea
