/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    return data;
  };

  return (
    <div>
      <h1>Form contact</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          ref={register({ required: true, minLength: 3 })}
        />

        <label>Email</label>
        <input
          type='text'
          name='email'
          ref={register({
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />

        <label>Message</label>
        <textarea
          type='text'
          name='message'
          ref={register({ required: true, minLength: 2 })}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Contact;
