const Item = ({ item, deleteItem }) => {
    return (
      <div>
        <h2>{item.name}</h2> {/* Make sure the property name is correct */}
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    );
  };
  
  export default Item;
  