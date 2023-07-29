import "./styles.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useCallback, useState } from "react";

export default function App() {
  console.log("rendered");
  const [rated, setRated] = useState(false);
  const [stars, setStars] = useState([
    { id: 0, filled: false },
    { id: 1, filled: false },
    { id: 2, filled: false },
    { id: 3, filled: false },
    { id: 4, filled: false }
  ]);

  const handleOver = (sid) => {
    if (rated) return;
    console.log(sid);
    setStars((prev) =>
      prev.map((item, index) => {
        if (index <= sid) {
          item.filled = true;
        }
        return item;
      })
    );
  };

  const handleOut = (sid) => {
    if (rated) return;
    console.log("leaving");
    setStars((prev) =>
      prev.map((item, index) => {
        if (index <= sid) {
          item.filled = false;
        }
        return item;
      })
    );
  };
  return (
    <div className="App">
      {stars.map((item, index) => {
        if (!item.filled)
          return <AiOutlineStar onMouseOver={() => handleOver(index)} />;
        else
          return (
            <AiFillStar
              // onMouseOver={handleOver(i)}
              onClick={() => {
                setRated(true);
              }}
              onMouseLeave={() => handleOut(index)}
            />
          );
      })}
    </div>
  );
}
