import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const HomePage = () => {
  const [firebaseData, setFirebaseData] = useState([]);

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "urunlerim"), {
        name: "Tişört",
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

  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <button onClick={addData}>Add to Firebase</button>
      <button onClick={getData}>Get from Firebase</button>
      {firebaseData.map((item) => (
        <div key={item.id} className="flex items-center gap-4 mt-4">
          <p>{item.name}</p>
          <b>{item.price} $</b>
          <button className="bg-red-700" onClick={() => deleteData(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
