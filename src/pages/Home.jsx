import Card from "../components/Card";
import { useAppSelector } from "../redux/hooks";

function Home() {
  const contacts = useAppSelector((state) => state.Contacts.contacts);
 
  return (
    <div className="container w-full min-h-screen flex justify-center  items-center px-4 sm:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 p-2 sm:p-5 pt-16 sm:pt-24 ">
        {contacts.map((data, key) => (
          <Card key={key} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
