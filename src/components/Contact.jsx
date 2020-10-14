/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../Firebase';
import '../assets/styles/components/Contact.scss';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const docRef = db.collection('contactData');

  const onSubmitForm = (data, e) => {
    docRef
      .doc()
      .set({
        email: data.email,
        message: data.message,
        name: data.name,
      })
      .then(() => {
        alert('Message send!');
      })
      .catch((error) => {
        alert('Got an error: ', error);
      });

    e.target.reset();
  };

  return (
    <div id='contact' className='contact-body'>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.04431178678!2d-72.21309242115998!3d7.787475359302582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666ca49582d39f%3A0xe35525b271c7ef85!2zU2FuIENyaXN0w7NiYWwsIFTDoWNoaXJh!5e0!3m2!1ses!2sve!4v1600443819534!5m2!1ses!2sve'
        frameBorder='0'
        allowFullScreen=''
        aria-hidden='false'
      />
      <div className='contact-body-item'>
        <div className='left'>
          <div className='app-title'>
            <span>Contact</span>
            <span>Me</span>
          </div>
        </div>
        <div className='right'>
          <form onSubmit={handleSubmit(onSubmitForm)} className='app-form'>
            <div className='app-form-group'>
              <input
                placeholder='Full Name'
                className='app-form-control'
                type='text'
                name='name'
                ref={register({
                  required: true,
                  minLength: 3,
                  maxLength: 80,
                })}
              />
              {errors.name?.type === 'required' && (
                <p>This field is required</p>
              )}
              {errors.name?.type === 'minLength' && (
                <p>This field required min length of 3</p>
              )}
              {errors.name?.type === 'maxLength' && (
                <p>This field required max length of 80</p>
              )}
            </div>
            <div className='app-form-group'>
              <input
                placeholder='Email'
                className='app-form-control'
                type='text'
                name='email'
                ref={register({
                  required: true,
                  minLength: 3,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                })}
              />
              {errors.email?.type === 'required' && (
                <p>This field is required</p>
              )}
              {errors.email?.type === 'minLength' && (
                <p>This field required min length of 3</p>
              )}
            </div>
            <div className='app-form-group message'>
              <textarea
                placeholder='Message'
                className='app-form-control'
                type='text'
                name='message'
                rows='5'
                ref={register({
                  required: true,
                  minLength: 10,
                  maxLength: 140,
                })}
              />
              {errors.message?.type === 'required' && (
                <p>This field is required</p>
              )}
              {errors.message?.type === 'minLength' && (
                <p>This field required min length of 10</p>
              )}
              {errors.message?.type === 'maxLength' && (
                <p>This field required max length of 140</p>
              )}
            </div>
            <div className='app-form-group buttons'>
              <input className='app-form-button' type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
