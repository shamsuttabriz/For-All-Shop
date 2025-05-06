import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

export default function PhoneCard({ phone, isDelete, handleDeleteFavorite }) {
  const { id, name, image, description } = phone || {};
  return (
    <div className="card bg-base-100 shadow-md border border-slate-300">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-4">{description}</p>
        <div className="relative card-actions justify-end">
          <Link
            to={`/phone-details/${id}`}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              View More
            </span>
          </Link>
        </div>
        {isDelete && (
          <button onClick={() => handleDeleteFavorite(id)} className="absolute -top-3 -right-3 text-xl Font-bold h-10 w-10 cursor-pointer text-black group flex justify-center items-center bg-gray-900 hover:bg-gray-300 duration-300 rounded-full ">
            <MdDeleteForever
              size={22}
              className="text-white group-hover:text-gray-900"
            />
          </button>
        )}
      </div>
    </div>
  );
}
