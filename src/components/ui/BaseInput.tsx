import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	ariaLabel: string;
	isOptional?: boolean;
	errorState: FieldError | undefined;
};

export const BaseInput: React.FC<Props> = ({
	label,
	type,
	name,
	placeholder,
	ariaLabel,
	isOptional = false,
	errorState,
	...rest
}) => {
	const errorClass = errorState ? 'input-error' : '';

	return (
		<div className='base-input-wrapper'>
			<div className='base-input-label-wrapper'>
				<label htmlFor={name} className='base-input-label'>
					{label}
				</label>
				{isOptional && (
					<label htmlFor={name} className='base-input-label optional-label'>
						Optional
					</label>
				)}
			</div>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				aria-label={ariaLabel}
				className={`base-input ${errorClass}`}
				required={!isOptional}
				{...rest}
			/>
		</div>
	);
};
