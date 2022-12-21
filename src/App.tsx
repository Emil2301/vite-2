import './App.css'
import { useQuery } from 'react-query'
import { useState } from 'react';

function App() {
    const [random, setRandom] = useState(Math.floor( Math.random() * 9 ) + 1);
    const changeRequest = () => {
        setRandom(Math.floor( Math.random() * 99 ) + 1);
        refetch();
    }
    const { isLoading, error, data, refetch } = useQuery<boolean, Error, any>('repoData', () =>
        fetch('https://jsonplaceholder.typicode.com/todos/' + random).then(res =>
            res.json()
        )
    )
  return (
    <div className="App">
        {!isLoading && !error && <div>
            <h1>👀 {data.title}</h1>
            <h2>✨ {data.id}</h2>
            <button onClick={changeRequest}>Change the request</button>
        </div>}
        {isLoading && !error && <div>
            <h1>👀 'Loading...'</h1>
        </div>}
        {!isLoading && error && <div>
            <h1>👀 'An error has occurred: '</h1>
        </div>}
    </div>
  )
}

export default App
