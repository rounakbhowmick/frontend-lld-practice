import { Field, useFormikContext } from "formik";
import React from "react";
import Grid from "../../common/Grid";
import type { TabFormType } from "./type";

const Profile = () => {
  const { errors } = useFormikContext<TabFormType>();
  return (
    <Grid direction="column">
      <label>Name</label>
      <Field type="text" name="name" as="input" />
      {errors.name && <div className="errors">{errors.name}</div>}
      <label>Age</label>
      <Field type="text" name="age" as="input" />
      {errors.age && <div className="errors">{errors.age}</div>}
    </Grid>
  );
};
export default Profile;
