import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/reservations/crossmark.svg";
import check from "../../../assets/reservations/checkmark.svg";
import LikeButton from "components/LikeButton/LikeButton";
import Button from "components/Button/Button";
import { UserContext } from "contexts/UserContext/UserContext";
import "./Item.scss";

const DeviceItem = ({ number, deviceData }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [isAllBooked, setIsAllBooked] = useState(false); //needed this to be a state for redrawing
  const isBooked = userData.reservations?.devices.some(
    (device) => device.id === deviceData.id
  );

  const handleReservations = () => {
    if (deviceData.bookedUntil?.length + 1 === deviceData.quantity) {
      if (!isBooked) {
        setIsAllBooked(true);
      } else {
        setIsAllBooked(false);
      }
    } else if (deviceData.bookedUntil?.length === deviceData.quantity) {
      setIsAllBooked(true);
    }

    setUserData((currentUserData) => {
      const nextUserData = { ...currentUserData };
      if (!isBooked) {
        nextUserData.reservations.devices.push({ id: deviceData.id });
      } else {
        nextUserData.reservations.devices = currentUserData.reservations.devices.filter(
          (item) => item.id !== deviceData.id
        );
      }
      return nextUserData;
    });
  };

  return (
    <>
      {deviceData && userData?.reservations?.devices && (
        <li className="item-card">
          <figure className="image-container">
            <img
              className="image-container__image"
              src={deviceData.image}
              alt=""
            />
          </figure>
          <div className="item-card__info-wrapper">
            <div className="item-card__brand">{deviceData.brand}</div>
            <div className="item-card__title">
              <span className="item-card__title-text">{deviceData.name}</span>
            </div>
            {deviceData.bookedUntil?.length === deviceData.quantity ||
            isAllBooked ? (
              <div className="flexbox">
                <figure className="item-card__mark--cross">
                  <img className="item-card__mark" src={cross} alt="" />
                </figure>
                <div className="item-card__availability">booked</div>
              </div>
            ) : (
              <div className="flexbox">
                <figure className="item-card__mark--check">
                  <img className="item-card__mark" src={check} alt="" />
                </figure>
                <div className="item-card__availability">available</div>
              </div>
            )}
            <div className="item-card__quantity">
              quantity: {deviceData.quantity}
            </div>
          </div>
          <div className="corner-buttons">
            <button className="corner-buttons__view-more">view more</button>
            <Button
              size="medium"
              id={`booking-button${number}`}
              onClick={handleReservations}
              disabled={
                deviceData.quantity === 0 ||
                deviceData.bookedUntil?.length === deviceData.quantity
              }
            >
              {isBooked ? "return" : "book"}
            </Button>
          </div>
          <div className="item-card__heart">
            <LikeButton itemDataAccessor="devices" itemId={deviceData.id} />
          </div>
        </li>
      )}
    </>
  );
};

DeviceItem.propTypes = {
  handleBookedUntil: PropTypes.func,
  deviceData: PropTypes.object,
  number: PropTypes.number,
};

export default DeviceItem;
