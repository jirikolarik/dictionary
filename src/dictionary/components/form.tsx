import { Button } from "baseui/button";
import arrayMutators from "final-form-arrays";
import React, { FC } from "react";
import { Field, Form as FinalForm } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { useStyletron } from "styletron-react";
import Input from "../../form/input";
import { IForm } from "../types";
import { validate } from "../validations";

interface IProps {
  initialValues?: any;
  onSubmit: (values: IForm) => void;
}

const Form: FC<IProps> = props => {
  const [css] = useStyletron();
  const {
    onSubmit,
    initialValues = { entries: [{ from: undefined, to: undefined }] }
  } = props;

  const deleteButtonCss = css({
    display: "flex",
    alignItems: "flex-end"
  });

  const fieldCss = css({
    display: "grid",
    gridTemplateColumns: " 2fr 2fr 1fr",
    gridGap: "1rem"
  });

  const actionBarCss = css({
    textAlign: "right"
  });

  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      mutators={{
        ...arrayMutators
      }}
      validate={validate}
    >
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" component={Input} label="Dictionary name" />
          <FieldArray name="entries">
            {({ fields }) => (
              <>
                {fields.map((name, index) => (
                  <div key={name} className={fieldCss}>
                    <div>
                      <Field
                        name={`${name}.from`}
                        component={Input}
                        label="From"
                      />
                    </div>
                    <div>
                      <Field name={`${name}.to`} component={Input} label="To" />
                    </div>
                    <div className={deleteButtonCss}>
                      <Button
                        onClick={() => fields.remove(index)}
                        overrides={{
                          BaseButton: {
                            style: {
                              marginBottom: "16px",
                              width: "100%"
                            }
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
                <div className={actionBarCss}>
                  <Button
                    onClick={() =>
                      fields.push({ from: undefined, to: undefined })
                    }
                    overrides={{
                      BaseButton: {
                        style: {
                          marginBottom: "16px"
                        }
                      }
                    }}
                  >
                    Add new
                  </Button>
                </div>
              </>
            )}
          </FieldArray>

          <Button
            overrides={{ BaseButton: { style: { width: "100%" } } }}
            type="submit"
            isLoading={submitting}
          >
            Submit
          </Button>
        </form>
      )}
    </FinalForm>
  );
};

export default Form;
