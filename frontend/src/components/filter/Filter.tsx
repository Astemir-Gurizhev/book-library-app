import { useDispatch } from 'react-redux'
import { setTitleFilter } from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
	const dispatch = useDispatch()
	const handleTitleFilterChange = e => {
		dispatch(setTitleFilter(e.target.value))
	}

	return (
		<div className='app-block filter'>
			<div className='filter-group'>
				<input
					onChange={handleTitleFilterChange}
					type='text'
					placeholder='Filter by title...'
				/>
			</div>
		</div>
	)
}

export default Filter
