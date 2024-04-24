import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const HomePage = () => {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "urunlerim"), {
        name: "Şapka",
        price: 200,
      });
      console.log(docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <button onClick={addData}>Add to Firebase</button>
    </div>
  );
};

export default HomePage;
