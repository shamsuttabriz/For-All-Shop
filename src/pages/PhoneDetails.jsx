import React from "react";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";

function PhoneDetails() {
  const data = useLoaderData();
  const phoneId = useParams().tabriz;
  const singlePhone = data.find((phone) => phone.id === parseInt(phoneId));
  console.log(singlePhone);
  const {
    id,
    name,
    brand,
    image,
    description,
    storage,
    model,
    camera_info,
    price,
  } = singlePhone || {};
  return (
    <div className="py-12">
      <img className="w-full mx-auto md:max-w-lg" src={image} alt="Banner" />
      <div className="flex justify-between items-center py-10">
        <h1 className="font-thin text-5xl md:text-6xl">{name}</h1>
        <div className="space-x-4">
          <Button level={<MdShoppingCart />} />
          <Button level={<MdBookmarkAdd />} />
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
