
// Import required components
import DeleteBtn from "@/components/DeleteBtn";

// Fetch data from the API
const getFetch = async () => {
  try {
    const res = await fetch(process.env.API_URL, {
      cache: "force-cache"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Users");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading users: ", error);
  }
};

// AdminPage component
const AdminPage = async() => {
  const  { users }  =  await getFetch() || {};

  return (
    <div className="w-full py-44 min-h-[100vh] bg-[#d09f667e] flex-shrink-0 flex items-center flex-col justify-center">


      <div className="userMain w-full px-40 z-0">
        <div className="text-start w-full">
          <h1 className='font-bold mb-5 text-[20px]'>User Content</h1>
        </div>

        <div className="relative shadow-md sm:rounded-xl bg-white overflow-hidden w-full">
          <div className="w-full overflow-x-auto overflow-y-auto max-h-[611px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white">
              <thead>
                <tr className="dark:border-gray-400 border-b text-[14px] sticky top-0 text-gray-700 backdrop-blur-sm uppercase bg-gray-100/50">
                  <th scope="col" className="px-20 py-10">User Name</th>
                  <th scope="col" className="px-10 py-10">Phone Number</th>
                  <th scope="col" className="px-10 py-10">Message</th>
                  <th scope="col" className="px-10 py-10">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user) => {
                    return (
                      <tr key={user._id} className="bg-white border-b dark:border-gray-200  text-gray-900 text-[15px]">
                        <th scope="row" className="px-20 py-8 font-semibold capitalize whitespace-nowrap">
                          {user.name}
                        </th>
                        <td className="px-10 py-8">{user.phone}</td>
                        <td className="px-10 py-8">{user.message}</td>
                        <td className="px-10 py-8">
                          <DeleteBtn id={user._id} />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;