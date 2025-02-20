import { v4 as uuidv4 } from 'uuid'
interface Book {
	title: string;
	author: string;
	year: number;
}

interface BookWithId extends Book {
	source: string;
	isFavorite: boolean;
	id: string;
}
const createBookWithId = (book: Book, source: string): BookWithId => {
	return {
		...book,
		source,
		isFavorite: false,
		id: uuidv4(),
	}
}

export default createBookWithId
