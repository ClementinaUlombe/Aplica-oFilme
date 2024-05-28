import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const apiKey = "96322c26eca3c457263bb90f67eb5206"; // Sua chave de API do TMDb
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
    }, [query]);

    return (
        <div>
            {/* Exibir os resultados da pesquisa aqui */}
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Search;
