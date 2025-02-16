import { BaseInput } from './components/ui/BaseInput';

export default function App() {
	return (
		<main className='section-one'>
			<div className='container'>
				<h1>O2 Input Component</h1>
				<form action='#' method='POST' name='username'>
					<BaseInput
						label='Input'
						type='text'
						name='username'
						ariaLabel='username'
						placeholder='Placeholder'
						isOptional
					/>
				</form>
			</div>
		</main>
	);
}
