
import React from 'react'
import PropTypes from 'prop-types'
import { Input, FormFieldRapper, Label, LabelText } from './style'

function FormField({ label, type, name, value, onChange }) {

	const tag = type === 'textarea'? 'textarea' : 'input'

	const hasValue = Boolean(value.length)

    return (
			<FormFieldRapper>
					<Label>
							<Input 
							as={tag}
							type={type}
							name={name}
							value={value}
							hasValue={hasValue}
							onChange={onChange}
							/>
						<LabelText>
							{label}:
						</LabelText>
					</Label>
			</FormFieldRapper> 
    )
}

FormField.defaultProps = {
	type: 'text',
	value: '',
	onChange: () => {},
}

FormField.propTypes = {
	placeholder: PropTypes.string.isRequired, 
	type: PropTypes.string, 
	name: PropTypes.string.isRequired, 
	value: PropTypes.string, 
	onChange: PropTypes.func,
}

export default FormField