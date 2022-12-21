import './App.css'
import { useQuery } from 'react-query'
import { useState } from 'react';

function App() {
    const [random, setRandom] = useState(Math.floor( Math.random() * 9 ) + 1);
    const changeRequest = () => {
        setRandom(Math.floor( Math.random() * 9 ) + 1);
        refetch();
    }
    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/todos/' + random).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: '
  return (
    <div className="App">
        <div>
            <h1>👀 {data.title}</h1>
            <h2>✨ {data.id}</h2>
            <button onClick={changeRequest}>Change the request</button>
        </div>
    </div>
  )
}

export default App
