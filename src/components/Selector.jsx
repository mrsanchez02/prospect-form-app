import React from 'react'

// eslint-disable-next-line react/prop-types
const Selector = ({ value = '', label, name, options = [] }) => {
  return (
    <div className='ed-item form__item'>
      <label htmlFor={name}>
        {label}
        <select name={name} id={name} defaultValue={value}>
          <option value=''>Seleccionar</option>
          {
          options?.map(({ val, content }) => (
            <option value={val} key={val}>{content}</option>
          ))
          }
        </select>
      </label>
    </div>
  )
}

export default Selector
