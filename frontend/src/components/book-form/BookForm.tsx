import { FormEventHandler, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import booksData from '../../data/books.json'
import {
	addBook,
	fetchBook,
	selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlice'
import createBookWithId from '../../utils/createBookWithId'
import './BookForm.css'

const BookForm = () => {
	const [title, setTitle] = useState<string>('')
	const [author, setAuthor] = useState<string>('')
	const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
	const dispatch = useDispatch()

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length)
		const randomBook = booksData[randomIndex]
		dispatch(addBook(createBookWithId(randomBook, 'Random')))
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		if (title && author) {
			dispatch(addBook(createBookWithId({ title, author }, 'Manual')))
			setTitle('')
			setAuthor('')
		} else {
			dispatch(setError('You must fill title and author!'))
		}
	}

	const handleAddRandomBookViaAPI = () => {
		dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
	}

	return (
		<div className='app-block book-form'>
			<h2>BookForm</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title'>Title: </label>
					<input
						type='text'
						id='title'
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='author'>Author: </label>
					<input
						type='text'
						id='author'
						value={author}
						onChange={e => setAuthor(e.target.value)}
					/>
				</div>
				<button type='submit'>Add Book</button>
				<button type='button' onClick={handleAddRandomBook}>
					Add Random
				</button>
				<button
					type='button'
					onClick={handleAddRandomBookViaAPI}
					disabled={isLoadingViaAPI}
				>
					{isLoadingViaAPI ? (
						<>
							<span>Loading Book...</span>
							<FaSpinner className='spinner' />
						</>
					) : (
						'Add Random via API'
					)}
				</button>
			</form>
		</div>
	)
}

export default BookForm
