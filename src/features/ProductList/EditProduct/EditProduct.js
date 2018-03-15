import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { editProduct } from '../productsActions';
import styled from 'styled-components';

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.products.products.find(product => String(product.id) === ownProps.match.params.id),
});

const mapDispatchToProps = {
  editProduct: editProduct,
};

const Title = styled.h1`
  margin: 20px;
  color: rebeccapurple;
`;

class SimpleForm extends Component {
  handleSave = (aaa) =>  {
    console.log(aaa);
    return aaa;
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSave)} style={{ marginLeft: 100}}>
        <Title>AAAAAAA</Title>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="name"
          />
        </div>
        <div>
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="price"
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'edit' })
)(SimpleForm)
