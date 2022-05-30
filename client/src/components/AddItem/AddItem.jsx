import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slice";
import style from "./AddItem.module.css";
const AddItem = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={style.add}>
      <TextField
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        variant='outlined'
        onClick={() => {
          dispatch(addItem(text));
        }}
      >
        ADD
      </Button>
    </div>
  );
};

export default AddItem;
