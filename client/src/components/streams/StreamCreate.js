import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      /*
      <input
         onChange={formProps.input.onChange}
         value={formProps.input.value}
      />
      */
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  /*
  //we don't need event as redux form will take care of not reloading the page
  onSubmit(event) {
    event.preventDefault();
  }
  */

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if the user did not enter a title
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};
export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
