import { useEffect } from "react";
import { fetchUsers } from "../store/action";
import { useDispatch } from "react-redux";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-6xl mx-auto mt-12 mb-12">Home Page</h1>
        <SearchBar />
        <Card />
      </div>
    </>
  );
}
