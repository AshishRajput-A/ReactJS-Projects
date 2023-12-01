import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div>
      <div className=" mt-10 mb-10 text-center text-orange-600 text-5xl font-bold">
        User :{userid}
      </div>
    </div>
  );
}

export default User;
