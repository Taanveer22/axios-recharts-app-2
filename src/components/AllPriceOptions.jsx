import PriceOption from "./PriceOption";

const AllPriceOptions = () => {
  const allOptions = [
    {
      id: 1,
      name: "Basic Fitness",
      features: ["Cardio Equipment", "Free Weights"],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Gym",
      features: ["Cardio Equipment", "Strength Training", "Locker Rooms"],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Fitness",
      features: [
        "Pool Access",
        "Sauna",
        "Group Classes",
        "Personal Trainer Discount",
      ],
      price: 79.99,
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center my-3">Best prices in the town</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default AllPriceOptions;
