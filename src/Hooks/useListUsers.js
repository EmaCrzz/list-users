import { useState, useEffect } from 'react'

export default function useListUsers ({ id } = { id: '' }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([0, 1, 2, 3])
  const [userDetails, setUserDetails] = useState({})
  const [location, setLocation] = useState('')
  const [company, setCompany] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(dataUser => {
        setUsers(dataUser)
        id && setLocation(`${dataUser.address.suite} ${dataUser.address.street}, ${dataUser.address.city}`)
        id && setCompany(dataUser.company.name)
        id && setUserDetails(dataUser)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
  }, [id])
  // [] =>            el useEffect se va a ejecutar solo una vez cuando el componente se está montando
  // [Dependencia] => el useEffect se va a ejecutar cada vez que "Dependencia" cambie (en este caso la dependencia es userId)

  return {
    loading,
    error,
    users,
    userDetails,
    location,
    company
  }
}
