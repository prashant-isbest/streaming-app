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
  render() {
    return (
      <div>
        <form class="ui form">
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
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
