import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.coponent";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
