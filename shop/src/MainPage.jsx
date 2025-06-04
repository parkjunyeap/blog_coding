import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import axios from "axios";
import { useState } from "react";
import mockData from "./mock/data";

function MainPage() {
  const [items, setItems] = useState(mockData);
  const [count, setCount] = useState(1);
  const [loding, setLoading] = useState(false);

  return (
    <>
      <Container>
        <Row>
          {items.map((item, index) => {
            return (
              <Item
                key={item.id}
                title={item.title}
                content={item.content}
                price={item.price}
                i={item.id}
              />
            );
          })}
        </Row>
      </Container>

      {count < 3 && (
        <button
          onClick={() => {
            setCount(count + 1);
            // 로딩중 ui 띄우기
            setLoading(true);
            {
              loding ? <div>로딩중</div> : null;
            }
            console.log("count 값:", count);
            axios
              .get(`https://codingapple1.github.io/shop/data${count + 1}.json`)
              .then((result) => {
                console.log(result.data);
                let copy = [...items, ...result.data];
                setItems(copy); // items 상태 업데이트
                // 로딩중 ui 숨기기
                setLoading(false);
              })
              .catch(() => {
                console.log("데이터를 가져오지 못했습니다.");
              });
          }}
        >
          버튼{" "}
        </button>
      )}
    </>
  );
}

function Item(props) {
  return (
    <Col sm>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="80%"
      />
      <h4>{props.title}</h4>
      <p> {props.content}</p>
      <p> {props.price}</p>
    </Col>
  );
}

export default MainPage;
