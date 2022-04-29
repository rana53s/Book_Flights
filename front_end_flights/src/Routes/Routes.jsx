import {Routes, Route} from "react-router";
import { Airports } from "../Components/Airports/Aitports";
import { Flights } from "../Components/Flights/Flights";
import { HomePage } from "../Components/Home/Home";

import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/airports" element={<Airports/>} />
        <Route exact path="/flights" element={<Flights/>} />
      </Routes>
    </>
  );
};
