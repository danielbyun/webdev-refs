import React, { useEffect, useState } from "react";

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");

  // generate emoji
  useEffect(() => {
    const generateEmoji = (entries) => {
      fetch(
        `https://4gjzhs9l81.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
      )
        .then((res) => res.json())
        .then((data) => setEmoji(data.input))
        .catch((err) => console.error(err));
    };

    generateEmoji(entries);
  }, [entries]);

  return (
    <div>
      <div className="white f3">
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f1">{entries}</div>
      <div className="white f3">{`Rank Badge: ${emoji}`}</div>
    </div>
  );
};

export default Rank;
