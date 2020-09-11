/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/styles/components/Contact.scss';
import { Container } from 'reactstrap';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (data) => {
    // console.log(data);
    return data;
  };

  return (
    <Container className='contact'>
      <h1 className='contact__title'>Form contact</h1>
      <div className='background'>
        <div className='container'>
          <div className='screen'>
            <div className='screen-header'>
              <div className='screen-header-left'>
                <div className='screen-header-button close' />
                <div className='screen-header-button maximize' />
                <div className='screen-header-button minimize' />
              </div>
              <div className='screen-header-right'>
                <div className='screen-header-ellipsis' />
                <div className='screen-header-ellipsis' />
                <div className='screen-header-ellipsis' />
              </div>
            </div>
            <div className='screen-body'>
              <div className='screen-body-item left'>
                <div className='app-title'>
                  <span>Contact</span>
                  <span>Me</span>
                </div>
                <div className='app-contact'>
                  Contact info : +62 81 314 928 595
                </div>
              </div>
              <div className='screen-body-item'>
                <form
                  onSubmit={handleSubmit(onSubmitForm)}
                  className='app-form'
                >
                  <div className='app-form-group'>
                    <input
                      placeholder='Name'
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
                    <input
                      className='app-form-button'
                      type='submit'
                      value='Submit'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
