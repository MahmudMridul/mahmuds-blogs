import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import Search from "../components/Search";

export default function Home() {
   const states = useSelector((store) => store.app);
   const { isLoading } = states;

   return (
      <div>
         <h1>
            <Link to={"/"}>Mahmud's Blogs</Link>{" "}
         </h1>
         <hr></hr>

         <Search />

         {isLoading ? <Loading /> : null}

         <div>
            <Outlet />
         </div>
      </div>
   );
}
