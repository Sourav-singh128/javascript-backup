const List = ({ data }) => {
  return (
    <ul>
      {data.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </ul>
  );
};

export default List;
