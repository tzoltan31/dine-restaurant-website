// type Value = {
//   name: string;
//   email: string;
//   month: number | null | undefined;
// };

import { Data } from "./useForm";

type Errors = {
  name?: string;
  email?: string;
  month?: string;
};

export const validate = (value: Data) => {
  let errors: Errors = {};
  if (!value.name) {
    errors.name = "This field is required";
  }
  if (!value.email) {
    errors.email = "This field is required";
  }

  if (!value.month || value.month > 12 || value.month < 0) {
    errors.month = "error";
  }
  return errors;
};
