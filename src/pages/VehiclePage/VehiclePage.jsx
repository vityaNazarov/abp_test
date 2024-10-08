import css from "./VehiclePage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../api/dummyAPI";

const VehiclePage = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getVehicleById(vehicleId).then(setVehicle);

    // Загружаем комментарии из localStorage
    const storedComments = localStorage.getItem(`comments-${vehicleId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [vehicleId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComments = [...comments, comment];
      setComments(newComments);
      setComment("");
      localStorage.setItem(
        `comments-${vehicleId}`,
        JSON.stringify(newComments)
      );
    }
  };

  return (
    <div className={css.container}>
      {vehicle ? (
        <>
          <h1 className={css.title}>{vehicle.title}</h1>
          <p className={css.description}>{vehicle.description}</p>
          <h3 className={css.comment}>Комментарии</h3>
          <ul className={css.list}>
            {comments.map((c, index) => (
              <li className={css.item} key={index}>
                {c}
              </li>
            ))}
          </ul>
          <textarea
            className={css.textarea}
            value={comment}
            onChange={handleCommentChange}
            placeholder="Добавить комментарий"
          />
          <br />
          <button className={css.btnAdd} onClick={handleAddComment}>
            Добавить
          </button>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default VehiclePage;
