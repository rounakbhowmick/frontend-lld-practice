import React from "react";
import Grid from "../../common/Grid";
import { Field, useFormikContext } from "formik";
import type { TabFormType } from "./type";

const Interest = () => {
  const { errors } = useFormikContext<TabFormType>();

  return (
    <Grid direction="column">
      <Grid>
        <label htmlFor="interest">Interest</label>
        <Field type="select" name="interest" as="select">
          <option value="">Select an interest</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
        </Field>
        {errors.interest && <div className="errors">{errors.interest}</div>}
      </Grid>
      <Grid>
        <label htmlFor="language">Language</label>
        <Grid>
          <label>
            <Field type="checkbox" name="language" value="hindi" />
            Hindi
          </label>
        </Grid>
        <Grid>
          <label>
            <Field type="checkbox" name="language" value="bengali" />
            Bengali
          </label>
        </Grid>
        {errors.language && <div className="errors">{errors.language}</div>}
      </Grid>
    </Grid>
  );
};

export default Interest;
