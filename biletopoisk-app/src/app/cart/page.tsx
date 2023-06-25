import classes from "./CartPage.module.scss";
import React from "react";
import Tickets from "@/components/tickets/Tickets";
import CartProvider from "@/components/tickets-provider/CartProvider";
import CartTotal from "@/components/cart-total/CartTotal";

const Page = () => {
  return (
    <div className={classes.cartPageContainer}>
      <CartProvider>
        <Tickets addRemovers={true} />
        <CartTotal />
      </CartProvider>
    </div>
  );
};

export default Page;
