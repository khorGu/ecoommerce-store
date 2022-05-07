import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation-bar/navigation.component";
import Shop from "./routes/shop/shop.component";
import Auth from "./routes/authentication/authentication.component";
import { setCurrentUser } from "./store/user/user.action";
import Checkout from "./routes/checkout/checkout.component";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
