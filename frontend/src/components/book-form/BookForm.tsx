import axios from 'axios'
import { FormEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import booksData from '../../data/books.json'
import { addBook } from '../../redux/slices/booksSlice'
import createBookWithId from '../../utils/createBookWithId'
import './BookForm.css'

const BookForm = () => {
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')

	const dispatch = useDispatch()

	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length)
		const randomBook = booksData[randomIndex]
		dispatch(addBook(createBookWithId(randomBook)))
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		if (title && author) {
			dispatch(addBook(createBookWithId({ title, author })))

			setTitle('')
			setAuthor('')
		}
	}

	const handleAddRandomBookViaAPI = async () => {
		try {
			const res = await axios.get('http://localhost:5000/random-book')
			if (res?.data?.title && res?.data?.author) {
				dispatch(addBook(createBookWithId(res.data)))
			}
		} catch (error) {
			console.log('error:', error)
		}
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
				<button type='button' onClick={handleAddRandomBookViaAPI}>
					Add Random via API
				</button>
			</form>
		</div>
	)
}

export default BookForm
