import {useBroadcast} from "./useBroadcast";
import {ReactNode, useState} from "react";
import type {MiniCartMessage} from "./types";

export interface MiniCartProps {
  disclaimer: ReactNode
}

const MiniCart = ({disclaimer}: MiniCartProps) => {
  const [cart, setCart] = useState({
    articles: 0,
    price: 0,
  });

  useBroadcast<MiniCartMessage>('mini-cart', e => {
    console.log('MiniCart received message', e);

    switch (e.data.type) {
      case 'ADD_TO_CART':
        setCart(prev => ({
          articles: prev.articles + 1,
          price: prev.price + e.data.price,
        }))
        break;
    }
  })

  return (
    <div className={'shared-class-name'}>
      <h4>Team Buy</h4>
      <p>
        Artikel im Warenkorb: {cart.articles} für {cart.price}€
      </p>

      Inject something from Team find:
      {disclaimer}
    </div>
  )
}

export default MiniCart
