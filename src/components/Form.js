import React from "react";

const Form = () =>{

    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [submitted, setSubmitted] = React.useState(false);

    const [valid, setValid] = React.useState(false);

    const firstNameOnChange = (e) =>{
        setForm({
            ...form,
            firstName: e.target.value
        });
    };

    const lastNameOnChange = (e) =>{
        setForm({
            ...form,
            lastName: e.target.value
        });
    }; 

    const emailOnChange = (e) => {
        setForm({
            ...form,
            email: e.target.value
        });
    };

    const registerFunction = (e) =>{
        e.preventDefault();

        if(form.firstName && form.lastName && form.email){
            setValid(true);
        }

        setSubmitted(true);
    };

    return(

        <div className="overlay-form">

            <form onSubmit={registerFunction}>

                <input 
                    value={form.firstName}
                    type="text" 
                    placeholder="First Name"
                    name="firstName"
                    onChange={firstNameOnChange}
                />
                {submitted && form.firstName === `` ? <p className="error">Please enter your first name!</p> : null}

                <input 
                    value={form.lastName}
                    type="text" 
                    placeholder="Last Name"
                    name="lastName"
                    onChange={lastNameOnChange}
                />
                {submitted && form.lastName === `` ? <p className="error">Please enter your last name!</p> : null}

                <input 
                    value={form.email}
                    type="text" 
                    placeholder="Email"
                    name="email"
                    onChange={emailOnChange}
                    />
                {submitted && form.email === `` ? <p className="error">Please enter your email address!</p> : null}

                <button className="button-register">Register</button>

                {submitted && valid ? <p className="success-message">You have been registered!</p> : null}

            </form>

        </div>

    );
};

export default Form;