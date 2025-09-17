import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
const RcLineChart = () => {
  const studentsMarks = [
    {
      id: "1",
      name: "Student 1",
      physics: 85,
      chemistry: 78,
      math: 92,
    },
    {
      id: "2",
      name: "Student 2",
      physics: 72,
      chemistry: 88,
      math: 95,
    },
    {
      id: "3",
      name: "Student 3",
      physics: 91,
      chemistry: 84,
      math: 79,
    },
    {
      id: "4",
      name: "Student 4",
      physics: 68,
      chemistry: 75,
      math: 82,
    },
    {
      id: "5",
      name: "Student 5",
      physics: 95,
      chemistry: 89,
      math: 97,
    },
    {
      id: "6",
      name: "Student 6",
      physics: 81,
      chemistry: 92,
      math: 86,
    },
    {
      id: "7",
      name: "Student 7",
      physics: 77,
      chemistry: 69,
      math: 84,
    },
    {
      id: "8",
      name: "Student 8",
      physics: 88,
      chemistry: 91,
      math: 93,
    },
    {
      id: "9",
      name: "Student 9",
      physics: 63,
      chemistry: 71,
      math: 68,
    },
    {
      id: "10",
      name: "Student 10",
      physics: 94,
      chemistry: 86,
      math: 90,
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">
        Students phy, che, math marks data
      </h1>
      <LineChart width={800} height={400} data={studentsMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <CartesianGrid></CartesianGrid>
        <Line dataKey="physics" stroke="red" type="monotone"></Line>
        <Line dataKey="chemistry" stroke="violet"></Line>
        <Line dataKey="math" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default RcLineChart;
