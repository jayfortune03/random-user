import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, fetchUsers } from "../store/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState("");
  const users = useSelector((state) => state.users);

  const filterUser = () => {
    if (!Array.isArray(users)) {
      const filteredUser = users?.results?.filter((user) =>
        user.name.first.toLowerCase().includes(filterName)
      );

      if (filteredUser.length === 0) {
        alert("Error!, Name not found, try another name !");
      } else {
        dispatch(setUsers(filteredUser));
      }
    } else {
      setFilterName("");
      dispatch(fetchUsers());
    }
  };

  return (
    <div className="flex mx-auto mb-6">
      <input
        type="text"
        placeholder="Search"
        className="border focus:border-blue-500 text-black text-md p-4 border-black mr-2"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <button
        type="button"
        onClick={filterUser}
        className="text-black bg-gray-200 p-2"
      >
        {Array.isArray(users) ? "CANCEL" : "SORT BY NAME"}
      </button>
    </div>
  );
}
