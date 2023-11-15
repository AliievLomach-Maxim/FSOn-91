import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const TodoSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(5, 'Too Long!')
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too Short!')
		.max(5, 'Too Long!')
		.required('Required'),
})
const FormikCreateTodo = ({ addTodo }) => {
	return (
		<Formik
			initialValues={{ title: '', description: '', flexRadioDefault: '' }}
			onSubmit={addTodo}
			validationSchema={TodoSchema}
		>
			{(formik) => {
				return (
					<Form>
						<Field name='title' type='text' label='title' />
						<Field name='description' type='text' label='description' />
						<button type='submit'>click</button>
					</Form>
					// <form onSubmit={formik.handleSubmit}>
					// 	<div className='mb-3'>
					// 		<label htmlFor='exampleInputTitle' className='form-label'>
					// 			Todo title
					// 		</label>
					// 		<input
					// 			name='title'
					// 			type='text'
					// 			className='form-control'
					// 			id='exampleInputTitle'
					// 			value={formik.values.title}
					// 			onChange={formik.handleChange}
					// 		/>
					// 		{formik.errors.title && (
					// 			<div className='text-danger'>{formik.errors.title}</div>
					// 		)}
					// 	</div>
					// 	<div className='mb-3'>
					// 		<label htmlFor='exampleInputDescription' className='form-label'>
					// 			Todo Description
					// 		</label>
					// 		<input
					// 			name='description'
					// 			type='text'
					// 			className='form-control'
					// 			id='exampleInputDescription'
					// 			value={formik.values.description}
					// 			onChange={formik.handleChange}
					// 		/>
					// 		{formik.errors.description ? (
					// 			<div className='text-danger'>{formik.errors.description}</div>
					// 		) : null}
					// 	</div>
					// 	<div className='form-check'>
					// 		<input
					// 			className='form-check-input'
					// 			type='radio'
					// 			name='flexRadioDefault'
					// 			id='flexRadioDefault1'
					// 			value='flexRadioDefault1'
					// 			onChange={formik.handleChange}
					// 		/>
					// 		<label className='form-check-label' for='flexRadioDefault1'>
					// 			Default radio
					// 		</label>
					// 	</div>
					// 	<div className='form-check'>
					// 		<input
					// 			className='form-check-input'
					// 			type='radio'
					// 			name='flexRadioDefault'
					// 			id='flexRadioDefault2'
					// 			value='flexRadioDefault2'
					// 			onChange={formik.handleChange}
					// 		/>
					// 		<label className='form-check-label' for='flexRadioDefault2'>
					// 			Default checked radio
					// 		</label>
					// 	</div>
					// 	<button
					// 		type='submit'
					// 		className='btn btn-primary mb-5'
					// 		disabled={formik.errors.title || formik.errors.description}
					// 	>
					// 		Create
					// 	</button>
					// </form>
				)
			}}
		</Formik>
	)
}

export default FormikCreateTodo
