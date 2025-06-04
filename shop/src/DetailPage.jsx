import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Nav } from "react-bootstrap";
import mockData from "./mock/data"; // mockData를 가져옵니다.

// import 할것
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "./store";
function DetailPage() {
  let { id } = useParams();
  console.log(id); // id는 문자열로 반환됨

  const [visible, setVisible] = useState(true);
  const [input, setInput] = useState(0);
  const [tab, setTab] = useState(0);
  const [action, setAction] = useState("");

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000);
    console.log(1);

    let clean = setTimeout(() => {
      setAction("end");
    }, 100);

    return () => {
      clearTimeout(clean);
      setAction("");
      console.log(2);
      clearTimeout(a); // 컴포넌트가 언마운트되기 전에 타이머를 정리합니다.
    };
  }, []);
  // 디펜던시 없을떄는 mount, update 될 때만.
  // [] 이거는 mount 될 때만 실행됨.
  // return () => { 이거안에 하면,, useEffect 실행되기전에 실행된다고 ?

  useEffect(() => {
    if (isNaN(input)) {
      alert("숫자만 입력하세요");
    }
  }, [input]);

  return (
    <div className={`container start ${action}`}>
      {visible ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <h4 className="pt-5">{mockData[id].title}</h4>
          <p>{mockData[id].content}</p>
          <p>{mockData[id].price} 원</p>
          <button
            onClick={() => {
              dispatch(
                addCart({
                  id: mockData[id].id,
                  name: mockData[id].title,
                  count: 1,
                })

                // addCart({
                //   id: 1,
                //   title: "제발",
                //   count: 1,
                // })
              );
              // { id: 1, name: "grey yordan", count: 1 },
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </div>
  );
}

function TabContent(props) {
  // if (props.tab == 0) {
  //   return <div>내용0</div>;
  // } else if (props.tab == 1) {
  //   return <div>내용1</div>;
  // } else if (props.tab == 2) {
  //   return <div>내용2</div>;
  // }
  const [action, setAction] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setAction("end");
    }, 100);

    return () => {
      clearTimeout(a); // 컴포넌트가 언마운트되기 전에 타이머를 정리합니다.
      setAction("");
    };
  }, [props.tab]);
  return (
    <div className={`start ${action}`}>
      {props.tab === 0 && <div>내용0</div>}
      {props.tab === 1 && <div>내용1</div>}
      {props.tab === 2 && <div>내용2</div>}
    </div>
  );
}
export default DetailPage;
