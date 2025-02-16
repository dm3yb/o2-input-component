import type { HTMLInputTypeAttribute } from 'react';

type Props = {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	placeholder: string;
	ariaLabel: string;
	isOptional?: boolean;
};

export const BaseInput: React.FC<Props> = ({
	label,
	type,
	name,
	placeholder,
	ariaLabel,
	isOptional = false,
}) => {
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
				className='base-input'
			/>
		</div>
	);
};
