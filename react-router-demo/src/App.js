import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import RequireAuth from "./utils/RequireAuth";
import { AuthProvider } from "./utils/auth";
// import About from "./components/About";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        {/* 이렇게 입력시 현재 url에 /about을 붙인 곳으로 이동 *단 about앞에 /about을 붙이게되면 진짜 /about으로 이동되니 현재 기준으로 하려면 앞에 슬래쉬를 빼줘야함 */}
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          {/* index를 안해주면 클릭되지 않은상태로 Products 컴포넌트가 나온다 */}
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
