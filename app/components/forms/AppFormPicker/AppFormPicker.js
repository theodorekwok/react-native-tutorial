import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import AppPicker from "../../AppPicker/AppPicker";

function AppFormPicker({
  name,
  width,
  items,
  numberOfColumns = 1,
  PickerItemComponent,
  ...otherProps
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => {
          setFieldValue(name, item);
        }}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
