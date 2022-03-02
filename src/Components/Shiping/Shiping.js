import React from "react";

import { useForm } from "react-hook-form";
import UseAuth from "../../context/UseAuth";

const Shiping = () => {
  const { user } = UseAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Form">
      <h1>Happy shopping </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type={"text"}
          defaultValue={user.displayName}
          {...register("name")}
        />
        <input
          type={"email"}
          defaultValue={user.email}
          {...register("email")}
        />
        <input
          required
          type={"tel"}
          placeholder="Mobile"
          {...register("mobile")}
        />
        <input required placeholder="address" {...register("address")} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shiping;
