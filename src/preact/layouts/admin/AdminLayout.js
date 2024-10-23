// @ts-check
import { h, Fragment } from "preact";

const AdminLayout = ({ children, style }) => {
  return (
    <>
      <main style={style} class="main container">
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
