import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FirebaseProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newProductName, setNewProductName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      fetchProducts(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  async function fetchCategories() {
    const querySnapshot = await getDocs(collection(db, "categories"));
    let loadedCategories = [];
    querySnapshot.forEach((doc) => {
      loadedCategories.push({ id: doc.id, ...doc.data() });
    });
    setCategories(loadedCategories);
    if (loadedCategories.length > 0) {
      setSelectedCategoryId(loadedCategories[0].id); // İlk kategoriyi default olarak seç
    }
  }

  async function addCategory() {
    if (newCategoryName.trim() !== "") {
      await addDoc(collection(db, "categories"), { name: newCategoryName });
      fetchCategories();
      setNewCategoryName("");
    }
  }

  async function addProduct() {
    if (newProductName.trim() !== "" && selectedCategoryId) {
      await addDoc(collection(db, "products"), {
        name: newProductName,
        categoryId: doc(db, "categories", selectedCategoryId),
      });
      fetchProducts(selectedCategoryId);
      setNewProductName("");
    }
  }

  async function fetchProducts(categoryId) {
    const q = query(
      collection(db, "products"),
      where("categoryId", "==", doc(db, "categories", categoryId))
    );
    const querySnapshot = await getDocs(q);
    let loadedProducts = [];
    querySnapshot.forEach((doc) => {
      loadedProducts.push({ id: doc.id, ...doc.data() });
    });
    setProducts(loadedProducts);
  }

  return (
    <div className="p-4">
      <div>
        <input
          type="text"
          placeholder="Add new category"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Add Category
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <select
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
          className="border p-2 rounded shadow"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add new product"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Add Product
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Products</h2>
        {products.map((product) => (
          <div key={product.id} className="mt-2 p-2 border rounded shadow">
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirebaseProducts;