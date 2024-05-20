import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cardSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* <div className="w-72 m-5 ">
        <img src={props.image} alt={props.productName} />

        <div>
          <h5>{props.productName}</h5>
          <p>Rs. {props.price}/-</p>
          <button
            onClick={(e) =>
              dispatch(addItem({ name: props.productName, price: props.price }))
            }
            className="text-white px-5 py-2 font-bold text-xl rounded-lg bg-blue-600"
          >
            Add Cart
          </button>
        </div>
      </div> */}

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
        <a href="#">
          <img className="rounded-t-lg w-full" src={props.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.productName}
            </h5>
          </a>

          <button
            onClick={(e) =>
              dispatch(addItem({ name: props.productName, price: props.price }))
            }
            className="text-white px-5 py-2 font-bold text-xl rounded-lg bg-blue-600"
          >
            Add Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
