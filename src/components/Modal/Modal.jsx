import { useEffect } from 'react'

import React from 'react'

const Modal = ({ children, close }) => {
	const backDropClose = (e) => {
		e.target === e.currentTarget && this.props.close()
	}
	const handleEsc = (e) => {
		e.code === 'Escape' && this.props.close()
		console.log(e)
		// document.removeEventListener('keydown', this.handleEsc)
	}

	useEffect(() => {
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', this.handleEsc)
	}, [])

	// componentDidMount() {
	// 	document.addEventListener('keydown', this.handleEsc)
	// }

	// componentWillUnmount() {
	// 	document.removeEventListener('keydown', this.handleEsc)
	// }
	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
			onClick={backDropClose}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={close}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

// class Modal extends Component {
// 	backDropClose = (e) => {
// 		e.target === e.currentTarget && this.props.close()
// 	}
// 	handleEsc = (e) => {
// 		e.code === 'Escape' && this.props.close()
// 		console.log(e)
// 		// document.removeEventListener('keydown', this.handleEsc)
// 	}
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handleEsc)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleEsc)
// 	}

// 	render() {
// 		const { children, close } = this.props
// 		return (
// 			<div
// 				className='modal fade show'
// 				style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 				onClick={this.backDropClose}
// 			>
// 				<div className='modal-dialog'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title'> Modal</h5>
// 							<button
// 								type='button'
// 								className='btn-close'
// 								aria-label='Close'
// 								onClick={close}
// 							></button>
// 						</div>
// 						<div className='modal-body'>{children}</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Modal
