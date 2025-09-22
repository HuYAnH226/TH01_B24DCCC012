import React, { useState } from "react";
import ToDoList from "./component/ToDoList/ToDoList";
import ColorPicker from "./component/ColorPicker/ColorPicker";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import RenderPost from "./component/RenderPost/RenderPost";
import Quiz from "./component/Quiz/Quiz";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            background:
              "linear-gradient(135deg, #ed1717ff 100%, #ed1717ff 100%)",
            padding: "15px 30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          ></Link>

          <Link
            to="/ToDoList"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            bài 1
          </Link>

          <Link
            to="/ColorPicker"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            bài 2
          </Link>

          <Link
            to="/ShoppingCart"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            bài 3
          </Link>

          <Link
            to="/RenderPost"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            bài 4
          </Link>

          <Link
            to="/Quiz"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              padding: "12px 20px",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            bài 5
          </Link>
        </nav>

        <Routes>
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/ColorPicker" element={<ColorPicker />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/RenderPost" element={<RenderPost />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
