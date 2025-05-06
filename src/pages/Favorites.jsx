import React, { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import { getFromFavorite, removeFromFavorite } from "../utilities";
import EmptyScreen from "../components/ui/EmptyScreen";

function Favorites() {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const savedPhone = getFromFavorite();
    setDisplayPhones(savedPhone);
  }, []);

  const handleDeleteFavorite = (id) => {
    console.log("clicked");
    removeFromFavorite(id);
    setDisplayPhones(getFromFavorite());
  };

  if (displayPhones.length < 1) return <EmptyScreen />;

  return (
    <div>
      <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {displayPhones.map((phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            isDelete={true}
            handleDeleteFavorite={handleDeleteFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
