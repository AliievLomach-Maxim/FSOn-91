import data from '../../data.json'

const GetArrElem = (props) => {
	return data.map((el) => (
		<div key={el.id}>
			<h3>{el.title}</h3>
			<hr />
			<p>{el.body}</p>
		</div>
	))
}

export default GetArrElem
