import { BounceLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <>
      <BounceLoader
        color="#4338cs"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </>
  );
};
export default Spinner;
