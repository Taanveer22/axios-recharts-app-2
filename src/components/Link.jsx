const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li>
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
