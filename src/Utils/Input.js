import React from 'react'

export const CustomInputComponent = ({
        field, 
        form: { touched, errors },
        ...props
    }) => (
        <div>
        <input type="text" {...field} {...props} />
            {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
  );
  

  export const CustomTextareaComponent = ({
        field, 
        form: { touched, errors },
        ...props
    }) => (
        <div>
        <textarea type="text" {...field} {...props} />
        {touched[field.name] &&
            errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
);

  