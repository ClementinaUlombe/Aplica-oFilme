import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import "./Movie.css";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieURL);
    }, [id]);

    return (
        <div className="movie-page">
            {movie && (
                <div className="movie-details">
                    <div className="movie-image">
                        <MovieCard movie={movie} showLink={false} />
                    </div>
                    <div className="movie-info">
                        <p className="tagline">{movie.tagline}</p>
                        <div className="info">
                            <h3>
                                <BsWallet2 /> Orçamento:
                            </h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>

                        <div className="info">
                            <h3>
                                <BsGraphUp /> Receita:
                            </h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>

                        <div className=" info ">
                            <h3>
                                <BsHourglassSplit /> Duração:
                            </h3>
                            <p>{movie.runtime} minutos</p>
                        </div>

                        <div className="description">
                            <h3>
                                <BsFillFileEarmarkTextFill /> Descrição:
                            </h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Movie;
