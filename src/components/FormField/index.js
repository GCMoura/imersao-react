import React from 'react'
import PropTypes from 'prop-types'
import { Input, FormFieldRapper, Label, LabelText } from './style'

function FormField({ label, type, name, value, onChange, suggestions }) {
	
	const fieldId = `id_${name}`

	const tag = type === 'textarea'? 'textarea' : 'input'

	const hasValue = Boolean(value.length)
	const hasSuggestions = Boolean(suggestions.length);

    return (
			<FormFieldRapper>
					<Label
						htmlFor={fieldId}
					>				
						<Input 
						as={tag}
						id={fieldId}
						type={type}
						value={value}
						name={name}
						hasValue={hasValue}
						onChange={onChange}
						autoComplete={hasSuggestions ? 'off' : 'on'}
						list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
						/>
						<LabelText>
							{label}:
						</LabelText>
						<datalist id={`suggestionFor_${fieldId}`}>
						{
							hasSuggestions && (
								<datalist id={`suggestionFor_${fieldId}`}>
									{
									suggestions.map((suggestion) => (
										<option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
											{suggestion}
										</option>
									))
								}
								</datalist>
							)
						}
						</datalist>
					</Label>
			</FormFieldRapper> 
    )
}

FormField.defaultProps = {
	type: 'text',
	value: '',
	onChange: () => {},
	suggestions: [],
}

FormField.propTypes = {
	label: PropTypes.string.isRequired, 
	type: PropTypes.string, 
	name: PropTypes.string.isRequired, 
	value: PropTypes.string, 
	onChange: PropTypes.func,
	suggestions: PropTypes.arrayOf(PropTypes.string)
}

export default FormField