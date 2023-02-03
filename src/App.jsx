import React, { useRef } from 'react'
import Form from './components/Form'
import Field from './components/Field'
import Submit from './components/Submit'
import './App.scss'
import TextArea from './components/TextArea'
import Selector from './components/Selector'

const App = () => {
  const form = useRef()

  const submit = e => {
    e.preventDefault()
    const f = form.current
    const data = {
      fullName: f.fullName.value,
      mail: f.mail.value,
      age: f.age.value,
      ranking: f.ranking.value,
      obs: f.obs.value,
      country: f.country.value,
      active: f.active.checked
    }
    console.log(data)

    fetch('http://localhost:3050/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        f.reset()
      })
      .catch(err => console.log(err))
  }

  const countries = [
    { val: 'RD', content: 'Republica Dominicana' },
    { val: 'PR', content: 'Puerto Rico' },
    { val: 'CU', content: 'Cuba' },
    { val: 'PE', content: 'Peru' },
    { val: 'BO', content: 'Bolivia' }
  ]

  return (
    <Form submit={submit} formRef={form}>
      <Field type='text' name='fullName' value='' label='Nombres' />
      <Field type='email' name='mail' value='' label='Correo electronico' />
      <Field type='number' name='age' value='' label='Edad' />
      <Field type='range' name='ranking' value='' label='Calificacion' />
      <TextArea name='obs' value='' label='Observaciones' />
      <Selector name='country' label='Pais' options={countries} />
      <Field type='checkbox' name='active' label='Activo?' checked />
      <Submit value='Guardar' />
    </Form>
  )
}

export default App
