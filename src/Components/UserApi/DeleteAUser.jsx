import axios from "axios";
import React, { useEffect, useState } from "react";

const DeleteAUser = () => {
  const [res, setRes] = useState(null);
  const handlefetch = () => {
    const newobj = {
      user: {
        _id: "6a748c5c82fd88c631370b4b",
        firstName: "me",
        lastName: "kumar",
        userName: "me",
        email: "me@gmail.com",
        jobTitle: "gfhgfh",
        gender: "male",
        password: "12345",
        role: "user",
        createdAt: "2026-08-06T13:30:04.661Z",
        updatedAt: "2026-08-06T13:30:04.661Z",
        __v: 0,
      },
      stuatus: 204,
      message: "User deleted successfully",
    };
    return newobj;
  };
  // handlefetch()
  return (
    <section className="mt-6 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-gray-100 p-6 w-full rounded-lg md:p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
            Delete Users !
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Deleting a user will not delete it into the server. It will simulate
            a DELETE request and will return deleted user with isDeleted &
            deletedOn keys
          </p>
          <div className="max-w-5xl mx-auto bg-gray-500 p-6 w-full rounded-lg md:p-8 mt-7">
            <p className="text-base text-white leading-relaxed text-sm font-sans">
              <p>fetch("http://localhost:8080/api/users/id")</p>
              <p>{" method: 'DELETE',"}</p>
              <p>{".then((res) => res.json())"}</p>
              <p>{".then((res) => console.log(res))"}</p>
            </p>
          </div>
          <button
            className="py-2.5 px-4 mt-8 text-blue-700 text-sm font-semibold rounded-md inline-block border border-2 border-blue-600 transition-colors hover:bg-blue-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            onClick={handlefetch}
          >
            Show output
          </button>
          {res && (
            <div className="max-w-5xl mx-auto bg-gray-400 p-6 w-full rounded-lg md:p-8 mt-7">
              <p className="text-base text-white leading-relaxed text-sm font-sans">
                {}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeleteAUser;
