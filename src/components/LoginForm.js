import React from 'react';
import Joi from 'joi-browser';

import Input from './common/Input';
import Form from './common/Form';

class LoginForm extends Form {

    state = {
        data: {
            email: '',
            password: ''
        },
        errors:{}
    }

    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    };

    doSubmit(){
        console.log("[doSubmit] LoginForm");
    }

    render(){

        const {email, password} = this.state.data;
        const {errors} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <Input name="email" value={email} label="Email" onChange={this.handleChange} errors={errors.email} placeholder="Enter email"  />
                <Input type="password" name="password" value={password} label="Password" onChange={this.handleChange} errors={errors.password}  />

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        )
    }
}

export default LoginForm;