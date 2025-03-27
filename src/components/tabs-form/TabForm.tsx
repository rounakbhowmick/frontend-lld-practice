import React, { useState } from "react";
import { TABS } from "./contant";
import { FormikProvider, useFormik } from "formik";
import Grid from "../../common/Grid";
import { TabFormWrapper } from "./styles";
import type { TabFormType } from "./type";

const TabForm = () => {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const ActiveComponent = currentTab.component;

  const formik = useFormik<TabFormType>({
    initialValues: {
      name: "",
      age: "",
      email: "",
      interest: [],
      language: [],
    },
    validate: (values) => {
      console.log("values", values);
      const errors: any = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.age) {
        errors.age = "Required";
      }

      if (values.interest.length === 0) {
        errors.interest = "Required";
      }
      console.log("errors", errors);
      return errors;
    },
    validateOnMount: true,

    onSubmit(values, formikHelpers) {
      console.log("values", values);
    },
  });
  return (
    <FormikProvider value={formik}>
      <TabFormWrapper direction="column">
        <div style={{ display: "flex", gap: "1rem" }}>
          {TABS.map((val: any) => (
            <div className="tabs" onClick={() => setCurrentTab(val)}>
              {val.name}
            </div>
          ))}
        </div>
        <Grid direction="column">
          <Grid className="active-container" direction="column">
            <ActiveComponent />
          </Grid>
          <Grid>
            <button
              type="submit"
              onClick={formik.submitForm}
              disabled={!formik.isValid}
            >
              Submit
            </button>
          </Grid>
        </Grid>
      </TabFormWrapper>
    </FormikProvider>
  );
};

export default TabForm;
