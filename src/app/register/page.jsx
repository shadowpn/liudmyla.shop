'use client'
import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', first_name: '', last_name: '', phone: ''
  })
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8000/api/users/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    if (res.ok) setMessage('✅ Успешная регистрация!')
    else setMessage('Ошибка: ' + JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
      <input placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
      <input placeholder="First Name" value={formData.first_name} onChange={e => setFormData({...formData, first_name: e.target.value})} />
      <input placeholder="Last Name" value={formData.last_name} onChange={e => setFormData({...formData, last_name: e.target.value})} />
      <input placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
      <input type="password" placeholder="Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  )
}
