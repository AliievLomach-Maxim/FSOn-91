import { Component } from 'react'
import { PulseButton } from './Styled.styled'

class Counter extends Component {
	state = {
		counter: 0,
	}

	handleClick = (isIncrement) => {
		this.setState((prevState) => ({
			counter: isIncrement ? prevState.counter + 1 : prevState.counter - 1,
		}))
	}

	render() {
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				{/* ANIMATION BUTTON */}
				<PulseButton $animationLength={'0.3s'}>qwrety</PulseButton>
				{/* ANIMATION BUTTON */}
				<div
					className='card bg-dark text-white rounded-4'
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p className='card-text  text-center' style={{ fontSize: '80px' }}>
							{this.state.counter}
						</p>
						<div className='d-flex justify-content-center px-5'>
							<button
								className='btn btn-outline-success me-5 px-4 rounded-4'
								onClick={() => this.handleClick(true)}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button>
							<button
								className='btn  btn-outline-danger ms-5 px-4 rounded-4'
								onClick={() => this.handleClick()}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// class Counter extends Component {
// 	state = {
// 		counter: 0,
// 	}

// 	handleIncrement = () =>
// 		this.setState((prevState) => ({
// 			counter: prevState.counter + 1,
// 		}))

// 	handleDecrement = () => {
// 		this.setState((prevState) => {
// 			return {
// 				counter: prevState.counter - 1,
// 			}
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className='position-absolute top-50 start-50 translate-middle'>
// 				<div
// 					className='card bg-dark text-white rounded-4'
// 					style={{ width: '600px' }}
// 				>
// 					<div className='card-body'>
// 						<h5 className='card-title text-center fs-1'>Counter</h5>
// 						<p className='card-text  text-center' style={{ fontSize: '80px' }}>
// 							{this.state.counter}
// 						</p>
// 						<div className='d-flex justify-content-center px-5'>
// 							<button
// 								className='btn btn-outline-success me-5 px-4 rounded-4'
// 								onClick={this.handleIncrement}
// 							>
// 								<i className='bi bi-plus-circle fs-1'></i>
// 							</button>
// 							<button
// 								className='btn  btn-outline-danger ms-5 px-4 rounded-4'
// 								onClick={this.handleDecrement}
// 							>
// 								<i className='bi bi-dash-circle fs-1'></i>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// const Counter = () => {
// 	let counter = 0
// 	const handleClick = (e, id) => {
// 		counter++
// 		console.log('counter :>> ', counter)
// 	}
// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white rounded-4'
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p className='card-text  text-center' style={{ fontSize: '80px' }}>
// 						{counter}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							className='btn btn-outline-success me-5 px-4 rounded-4'
// 							onClick={(e) => handleClick(e, 'id')}
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5 px-4 rounded-4'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
export default Counter

// document.addEventListener('click', () => {})
// document.addEventListener('click', handleCLick)

// function fn() {
// 	let number = 10

// 	console.log(number);
// }

// fn()
