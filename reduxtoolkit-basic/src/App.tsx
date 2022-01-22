import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation, addReservationAsync } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return; //유효성체크
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput(""); //clear
  };

  const handleAddReservationsAsync = () => {
    dispatch(addReservationAsync());
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, i) => (
                <ReservationCard name={name} index={i} key={i}/>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
            <button onClick={handleAddReservationsAsync}>Async Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, i) => (
            <CustomerCard key={i} id={customer.id} name={customer.name} foods={customer.food}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
