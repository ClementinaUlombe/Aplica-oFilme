import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import "./home.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setTopMovies(data.results);
        } catch (error) {
            console.error("Erro ao buscar filmes: ", error);
        }
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        console.log("URL para buscar os melhores filmes:", topRatedUrl);
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Filmes Imperdíveis:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;
