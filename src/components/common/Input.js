import React from 'react';

const Input = ({ type ='text' , name, label, value, onChange , errors, ...rest}) => {
    return (
        <div className="control-group">
            <label className="control-label"  htmlFor={name}>{label}</label>
            <div className="controls">
                <input type={type} id={name} name={name} placeholder="" className="input-xlarge" value={value} onChange={onChange} autoComplete="off" {...rest} />
                {errors && <p className="help-block">{errors[0]}</p>}
            </div>
        </div>
    );
}

export default Input;
