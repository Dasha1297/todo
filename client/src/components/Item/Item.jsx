import { DeleteOutline } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import style from "./Item.module.css";
import * as classnames from "classnames";
import { useDispatch } from "react-redux";
import { deleteItem, toogleItem } from "../../redux/slice";

const Item = ({ item }) => {
  const itemStyle = classnames(style.item, { [style.done]: item.completed });
  const dispatch = useDispatch();

  return (
    <div className={itemStyle}>
      <Checkbox
        onChange={() => dispatch(toogleItem(item))}
        checked={item.completed}
      />
      <p>{item.text}</p>
      <IconButton onClick={() => dispatch(deleteItem(item))}>
        <DeleteOutline />
      </IconButton>
    </div>
  );
};
export default Item;
