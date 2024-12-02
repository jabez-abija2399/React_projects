import React from 'react'

const Input = ({ name, label, value, onChange }) => {

    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                type="text"
                className="form-control"
            />
        </div>
     );
}

export default Input;