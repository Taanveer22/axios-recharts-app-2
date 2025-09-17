import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const RcBarChart = () => {
  const playersData = [
    {
      id: 1,
      name: "Tamim",
      ball: 8750,
      run: 6312,
      average: 47.8,
    },
    {
      id: 2,
      name: "Shakib",
      ball: 6985,
      run: 5425,
      average: 51.6,
    },
    {
      id: 3,
      name: "Mushfiqur",
      ball: 7542,
      run: 5876,
      average: 49.3,
    },
    {
      id: 4,
      name: "Riyad",
      ball: 5423,
      run: 3987,
      average: 43.2,
    },
    {
      id: 5,
      name: "Liton",
      ball: 4125,
      run: 2876,
      average: 39.8,
    },
    {
      id: 6,
      name: "Soumya",
      ball: 3210,
      run: 2189,
      average: 34.2,
    },
    {
      id: 7,
      name: "Anamul",
      ball: 1654,
      run: 1187,
      average: 29.7,
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center my-5">
        Batsman run and average data
      </h1>
      <BarChart width={800} height={600} data={playersData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid />
        <Bar dataKey="ball" fill="red"></Bar>
        <Bar dataKey="run" fill="green"></Bar>
      </BarChart>
    </div>
  );
};

export default RcBarChart;
