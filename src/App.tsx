import { BaseInput } from './components/ui/BaseInput';

export default function App() {
	return (
		<main className='input-wrapper'>
			<h1>O2 Input Component</h1>
			<form action='#' method='POST' name='username'>
				<BaseInput />
			</form>
		</main>
	);
}
