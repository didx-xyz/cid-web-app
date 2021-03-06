import React, { useCallback } from "react";
import { string, oneOf, oneOfType, bool, number } from "prop-types";

import { Input } from "./styles";
import { connect } from "formik";
import FormItemWrapper from "components/shared/formItemWrapper";
import FormLabel from "components/shared/formLabel";

const TextInput = ({
  placeholder,
  label,
  defaultValue,
  name,
  formik,
  disabled,
  type,
  style,
  containerStyle
}) => {
  const value = formik.values[name];
  const error = formik.touched[name] && formik.errors[name];
  const { handleBlur, onFocus } = formik;

  const handleChange = useCallback(
    ({ target }) => {
      formik.setFieldValue(name, target.value);
    },
    [formik, name]
  );

  return (
    <FormItemWrapper style={containerStyle}>
      {label && <FormLabel name={name} description={label} error={error} />}
      <Input
        style={style}
        value={value}
        name={name}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={onFocus}
      />
    </FormItemWrapper>
  );
};

TextInput.propTypes = {
  name: string.isRequired,
  type: oneOf(["text", "password", "number", "date"]),
  placeholder: string,
  label: string,
  defaultValue: oneOfType([string, number]),
  disabled: bool
};

export default connect(TextInput);
