import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";
const RcAxBarChart = () => {
  const [phones, setPhones] = useState([]);
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
      });
  }, []);

  return (
    <div className="my-10 w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">phones available {phones.length}</h1>
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
