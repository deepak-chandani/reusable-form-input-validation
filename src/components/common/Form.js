import React from 'react';
import Validator from '../../utils/Validator';

class Form extends React.Component {

    state = {
        errors: {}
    };

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValidationSchema() {
        return this.schema;
    }

    validate(){
        const schema = this.getValidationSchema();

        let errors = Validator.validate(this.state.data, schema);

        this.setState({errors : errors ? errors : {}});
        console.log(errors);

        return errors ? false : true;
    }

    validateField(name, value){
        const schema = this.getValidationSchema();

        const fieldSchema = {[name] : schema[name]};

        const data = {[name]: this.state.data[name]};
        let errors = Validator.validate(data, fieldSchema);


        const newErrors = {...this.state.errors};
        errors ? newErrors[name] = errors[name] : delete newErrors[name];
        this.setState({errors: newErrors});

        console.log("onChange", errors);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("form submitted");

        const isValid = this.validate();
        if(isValid){
            this.doSubmit();
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        const data = {...this.state.data};

        data[name] = value;

        this.setState({
            data
        }, () => this.validateField(name, value));
    }

}

export default Form;