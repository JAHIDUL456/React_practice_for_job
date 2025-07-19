import React, { useEffect, useState } from 'react';
import Header_section from './Header_section'; // 👈 import Header
import star from '/star.svg';
const Movie_list = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        setQuery(search); // trigger fetch
    };

    const API_BASE_URL = "https://api.themoviedb.org/3";
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    const fetchMovies = async (searchQuery = '') => {
        try {
            setLoading(true);
            const endpoint = searchQuery
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(searchQuery)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.response === 'False') {
                setErrorMsg(data.Error);
                setMovie([]);
                return;
            }

            setMovie(data.results);
            setErrorMsg("");
        } catch (error) {
            setErrorMsg("Something went wrong, please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(query);
    }, [query]);

    return (
        <div className="bg-gray-900 min-h-screen">
            {/* Hero and Search Section */}
            <Header_section
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />

            {/* Movie Grid */}
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-2xl text-white">Loading...</h1>
                </div>
            ) : errorMsg ? (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-2xl text-red-500">{errorMsg}</h1>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
                    {movie.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.title}
                                className="w-full h-[300px] object-cover rounded-md"
                            />
                            <h2 className="text-white mt-2 text-center font-semibold text-lg">
                                {item.title}
                            </h2>
                            <div className="flex items-center mt-2">
                                <img src={star} alt="" />
                                <span className="text-yellow-400 ml-1">
                                    {item.vote_average}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Movie_list;
