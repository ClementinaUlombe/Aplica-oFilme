import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./Search.css"; 
import "./media_query.css"; 

const apiKey = "96322c26eca3c457263bb90f67eb5206"; 
const searchURL = "https://api.themoviedb.org/3/search/movie";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const fetchSearchedMovies = async () => {
        try {
            const response = await fetch(`${searchURL}?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar filmes.");
            }
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    };

    useEffect(() => {
        if (query) {
            fetchSearchedMovies();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">
                Resultados Para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Search;
