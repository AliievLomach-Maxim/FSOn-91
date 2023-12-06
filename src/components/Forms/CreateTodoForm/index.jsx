import { useState } from 'react'

import React from 'react'

const CreateTodoForm = ({ addTodo }) => {
	const [value, setValue] = useState({
		title: '',
		description: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(value)
	}

	const handleChange = ({ target: { value, name } }) => {
		setValue((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputTitle' className='form-label'>
					Todo title
				</label>
				<input
					name='title'
					type='text'
					className='form-control'
					id='exampleInputTitle'
					value={value.title}
					onChange={handleChange}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputDescription' className='form-label'>
					Todo Description
				</label>
				<input
					name='description'
					type='text'
					className='form-control'
					id='exampleInputDescription'
					value={value.description}
					onChange={handleChange}
				/>
			</div>
			<button type='submit' className='btn btn-primary mb-5'>
				Create
			</button>
		</form>
	)
}

export default CreateTodoForm

// class CreateTodoForm extends Component {
// 	state = {
// 		title: '',
// 		description: '',
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		this.props.addTodo(this.state)
// 	}

// 	handleChange = ({ target: { value, name } }) => {
// 		this.setState({ [name]: value })
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputTitle' className='form-label'>
// 						Todo title
// 					</label>
// 					<input
// 						name='title'
// 						type='text'
// 						className='form-control'
// 						id='exampleInputTitle'
// 						value={this.state.value}
// 						onChange={this.handleChange}
// 					/>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputDescription' className='form-label'>
// 						Todo Description
// 					</label>
// 					<input
// 						name='description'
// 						type='text'
// 						className='form-control'
// 						id='exampleInputDescription'
// 						// value={}
// 						onChange={this.handleChange}
// 					/>
// 				</div>
// 				<button type='submit' className='btn btn-primary mb-5'>
// 					Create
// 				</button>
// 			</form>
// 		)
// 	}
// }

// export default CreateTodoForm
