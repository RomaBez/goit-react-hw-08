import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <div className={css.input}>
        <input
          className={css.field}
          type="text"
          value={value}
          onChange={(evt) => {
            dispatch(changeFilter(evt.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;
