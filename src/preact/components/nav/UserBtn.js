import { h, Fragment } from "preact";

import UserSvg from "./UserSvg";

const UserBtn = () => {
  return (
    <a class="" href="/login">
      <UserSvg class="catalog-actions__svg" />
    </a>
  );
};

export default UserBtn;
