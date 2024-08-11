import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContact, selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const name = useSelector(selectFilter);

  const handleInputChange = (event) => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <div className={css.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        id="search"
        placeholder="Enter name"
        value={name}
        onChange={handleInputChange}
      />
    </div>
  );
}
