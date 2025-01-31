import './App.css'
import BookForm from './components/book-form/BookForm'
import BookList from './components/book-list/BookList'
import Filter from './components/filter/Filter'

function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<h1>Book Library App</h1>
			</header>
			<main className='app-main'>
				<div className='app-left-column'>
					<BookForm />
				</div>
				<div className='app-right-column'>
					<Filter />
					<BookList />
				</div>
			</main>
		</div>
	)
}

export default App
