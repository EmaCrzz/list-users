import { useEffect, useState } from 'react'

export default function useListTasks ({ id }) {
  const [tasks, setTasks] = useState([0, 1, 2, 3, 4, 5, 6])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then(res => res.json())
      .then(dataTasks => {
        setTasks(dataTasks)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }, [id])
  return {
    tasks,
    loading,
    error
  }
}
