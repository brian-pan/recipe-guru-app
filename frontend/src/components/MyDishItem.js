import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
// import { BsEggFried } from "react-icons/bs";
// import { GiMeat } from "react-icons/gi";
// import { Chip } from "@mui/material";

function MyDishItem({ dish }) {
  return (
    <div className="dish-card">
      <div className="dish-card-title">
        <h4>{dish.name}</h4>
        <div>
          {dish.isPublic && (
            <div className="dish-card-isPublic">
              <p>Public</p>
            </div>
          )}
        </div>
      </div>
      {dish.diet !== "Normal" && <FaLeaf />}
      {dish.diet}
      <div className="dish-card-description">
        <p>{dish.description}</p>
      </div>
      <Link to={`/my-dishes/${dish._id}`} className="btn  btn-sm">
        View
      </Link>

      {/* <Chip variant="outlined" color="success" size="small" icon={<FaLeaf />} /> */}
    </div>
  );
}
export default MyDishItem;
