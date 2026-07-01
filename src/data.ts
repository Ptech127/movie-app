export type Movie = {
  title: string;
  year: number;
  director: string;
  duration: string;
  genres: string[];
  description: string;
  image: string;
  poster: string;
}

export const movies: Movie[] = [
  {
    title: "Bright",
    year: 2017,
    director: "David Ayer",
    duration: "117 min",
    genres: ["Action", "Crime", "Fantasy"],
    description: "A human cop is forced to work with an Orc to find a weapon.",
    image: "https://th.bing.com/th/id/OSK.OA9yxxMfFnKZK1Levky5JC15KhlGFWJrpokbrM8szf4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    poster: "https://www.slashfilm.com/wp/wp-content/images/bright-2-director.jpg"
  },
  {
    title: "Tomb Raider",
    year: 2018,
    director: "Roar Uthaug", 
    duration: "125 min",
    genres: ["Action", "Fantasy"],
    description: "Lara Croft must push herself beyond her limits on a dangerous island.",
    image: "https://assetsio.gnwcdn.com/-1505771779716.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    poster: "https://tse3.mm.bing.net/th/id/OIP.bqJZDXNVTiH4E__I9ErCcgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
]
