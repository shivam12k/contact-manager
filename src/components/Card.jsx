import { useAppDispatch } from "../redux/hooks";
import "./card.css";
import { removeContact } from "../redux/slices/ContactSlice";
const Card = ({ data }) => {
  if (!data) {
    return null; // If data is not available, you might want to handle this accordingly
  }
  const dispatch=useAppDispatch();
  const { id, name, ph, type, imp } = data;

  console.log(id, name, ph, type, imp); // Check individual values to see if they are present

  return (
    <div>
      <div className="card-client">
        {imp ? ( // Using a ternary operator to conditionally render the SVG based on 'imp'
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
            />
          </svg>
        ) : null}{" "}
        {/* Render null when 'imp' is false */}
        <div className="user-picture">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
          </svg>
        </div>
        <p className="name-client">
          {" "}
          {name}
          <span>{ph}</span>
          <span>{type}</span>
          <i
           className="fa fa-trash border-solid border-3 rounded-full hover:bg-red-500"
           onClick={()=>{dispatch(removeContact(id))}}></i>
        </p>
      </div>
    </div>
  );
};

export default Card;
