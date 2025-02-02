import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { FaTrashCan } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { selectTitleFilter } from '../../redux/slices/filterSlice'
import './BookList.css'

const BookList = () => {
	const dispatch = useDispatch()
	const books = useSelector(state => state.books)
	const titleFilter = useSelector(selectTitleFilter)
	const handleDelete = id => {
		dispatch(deleteBook(id))
	}
	const handleToggleFavorite = id => {
		dispatch(toggleFavorite(id))
	}
	const filteredBooks = books.filter(book => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase())
		return matchesTitle
	})
	return (
		<div className='app-block book-list'>
			<h2>BookList</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => (
						<li key={book.id}>
							<div className='book-info'>
								{++i}. {book.title} by <strong>{book.author}</strong>
							</div>
							<div className='book-actions'>
								<span onClick={() => handleToggleFavorite(book.id)}>
									{book.isFavorite ? (
										<BsBookmarkStarFill className='star-icon' />
									) : (
										<BsBookmarkStar className='star-icon' />
									)}
								</span>

								<FaTrashCan
									onClick={() => handleDelete(book.id)}
									className='trash-icon'
								/>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default BookList
