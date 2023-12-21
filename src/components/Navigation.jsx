import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="dark">
      <nav className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
        <div className="flex justify-between p-4">
          <div className="text-2xl leading-[3rem] tracking-tight font-bold text-black dark:text-white">
          <Link to="/">Contact Manager</Link>
          </div>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">
            <Link to="/addContact" className="px-6 py-2 text-black transition duration-700 ease-out bg-white border border-black rounded-lg hover:bg-black hover:border hover:text-white dark:border-white dark:bg-inherit dark:text-white dark:hover:bg-white dark:hover:text-black">
              Add Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
