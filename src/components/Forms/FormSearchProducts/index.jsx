import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FormSearchProducts = ({ submit }) => {
	const [query, setQuery] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()

	const handleChange = ({ target: { value } }) => {
		// setSearchParams({ search: value })
		if (!value) setSearchParams({})
		setQuery(value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!query) return setSearchParams({})
		setSearchParams({ search: query })
		submit({ query: searchParams.get('search') })
	}

	// useEffect(() => {
	// 	if (!query) setSearchParams({})
	// }, [query, setSearchParams])

	useEffect(() => {
		const value = searchParams.get('search')
		if (value) setQuery(value)
	}, [searchParams])

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputTitle' className='form-label'>
					Search
				</label>
				<input
					name='query'
					type='text'
					className='form-control'
					id='exampleInputTitle'
					value={query}
					onChange={handleChange}
				/>
			</div>
			<button type='submit' className='btn btn-primary mb-5'>
				Search
			</button>
		</form>
	)
}

export default FormSearchProducts
