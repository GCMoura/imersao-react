import React from 'react'
import { Div } from './style'

function FormField({ placeholder, type, name, value, onChange }) {
    return (
        <Div>
            <label>
                <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                />
            </label>
        </Div> 
    )
}

export default FormField