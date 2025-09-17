import AllPriceOptions from "./components/AllPriceOptions";
import DasisyNavbar from "./components/DasisyNavbar";
import Navbar from "./components/Navbar";
import RcAxBarChart from "./components/RcAxBarChart";
import RcBarChart from "./components/RcBarChart";
import RcLineChart from "./components/RcLineChart";

function App() {
  return (
    <>
      <DasisyNavbar></DasisyNavbar>
      <Navbar></Navbar>
      <AllPriceOptions></AllPriceOptions>
      <RcLineChart></RcLineChart>
      <RcBarChart></RcBarChart>
      <RcAxBarChart></RcAxBarChart>
    </>
  );
}

export default App;
