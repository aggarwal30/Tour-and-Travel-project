import React from "react";

const ControlledInputs = () => {
 
    const [name, setName]= React.useState('');
    const [email, setEmail]= React.useState('');

    const handleSubmitForm=(e)=>
    {
        e.preventDefault();
        console.log(name);
        console.log(email);
    }
 return (

    <form className='form' onSubmit={handleSubmitForm} >

      <h4>User Form</h4>

      <div className='form-row'>

        <label htmlFor='name' className='form-label'>

          name

        </label>

        <input

          type='text'

          className='form-input'

          id='name'

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />

      </div>

      <div className='form-row'>

        <label htmlFor='email' className='form-label'>

          Email

        </label>

        <input

          type='email'

          className='form-input'

          id='email'

          value= {email}

        onChange={(e)=>setEmail(e.target.value)}

        />

      </div>

      <button type='submit' className='btn btn-block'>

        submit

      </button>

    </form>

  );

};

export default ControlledInputs;