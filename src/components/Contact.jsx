/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Form contact</h1>
      <form>
        <label>Name</label>
        <input type='text' name='name' />

        <label>Email</label>
        <input type='text' name='email' />

        <label>Message</label>
        <textarea />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Contact;
