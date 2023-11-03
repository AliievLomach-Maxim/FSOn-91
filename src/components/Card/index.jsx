import { NewContainer, Title } from './Card.styled'
import { Container } from './Container'

const Card = () => {
	return (
		<NewContainer color={'yellow'}>
			<Title>Header</Title>
			<h3>description</h3>
			<hr />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
				repellendus voluptates! Voluptatem eum quod vel.
			</p>
		</NewContainer>
	)
}

export default Card
// ctrl/command=>C
// cut - c+x
// paste - c+v
// copy - c+c
// c+a => Виділите все

// рухати рядок вгору/вниз
// option(alt) + arrow
// c+arrow
// c+shift+arrow
// option(alt)+shift+arrow
// option(alt)+shift arrow down or up
// c+z
