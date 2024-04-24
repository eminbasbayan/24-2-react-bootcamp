import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ allowedRoles }) => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserRole(user.uid);
      } else {
        navigate("/auth/login");
      }
    });

    const fetchUserRole = async (uid) => {
      const userDocRef = doc(db, "users", uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUserRole(docSnap.data().role);
        if (!allowedRoles.includes(docSnap.data().role)) {
          navigate("/unauthorized");
        }
      } else {
        console.error("No user data available");
        navigate("/auth/login");
      }
    };

    return () => unsubscribe(); // Clean up the subscription
  }, [navigate, allowedRoles]);

  return userRole ? <Outlet /> : <p>Loading...</p>;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array.isRequired,
};

export default ProtectedRoute;