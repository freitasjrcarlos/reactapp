import React from 'react'

const Input = ({id, label, value, onChange, type, onBlur, placeholder, required, error }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} value={value} onChange={onChange}
      placeholder={placeholder} onBlur={onBlur} type={type}
       />
       {error && <p>{error}</p>}
    </>
  )
}

export default Input
