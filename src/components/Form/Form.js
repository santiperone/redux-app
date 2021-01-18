import './Form.css';

import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

const renderField = ({label, input, type, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input className="form-control" {...input} type={type} placeholder={label}/>
        {touched && (error && <span className="text-danger">{error}</span>)}
      </div>    
    </div>
  )
}

let Form = ({}) => {
  return (
    <div className="Form">
        <h3>Añadir nuevo mensaje</h3>
        <form>
          <div>
            <Field name="asunto" label="asunto" component={renderField}/>
          </div>
          <div>
            <Field name="mensaje" label="mensaje" component={renderField}/>
          </div>        
          <div>
          <input className="submit" type="submit" value="Enviar"/>
          </div>        
        </form>
    </div> 
  );
}

const validate = values => {
  const errors = {};
  if(!values.asunto) {
    errors.asunto = 'Required';
  } else if (values.asunto.length < 6) {
    errors.asunto = '6 characters min';
  }
  if(!values.mensaje) {
    errors.mensaje = 'Required';
  } else if (values.mensaje.length < 6) {
    errors.mensaje = '6 characters min';
  }
  return errors;
}

Form = reduxForm({
  form: 'nuevo',
  validate
})(Form)


const mapStateToProps = (state) => {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  { }
)(Form);