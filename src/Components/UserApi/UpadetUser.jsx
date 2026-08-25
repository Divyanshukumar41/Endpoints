import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiEndPoint } from "../../utils/apiEndPoints";

const UpadteUser = () => {
  const [res, setRes] = useState(null);
  const handlefetch = async () => {
    try {
      const response = await axios.get(apiEndPoint.GetAllUser);
      console.log("Full response:", response);
      console.log("Data:", response.data);
      console.log("Users:", response.data.users);
      setRes(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(JSON.stringify(res, null, 2));
  return (
    <section className="mt-6 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-gray-100 p-6 w-full rounded-lg md:p-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
            Update a user !
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Updating a user will not update it into the server. It will simulate
            a PUT/PATCH request and will return updated user with modified data
          </p>
          <div className="max-w-5xl mx-auto bg-gray-500 p-6 w-full rounded-lg md:p-8 mt-7">
            <p className="text-base text-white leading-relaxed text-sm font-sans">
             <p>{"fetch('http://localhost:8080/api/users', {"}</p>
              <p>{" method: 'PATCH',"}</p>
              <p>{" headers: { 'Content-Type': 'application/json' },"}</p>
              <p>{" body: JSON.stringify({"}</p>
              <p> {"firstName: 'divyansh',"}</p>
              <p> {"lastName: 'jubilant',"}</p>
              <p> {"})"}</p>
              <p> {"})"}</p>
              <p>{".then((res) => res.json())"}</p>
              <p>{".then((res) => console.log(res))"}</p>{" "}
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
                {JSON.stringify(res, null, 2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpadteUser;
