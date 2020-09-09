/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

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
          ref={register({ required: true, minLength: 3, maxLength: 80 })}
        />
        {errors.name?.type === 'required' && <p>This field is required</p>}
        {errors.name?.type === 'minLength' && (
          <p>This field required min length of 3</p>
        )}
        {errors.name?.type === 'maxLength' && (
          <p>This field required max length of 80</p>
        )}

        <label>Email</label>
        <input
          type='text'
          name='email'
          ref={register({
            required: true,
            minLength: 3,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        {errors.email?.type === 'required' && <p>This field is required</p>}
        {errors.email?.type === 'minLength' && (
          <p>This field required min length of 3</p>
        )}
        <label>Message</label>
        <textarea
          type='text'
          name='message'
          ref={register({ required: true, minLength: 10, maxLength: 140 })}
        />
        {errors.message?.type === 'required' && <p>This field is required</p>}
        {errors.message?.type === 'minLength' && (
          <p>This field required min length of 10</p>
        )}
        {errors.message?.type === 'maxLength' && (
          <p>This field required max length of 140</p>
        )}
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Contact;
