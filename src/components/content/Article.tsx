import './ContentStyle.css'

interface Props {
  book: {
    title: string,
    date: number,
    author: string,
    content: string,
    url: string
  }
}

export default function Article({ book }: Props) {
  return (
    <div className="card">
      <div className="columns">
        <img src={book.url} height="150" />
        <div className="book-content">
          <h2>{book.title}</h2>
          <p><b>{book.date} - {book.author}</b></p>
          <p>{book.content}</p>
        </div>
      </div>
    </div>
  )
}
