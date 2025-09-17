const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="hover:bg-blue-400">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
