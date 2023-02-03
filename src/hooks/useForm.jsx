import { useRef } from 'react'

const useForm = (data = {}) => {
  const myRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(myRef.current)
  }

  return [data, myRef, handleSubmit]
}

export default useForm
