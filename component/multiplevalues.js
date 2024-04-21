import React from "react";

const Multivalues = () => {
 
    const [people, setPeople]= React.useState({
        name :'',
        email:'',
        phone:'',
    });

    const handleOnChange=(e)=>
    {
        setPeople({...people,[e.target.name]: e.target.value})
    }
    const handleSubmitForm=(e)=>
    {
        e.preventDefault();
        console.log(people.name , people.email, people.phone);
       
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

          name='name'

          value={people.name}

          onChange={handleOnChange}

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

          name='email'

          value= {people.email}

        onChange={handleOnChange}

        />

      </div>

      <div className='form-row'>

        <label htmlFor='phone' className='form-label'>

          Phone No.

        </label>

        <input

          type='number'

          className='form-input'

          id='phone'

          name='phone'

          value= {people.phone }

        onChange={handleOnChange}

        />

      </div>

      <button type='submit' className='btn btn-block'>

        submit

      </button>

    </form>

  );

};

export default Multivalues;