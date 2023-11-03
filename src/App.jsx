import Card from './components/Card'
import GetArrElem from './components/GetArrElem'
import Wrapper from './components/Wrapper'

const App = () => {
	// return GetArrElem({ age: 20, name: 'Alex' })
	return (
		<div>
			<Card />
			<p>qwrety</p>
			<h2>qwery</h2>
			<GetArrElem age='20' name='Alex' />
			<Wrapper>QQQQQ</Wrapper>
		</div>
	)
}

export default App
