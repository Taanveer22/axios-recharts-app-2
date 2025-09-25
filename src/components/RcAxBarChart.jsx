import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";
import { ScaleLoader, GridLoader } from "react-spinners";
const RcAxBarChart = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spining, setSpining] = useState(false);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const allPhonesData = data.data.data;
        const modifiedPhonesData = allPhonesData.map((phone) => {
          const newPhoneObj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return newPhoneObj;
        });
        console.log(modifiedPhonesData);
        setPhones(modifiedPhonesData);
        setLoading(false);
        setSpining(true);
      });
  }, []);

  return (
    <div className="my-10 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">
        loading spinner show
      </h1>
      {loading && (
        <div className="flex justify-center items-center">
          <ScaleLoader
            speedMultiplier={1}
            color="#3ee14d"
            height={100}
            margin={5}
            radius={34}
            width={20}
          />
        </div>
      )}

      {spining && (
        <div className="flex justify-center items-center">
          <GridLoader
            color="#c72e2e"
            margin={5}
            size={30}
            speedMultiplier={1}
            width={400}
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-center my-5">
        phones available {phones.length}
      </h1>
      <BarChart width={1100} height={600} data={phones}>
        <Bar dataKey="price" fill="orange"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
    </div>
  );
};

export default RcAxBarChart;
