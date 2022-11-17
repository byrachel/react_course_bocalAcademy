
interface Props {
  movie: {
    title: string;
    imageLink: string;
  }
}

export default function Movie({movie}: Props) {
  return (
    <div>
        <img src={movie.imageLink} height="150" />
        <p>{movie.title}</p>
    </div>
  )
}
