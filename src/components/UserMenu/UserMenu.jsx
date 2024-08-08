import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.container}>
      <p className={css.username}>
        Welcome, <span className={css.usernamespan}>{user.name}</span>
      </p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
