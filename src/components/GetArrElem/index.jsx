import data from '../../data.json'
import './index.css'
import CSS from './index.module.css'

const GetArrElem = (props) => {
	// const div = document.querySelector('div')
	// div.style.borderBlockEndColor = 'white'

	// div.className = 'qrwety'

	// <div style='border-block-end-color:white'>
	// const obj = {
	// 	borderBlockEndColor: 'white',
	// 	textAlign: 'center',
	// }

	const getClass = (id) => {
		return id % 2 === 0 ? CSS.link : `${CSS.link} ${CSS.active}`
	}
	return data.map((el) => (
		<div
			// className='qwerty_1'
			// className={el.id % 2 === 0 ? CSS.qwerty_1 : CSS.qwerty_2}
			id='123'
			key={el.id}
			// style={{
			// 	borderBlockEndColor: 'white',
			// 	textAlign: 'center',
			// }}
		>
			{/* <h3 className={`${CSS.link} ${el.id % 2 === 0 && CSS.active}`}> */}
			<h3 className={getClass(el.id)}>{el.title}</h3>
			<hr />
			<p>{el.body}</p>
			{/* {el.id % 2 === 0 ? <button>click</button> : <button>double click</button>} */}
		</div>
	))
}

export default GetArrElem
