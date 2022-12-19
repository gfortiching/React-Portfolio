import "./CSS/Portfolio.css";
import PortOne from "./Portfolio One";
import PortTwo from "./Portfolio Two";
import Capstone from "./Capstone";
import PortDrawer from "./PortDrawer"
import { Routes, Route } from 'react-router-dom';


export default function Portfolio() {

    return (
    <>
    <div className="portfolioBg">
    <Routes>
      <Route path="/portone" element={<PortOne />} />
      <Route path="/porttwo" element={<PortTwo />} />
      <Route path="/capstone" element={<Capstone />} />
    </Routes>
    </div>
    <PortDrawer />
    </>
)
}