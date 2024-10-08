import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "red",
  };
  
const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color="#43354a"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner