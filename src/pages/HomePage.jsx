import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const initialValues = {
  id: "",
  name: "",
  price: "",
};

const HomePage = () => {
  const [firebaseData, setFirebaseData] = useState([]);
  const [editForm, setEditForm] = useState(initialValues);

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "urunlerim"), {
        name: "Şapka",
        price: 400,
      });
      console.log(docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "urunlerim"));
      let users = [];
      querySnapshot.forEach((doc) => {
        const user = {
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
        };
        users.push(user);
      });
      setFirebaseData(users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (docId) => {
    try {
      await deleteDoc(doc(db, "urunlerim", docId));
      console.log("ürün silindi");
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    const productRef = doc(db, "urunlerim", editForm.id);
    try {
      await updateDoc(productRef, {
        name: editForm.name,
        price: Number(editForm.price),
      });
      console.log("ürün silindi");
      getData();
      setEditForm(initialValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <button onClick={addData}>Add to Firebase</button>
      <button onClick={getData}>Get from Firebase</button>
      {firebaseData.map((item) => (
        <div key={item.id} className="flex items-center gap-4 mt-4">
          <p>{item.name}</p>
          <b>{item.price} $</b>
          <button
            className="bg-blue-700"
            onClick={() =>
              setEditForm({ id: item.id, name: item.name, price: item.price })
            }
          >
            Edit
          </button>
          <button className="bg-red-700" onClick={() => deleteData(item.id)}>
            Delete
          </button>
        </div>
      ))}
      {editForm.id && (
        <div>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) =>
              setEditForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="number"
            value={editForm.price}
            onChange={(e) =>
              setEditForm((prev) => ({ ...prev, price: e.target.value }))
            }
          />
          <button className="bg-blue-600" onClick={updateData}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
