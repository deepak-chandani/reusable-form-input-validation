import React from 'react';
import Joi from 'joi-browser';
import Validator from '../utils/Validator';
import Input from './common/Input';
import Form from './common/Form';

class RegisterForm extends Form {

    state = {
        data: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        confirmPassword: Joi.any().valid(Joi.ref('password'))
    };

    constructor(props){
        super(props);
    }

    doSubmit(e){
        console.log("doSubmit");
    }

    render(){
        const {username, email, password, confirmPassword } = this.state.data;
        const {errors} = this.state;

        return (
            <form className="form-horizontal" action='' onSubmit={this.handleSubmit}>
                <fieldset>
                    <div id="legend">
                        <legend className="">Register</legend>
                    </div>
                    <Input name="username" label="Username" value={username} onChange={this.handleChange} errors={errors.username} />
                    <Input name="email" label="E-mail" value={email} onChange={this.handleChange} errors={errors.email} />
                    <Input name="password" label="Password" value={password} onChange={this.handleChange} errors={errors.password} type="password"  />
                    <Input name="password_confirm" label="Password (Confirm)" value={confirmPassword} onChange={this.handleChange} errors={null} type="password"  />

                    <div className="control-group">
                        <div className="controls">
                            <button type="submit" className="btn btn-success">Register</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default RegisterForm;
