import { FormControl } from "baseui/form-control";
import { Input as BaseInput } from "baseui/input";
import React from "react";
import { FieldRenderProps } from "react-final-form";

interface InputProps {
  readonly caption?: string;
  readonly placeholder?: string;
  readonly label?: string;
  readonly type?: string;
  readonly className?: string;
  readonly startEnhancer?: JSX.Element;
  readonly endEnhancer?: JSX.Element;
  readonly disabled?: boolean;
}
const Input = ({
  caption,
  disabled,
  input,
  meta,
  placeholder,
  label,
  type,
  startEnhancer,
  endEnhancer
}: FieldRenderProps<string, HTMLDivElement> & InputProps) => (
  <FormControl
    label={label}
    disabled={disabled}
    error={meta.touched && meta.error}
    caption={caption}
  >
    <BaseInput
      id={input.name}
      value={input.value}
      onChange={e => input.onChange(e.currentTarget.value)}
      error={meta.touched && !!meta.error}
      placeholder={placeholder}
      startEnhancer={startEnhancer ? () => startEnhancer : undefined}
      endEnhancer={endEnhancer ? () => endEnhancer : undefined}
      type={type}
      positive={!!input.value}
    />
  </FormControl>
);

export default Input;
