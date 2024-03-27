import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";


const MainLAyout = () => {
    return (
        <div>
            
          <div className="h-24">
            <Navber></Navber>
            </div>

            {/* packet */}
          <div className="min-h-[calc(100vh-148px)]">
          <Outlet></Outlet>
          </div>
          
          {/* footer */}
          <Footer></Footer>

        </div>
    );
};

export default MainLAyout;