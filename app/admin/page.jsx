

const fetchUserData = async() => {
  try {
    const res = await fetch("/api/users", {
      cache: "no-store"
    })
    if(!res.ok){
      throw new Error("Failed to Fetch User")
    }
    return res.json();
  } catch (error) {
    console.log("Error loading data: ", error)
  }
};


export default async function AdminPage() {


  const fetchUser = await fetchUserData();

  return (

    <div className="w-full px-56 min-h-[100vh] flex-shrink-0 flex items-center flex-col justify-center">

      <div className="text-start w-full">
        <h1 className='font-bold mb-5 text-[20px]'>User Content</h1>
      </div>




      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-10">
          <thead class=" text-[14px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-8">
                User Name
              </th>
              <th scope="col" class="px-6 py-8">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-8">
                Message
              </th>
              <th scope="col" class="px-6 py-8">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              fetchUser.map((user) => (
                <tr key={user._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[15px]">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </th>
                  <td class="px-6 py-8">
                    {user.phone}
                  </td>
                  <td class="px-6 py-8">
                    {user.message}
                  </td>
                  <td class="px-6 py-8">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                  </td>
                </tr>
              ))
            }




          </tbody>
        </table>
      </div>
    </div>


  );
}
