import { FaTrashCan } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
	const dispatch = useDispatch()
	const books = useSelector(state => state.books)
	const handleDelete = id => {
		dispatch(deleteBook(id))
	}
	return (
		<div className='app-block book-list'>
			<h2>BookList</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{books.map((book, i) => (
						<li key={book.id}>
							<div className='book-info'>
								{++i}. {book.title} by <strong>{book.author}</strong>
							</div>
							<div
								onClick={() => handleDelete(book.id)}
								className='book-actions'
							>
								<FaTrashCan />
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default BookList
