'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:8000/api/users/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    if (res.ok) setMessage('✅ Успешный вход!')
    else setMessage(data.error || 'Ошибка авторизации')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} />
      <input type="password" placeholder="Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  )
}
