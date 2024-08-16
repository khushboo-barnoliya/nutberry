"use client"

import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }) => {

  const router = useRouter();

  const httpMethods = {
    POST: 'POST',
    GET: 'GET',
    DELETE: 'DELETE'
  };


  const deleteUser = async () => {

    const confirmed = confirm("Do you want to Remove this user?")

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/users?id=${id}`, {
        method: httpMethods.DELETE,
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={deleteUser} className="font-medium text-md rounded-[20px] px-8 py-3 bg-red-700 text-white dark:text-white hover:bg-red-900">
      Remove
    </button>
  )
}

export default DeleteBtn;
