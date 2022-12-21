import './App.css'
import { useQuery } from 'react-query'

function App() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: '
  return (
    <div className="App">
        <div>
            <strong>👀 {data.title}</strong>{' '}
            <strong>✨ {data.id}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    </div>
  )
}

export default App
