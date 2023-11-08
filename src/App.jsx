import { Component } from 'react'
import Counter from './components/Counter/Counter'
import Modal from './components/Modal/Modal'

class App extends Component {
	state = {
		isShowModal: false,
	}

	handleOpen = () => {
		this.setState({
			isShowModal: true,
		})
	}

	handleClose = () => {
		this.setState({
			isShowModal: false,
		})
	}

	render() {
		return (
			<>
				<button
					className='btn btn-success mx-auto my-5'
					onClick={this.handleOpen}
				>
					Open Modal
				</button>
				<div>
					<Counter />
					{this.state.isShowModal && (
						<Modal close={this.handleClose}>Some body</Modal>
					)}
				</div>
			</>
		)
	}
}

export default App

// const App = () => {
// 	return (
// 		<div>
// 			<Counter />
// 			<Modal>Some body</Modal>
// 		</div>
// 	)
// }
// export default App
