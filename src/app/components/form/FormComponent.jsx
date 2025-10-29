"use client";

const FormComponent = ({ handleSubmit, children }) => {
  return (
    <form
      className="flex flex-col flex-wrap justify-center content-center gap-4  p-10"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default FormComponent;
