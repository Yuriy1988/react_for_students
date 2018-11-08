import React from 'react';
import styles from './styles.scss';

const Login = (props) => {
  const { name, pass, handleChange, handleLogin } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin({ name, pass });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputWrapper} >
        <div className='form-group row'>
          <label
            className='col-sm-2 col-form-label'
            htmlFor='name'
          >Name</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              id='name'
              onChange={(e) => handleChange({ name: e.target.value })}
              type='text'
              value={name}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label
            className='col-sm-2 col-form-label'
            htmlFor='inputPassword'
          >Pass</label>
          <div className='col-sm-10'>
            <input
              className='form-control'
              id='inputPassword'
              onChange={(e) => handleChange({ pass: e.target.value })}
              placeholder='Password'
              type='password'
              value={pass}
            />
          </div>
        </div>
      </div>
      <button className='btn btn-primary'>Login</button>
    </form>
  );
};

export default Login;
