import type { Movie } from '../data'
import '../App.css'

type Props = { movie: Movie; }

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <div className="movie-left">
        <img src={movie.poster} alt={movie.title} className="poster" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p className="sub">{movie.year}, {movie.director}</p>  
          <p className="sub">{movie.duration} {movie.genres.join(', ')}</p> 
          <p className="desc">{movie.description}</p> 
        </div>
      </div>
      <img src={movie.image} alt={movie.title} className="banner" />
    </div>
  )
}
export default MovieCard
