import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { BaseInput } from './components/ui/BaseInput';
import { baseInputValidationSchema } from './constants/validation';
import type { BaseInputValidationSchemaType } from './types/validation';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<BaseInputValidationSchemaType>({
		resolver: zodResolver(baseInputValidationSchema),
	});

	const onSubmit = useCallback(() => {
		console.log('Submitted!');
	}, []);

	return (
		<main className='section-one'>
			<div className='container'>
				<h1>O2 Input Component</h1>
				<form
					action='#'
					method='POST'
					name='formName'
					className='form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='input-group'>
						<BaseInput
							label='Username' // `Input` from figma design
							type='text'
							ariaLabel='username'
							placeholder='Placeholder'
							errorState={errors?.username}
							{...register('username')}
						/>
						{errors?.username && (
							<span className='validation-error-message'>{errors.username.message}</span>
						)}
					</div>
					<button type='submit' className='button'>
						Submit
					</button>
				</form>
			</div>
		</main>
	);
}
