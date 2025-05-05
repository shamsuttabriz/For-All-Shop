import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Button from "./ui/Button";

function PhonesContainer({ phones }) {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhones(phones);
    } else {
      setDisplayPhones(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div>
      <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
      <div className="pb-10">
        <Button
          onClick={() => {
            setShowAll((prev) => !prev);
            if (showAll) window.scroll(0, 500);
          }}
          level={showAll ? "Show Less" : "Show All"}
        />
      </div>
    </div>
  );
}

export default PhonesContainer;
