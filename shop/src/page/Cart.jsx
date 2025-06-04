import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../store";
import { changeAge } from "../store/userSlice"; // userSlice 에서 changeAge 함수 가져옴.

function Cart() {
  // redux store 가져옴.
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch(); // store.js  에 요청보내주는 함수
  console.log("store 객체 확인:", state);
  console.log("현재 cart 상태:", state.cart);

  return (
    <div>
      {state.user.name}님 ({state.user.age})의 장바구니
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        나이+1
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id + 1}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>{state.cart[0].name}</td>
            <td>{state.cart[0].count}</td>
            <td>
              <button>변경</button>>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}
export default Cart;
