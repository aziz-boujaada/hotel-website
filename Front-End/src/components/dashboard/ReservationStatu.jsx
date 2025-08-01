// Import necessary icons and libraries
import {
  faPen,
  faCheckCircle,
  faTrashAlt,
  faXmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

import FormModal from "../Forms/FormModal";

// Close button at the top right of the modal
function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close modal"
      className="absolute right-0 top-0 z-50 text-white text-2xl bg-slate-800 px-3 py-2 hover:text-red-500"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
}

export default function BookingState({
  statusOpen,
  onClose,
  bookings,
  onOpenToModify,
  setSelectToModify,
  selectToModify,
  children,
}) {
  // If modal is not open, render nothing
  if (!statusOpen) return null;

  // Create a local copy of bookings with additional state and ShowAction flag
  const [LocalBookings, setLocalBookings] = useState(
    bookings.map((booking) => ({
      ...booking,
      state: "Pending",
      ShowAction: true,
    }))
  );

  // On first render or when bookings change, sync with localStorage if available
  useEffect(() => {
    const UpdateBookings = bookings.map((booking) => {
       
      const storedState = localStorage.getItem(`saveState ${booking.email}`);
      if (storedState) {
        const parsed = JSON.parse(storedState);
        return {
          ...booking,
          state: parsed.state || "pending",
          ShowAction: parsed.state == "pending",
        };
      }
      return {
        ...booking,
        state: "pending",
        ShowAction: true,
      };
    });
    setLocalBookings(UpdateBookings);
  }, [bookings]);

  // Handle Confirm action: update state, localStorage, and send PUT request
  const handleConfirm = async (index) => {
    const Update = [...LocalBookings];
    Update[index].state = "Confirmed";
    Update[index].ShowAction = false;
    setLocalBookings(Update);

    const updatedBooking = {
      email: Update[index].email,
      state: Update[index].state,
    };

    localStorage.setItem(
      `saveState ${Update[index].email}`,
      JSON.stringify({
        state: Update[index].state,
        ShowAction: Update[index].ShowAction,
      })
    );

    try {
      const response = await axios.put(
        "https://azizboujaada.infinityfreeapp.com/Back-End/reservations.php",
        JSON.stringify(updatedBooking),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      if (result.success) {
        console.log(result);
      }
    } catch (error) {
      console.error("error confirmed", error);
      alert("failed connection to the server");
    }
  };

  // Handle Delete action: same process as confirm but mark as "Deleted"
  const handleDelete = async (index) => {
    const Update = [...LocalBookings];
    Update[index].state = "Deleted";
    Update[index].ShowAction = false;
    setLocalBookings(Update);

    const updatedBooking = {
      email: Update[index].email,
      state: Update[index].state,
    };

    localStorage.setItem(
      `saveState ${Update[index].email}`,
      JSON.stringify({
        state: Update[index].state,
        ShowAction: Update[index].ShowAction,
      })
    );

    try {
      const response = await axios.put(
        "https://azizboujaada.infinityfreeapp.com/Back-End/reservations.php",
        JSON.stringify(updatedBooking),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      if (result.success) {
        console.log(result);
      }
    } catch (err) {
      console.error("error DELETED", err);
      alert("failed connection to the server");
    }
  };

  // Handle Modify action: open modal and pass selected booking
  const handleModify = (index) => {
    const selectedBooking = LocalBookings[index];
    setSelectToModify(selectedBooking);
    onOpenToModify(selectedBooking);
    console.log("setFormModal is", onOpenToModify);
    console.log("select To modify", selectToModify);
  };

  return (
    <>
      <div className="bg-slate-700 fixed inset-0 lg:inset-20 z-40 mx-0 lg:mx-4 overflow-auto p-4 lg:p-12">
        <CloseButton onClick={onClose} />

        {/* Bookings table */}
        <table className="w-full text-white text-center">
          <thead className="bg-slate-800 ">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Adult</th>
              <th className="p-3">Children</th>
              <th className="p-3">Room Type</th>
              <th className="p-3">Check-in</th>
              <th className="p-3">Check-out</th>
              <th className="p-3">State</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {LocalBookings && LocalBookings.length > 0 ? (
              LocalBookings.map((booking, index) => (
                <tr key={index} className="border-b border-slate-600">
                  <td className="p-6">{booking.id}</td>
                  <td className="p-6">{booking.username}</td>
                  <td className="p-6">{booking.email}</td>
                  <td className="p-6">{booking.adult}</td>
                  <td className="p-6">{booking.children}</td>
                  <td className="p-6">{booking.room_type}</td>
                  <td className="p-6">{booking.check_in}</td>
                  <td className="p-6">{booking.check_out}</td>
                  <td>
                    <h1
                      className={`cursor-pointer p-1 rounded-full flex items-center justify-center gap-1 ${
                        booking.state == "Confirmed"
                          ? "bg-green-500"
                          : booking.state == "Deleted"
                          ? "bg-red-500"
                          : "bg-orange-400"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={
                          booking.state == "Confirmed"
                            ? faCheckCircle
                            : booking.state == "Deleted"
                            ? faTrashAlt
                            : faClock
                        }
                      />
                      <span>{booking.state || "Pending"}</span>
                    </h1>
                  </td>

                  {/* Show action buttons only if ShowAction is true */}
                  {booking.ShowAction && (
                    <td className="p-6">
                      <ul className="flex gap-10 justify-center items-center">
                        <li
                          onClick={() => handleConfirm(index)}
                          className="cursor-pointer text-green-500 relative group transition-transform hover:scale-110"
                        >
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[100px] text-center bg-gray-900 text-white text-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Confirm
                          </span>
                        </li>
                        <li
                          onClick={() => handleModify(index)}
                          className="cursor-pointer text-yellow-500 relative group transition-transform hover:scale-110"
                        >
                          <FontAwesomeIcon icon={faPen} />
                          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[100px] text-center bg-gray-900 text-white text-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Modify
                          </span>
                        </li>
                        <li
                          onClick={() => handleDelete(index)}
                          className="cursor-pointer text-red-400 relative group transition-transform hover:scale-110"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[100px] text-center bg-gray-900 text-white text-sm p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Delete
                          </span>
                        </li>
                      </ul>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="p-6 text-center">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Include child components like modals */}
        {children}
      </div>
    </>
  );
}
