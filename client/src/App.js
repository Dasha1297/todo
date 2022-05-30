import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Item from "./components/Item/Item";
import { getItems } from "./redux/slice";

function App() {
  const items = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className='block'>
      <AddItem />
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
