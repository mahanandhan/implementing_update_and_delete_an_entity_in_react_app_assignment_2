import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

// Define the API URL
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]); // State to store items
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch items from the API on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URI);
        console.log("API Response:", response.data); // Log the full response for debugging
        if (response.data) {
          setItems(response.data); // Assuming 'data' contains the items
        } else {
          setError("No items found in the response.");
        }
      } catch (error) {
        setError("Failed to fetch items");
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false); // Set loading to false after the request is finished
      }
    };

    fetchItems();
  }, []);

  // If loading, show loading state
  if (loading) return <h1>Loading...</h1>;

  // If there's an error, show the error message
  if (error) return <h1>{error}</h1>;

  // Pass items and setItems to ItemList component
  return <ItemList items={items} setItems={setItems} />;
}

export default App;
