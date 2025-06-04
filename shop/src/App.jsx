import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import DetailPage from "./DetailPage";
import MainPage from "./MainPage";
import mockData from "./mock/data";
import Cart from "./page/Cart";

function App() {
  let navigate = useNavigate();

  const [items, setItems] = useState(mockData);
  // Route 는 페이지 .
  return (
    // <div className="App">
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}

            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      {/* routes 는 app.jsx 에 있어야 유효한것인가 ?
       */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route
          path="/event"
          element={
            <div>
              <h4>오늘의 이벤트</h4>
              <Outlet />
            </div>
          }
        >
          <Route path="one" element={<h6> 첫 주문시 양배추즙 서비스</h6>} />
          <Route path="two" element={<h6> 생일기념 쿠폰받기</h6>} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<div> 없는 페이지입니다.</div>} />
      </Routes>
    </>
  );
}

export default App;
