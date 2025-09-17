const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="hover:bg-blue-400 p-2">
      <a className="text-xl font-medium" href={path}>{name}</a>
    </li>
  );
};

export default Link;
