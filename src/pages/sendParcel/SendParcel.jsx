import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {};
  return (
    <div>
      <div className="p-10 md:p-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Add Parcel</h2>
        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* document */}
          <div></div>
          {/* parcel info */}
          <div></div>
          {/* sender receiver */}
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
