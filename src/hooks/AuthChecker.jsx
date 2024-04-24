import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { clearUser, setUser } from "../redux-toolkit/slices/userSlice";
import { useDispatch } from "react-redux";

export function useAuthChecker() {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user", user.email);
        const simpleUser = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
        };
        dispatch(setUser(simpleUser));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  return null;
}
