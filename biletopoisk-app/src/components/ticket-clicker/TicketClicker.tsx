"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { cartActions, MAX_TICKETS } from "@/store/features/cart";
import {
  selectTicketAmount,
  useAppDispatch,
  useAppSelector,
} from "@/store/features/cart/selector";
import ModalWrapper from "@/components/UI/modal-wrapper/ModalWrapper";
import RemoveTicketWindow from "@/components/remove-ticket-window/RemoveTicketWindow";
import RemoveTicketButton from "@/components/remove-ticket-button/RemoveTicketButton";

interface Props {
  addRemover?: boolean;
  movieId: string;
}

const TicketClicker = ({ addRemover, movieId }: Props) => {
  const [removeTicketModal, setRemoveTicketModal] = useState(false);
  const ticketsAmount = useAppSelector((state) =>
    selectTicketAmount(state, movieId)
  );
  const dispatch = useAppDispatch();

  function decrement() {
    if (addRemover && ticketsAmount === 1) {
      setRemoveTicketModal(true);
    } else if (ticketsAmount > 0) {
      dispatch(cartActions.decrement(movieId));
    }
  }

  function increment() {
    if (ticketsAmount < MAX_TICKETS) {
      dispatch(cartActions.increment(movieId));
    }
  }

  return (
    <>
      <div className={"clickerContainer"}>
        <button
          disabled={ticketsAmount < 1}
          className={classNames("clickerButton", "minus")}
          onClick={decrement}
        />
        <p className={"amountText"}>{ticketsAmount}</p>
        <button
          disabled={ticketsAmount >= MAX_TICKETS}
          className={classNames("clickerButton", "plus")}
          onClick={increment}
        />
        {addRemover && (
          <div style={{ marginLeft: "1rem" }}>
            <RemoveTicketButton
              onClick={() => {
                setRemoveTicketModal(true);
              }}
            />
          </div>
        )}
      </div>

      {removeTicketModal && (
        <ModalWrapper
          visible={removeTicketModal}
          setVisible={setRemoveTicketModal}
        >
          <RemoveTicketWindow
            movieId={movieId}
            closeModal={() => setRemoveTicketModal(false)}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default TicketClicker;
