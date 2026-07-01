import { movies } from './data' 
import MovieCard from './components/MovieCard' 
import './App.css'

function App() {
  return (
    <div className="app">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} /> 
      ))}
    </div>
  )
}
export default App

