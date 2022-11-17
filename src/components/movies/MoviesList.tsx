import data from "../../list.json"
import Movie from "./Movie";

interface MovieInterface {
    title: string;
    imageLink: string;
}

export default function MoviesList() {
    const moviesList = data.list;
    return (
        <>
            <div className="title">
                <h2>{data.name}</h2>
            </div>
            {Object.keys(moviesList).map((key, idx) => (
                <div key={idx}>
                    <h3>{key}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                        {moviesList[key].map((movie: MovieInterface, idx: number) => <Movie movie={movie} key={idx} />)}
                    </div>
                </div>
            ))}
        </>
    )
}
