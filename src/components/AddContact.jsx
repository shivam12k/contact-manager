import { useState } from "react";
import { useAppDispatch } from "../redux/hooks/index.js";
import { addContact } from "../redux/slices/ContactSlice";
const AddContact = () => {
  const [name, setName] = useState("");
  const [ph, setPh] = useState("");
  const [type, setType] = useState("");
  const [imp, setImp] = useState(false);

  const dispatch = useAppDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      addContact({
        name,
        ph,
        type,
        imp,
      })
    );
  };
  return (
    <form
      className="w-full max-w-sm border-double border-4  border-sky-500 p-5"
      onSubmit={submitForm}
    >
      <div className="md:flex md:items-center  mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jhon Sinha"
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Phone Number
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            placeholder="000-000-000"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/2">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Type
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Not Selected</option>
            <option>Home</option>
            <option>Work</option>
          </select>
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            value={imp}
            onChange={(e) => setImp(e.target.value)}
          />
          <span className="text-sm">Important</span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddContact;
