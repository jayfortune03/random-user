import { useSelector } from "react-redux";

export default function Card() {
  const users = useSelector((state) => state.users);
  return (
    <div className="grid sm:mx-2 sm:grid-cols-1 md:mx-4 md:grid-cols-2 lg:mx-24 lg:grid-cols-3 gap-8">
      {Array.isArray(users)
        ? users.map((user) => {
            return (
              <div key={user.phone} className="border-2 border-black bg-white">
                <img
                  src={user.picture.medium}
                  className="mx-auto p-4"
                  alt="user-pic"
                />
                <h1 className="text-xl text-center mb-2 font-bold text-black">
                  {user.name.first}
                </h1>
                <h1 className="text-black text-md text-center mb-4">
                  {user.email}
                </h1>
              </div>
            );
          })
        : users?.results?.map((user) => {
            return (
              <div key={user.phone} className="border-2 border-black bg-white">
                <img
                  src={user.picture.medium}
                  className="mx-auto p-4"
                  alt="user-pic"
                />
                <h1 className="text-xl text-center mb-2 font-bold text-black">
                  {user.name.first}
                </h1>
                <h1 className="text-black text-md text-center mb-4">
                  {user.email}
                </h1>
              </div>
            );
          })}
    </div>
  );
}
