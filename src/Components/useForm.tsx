import { useState, useEffect } from "react";

export type Data = {
  name?: string;
  email?: string;
  month?: number | undefined;
  day?: number | undefined;
  year?: number | undefined;
  hour?: number | undefined;
  minute?: number | undefined;
  pmOrAm?: string;
};

type Errors = {
  name?: string;
  email?: string;
  month?: string;
  day?: string;
  year?: string;
  date?: string;
  hour?: string;
  minute?: string;
  pmOrAm?: string;
  time?: string;
  initial?: string;
};

export const validate = (data: Data) => {
  let errors: Errors = {};
  if (!data.name) {
    errors.name = "This field is required";
  }
  if (!data.email) {
    errors.email = "This field is required";
  }
  if (data.email) {
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(data.email)) {
      errors.email = "Please use valid email";
    }
  }

  if (!data.month || data.month > 12 || data.month < 0) {
    errors.month = "error";
  }

  if (!data.day || data.day > 31 || data.day < 0) {
    errors.day = "error";
  }

  if (!data.year || data.year > 2023 || data.year < 2021) {
    errors.year = "error";
  }
  // check if there are any date errors
  if (errors.month || errors.day || errors.year) {
    errors.date = "This field is incomplete";
  }

  if (!data.hour || data.hour > 11 || data.hour < 0) {
    errors.hour = "error";
  }

  if (!data.minute || data.minute > 60 || data.minute < 0) {
    errors.minute = "error";
  }

  if (!data.pmOrAm) {
    errors.pmOrAm = "error";
  }
  //   check if there are any time errors

  if ((!data.hour || data.hour < 9) && data.pmOrAm?.toUpperCase() === "AM") {
    errors.time = "Invalid time";
  }
  if (
    (!data.hour || data.hour > 9) &&
    (!data.minute || data.minute > 30) &&
    data.pmOrAm?.toUpperCase() === "PM"
  ) {
    errors.time = "Invalid time";
  }
  if (errors.hour || errors.minute || errors.pmOrAm) {
    errors.time = "This field is incomplete";
  }

  return errors;
};

const useForm = () => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
  });
  const [menuHidden, setMenuHidden] = useState(true);
  const [count, setCount] = useState(2);
  const [errors, setErrors] = useState<Errors>({ initial: "first render" });
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log(data);
  //   console.log(errors);
  //   console.log(formIsValid);
  // });

  useEffect(() => {
    setFormIsValid(Object.keys(errors).length === 0);
  }, [errors, data]);

  const formatData = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (
      e.target.name === "month" ||
      e.target.name === "day" ||
      e.target.name === "year" ||
      e.target.name === "minute"
    ) {
      value = parseInt(value).toString();
      if (value[0] === "0") value = value.slice(1);
    }
    if (e.target.name === "hour") {
      value = parseInt(value).toString();
    }
    e.target.value = value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formatData(e);
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrors(
      validate({
        ...data,
      })
    );
  };

  const setPmOrAm = (value: string | undefined) => {
    value = value?.toUpperCase();
    setData((prevData) => ({
      ...prevData,
      pmOrAm: value,
    }));
    setMenuHidden(!menuHidden);
  };

  const decrement = () => (count === 1 ? null : setCount(count - 1));
  const increment = () => (count === 30 ? null : setCount(count + 1));

  return {
    data,
    count,
    errors,
    handleChange,
    handleSubmit,
    setPmOrAm,
    menuHidden,
    setMenuHidden,
    increment,
    decrement,
    formIsValid,
  };
};

export default useForm;
