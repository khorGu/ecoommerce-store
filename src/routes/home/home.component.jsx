import { Outlet } from "react-router-dom";
import MainPage from "../../components/main-directory/main-directory.component";

const Home = () => {
  return (
    <div>
      <MainPage />
      <Outlet />
    </div>
  );
};

export default Home;
