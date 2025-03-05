import Item from "./Item";
import axios from "axios";

const ItemList = ({ items, setItems }) => {
  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`http://${import.meta.env.VITE_API_URI}/doors/${id}`);
      console.log("Delete Response:", response.data); // Log the delete response for debugging
      if (response.data.success) {
        // Update the state to remove the deleted item
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} deleteItem={deleteItem} />
        ))
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
};

export default ItemList;
