import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createProduct } from '../actions';

const MAX_LENGTH = 15;
const MIN_LENGTH = 2;

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value => (
  value && value.length > max ? `Must be ${max} characters or less` : undefined
);
const maxLength15 = maxLength(MAX_LENGTH);
const minLength = min => value => (
  value && value.length < min ? `Must be ${min} characters or more` : undefined
);
const minLength2 = minLength(MIN_LENGTH);
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        placeholder={label}
        type={type}
        {...input}
      />
      {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const CreateProduct = (props) => {
  const { handleSubmit, pristine, reset, submitting, valid, createProduct } = props;

  const submit = (product) => {
    createProduct(product).then(() => {
      props.history.goBack();
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        component={renderField}
        label='Name'
        name='name'
        type='text'
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        component={renderField}
        label='Price'
        name='price'
        type='text'
        validate={number}
      />
      <Field
        component={renderField}
        label='In cart'
        name='inCart'
        type='text'
        validate={number}
      />
      <div>
        <button
          disabled={pristine || submitting || !valid}
          type='submit'
        >
          Submit
        </button>
        <button
          disabled={pristine || submitting}
          onClick={reset}
          type='button'
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  createProduct,
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'createProduct' }),
)(CreateProduct);
