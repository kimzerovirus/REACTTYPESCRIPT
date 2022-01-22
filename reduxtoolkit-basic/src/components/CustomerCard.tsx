import React from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  foods: string[];
}

function CustomerCard({ id, name, foods }: CustomerCardType) {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = React.useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food,i) => (
            <p key={i}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input onChange={(e) => setCustomerFoodInput(e.target.value)} />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
