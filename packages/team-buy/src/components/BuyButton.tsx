import {useBroadcast} from "./useBroadcast";
import './styles.css'
import type {MiniCartMessage} from "./types";
import "ui-pattern-lib"

export interface BuyButtonProps {
  skuId: string
  price: number
}

const BuyButton = ({skuId, price}: BuyButtonProps) => {
  const emit = useBroadcast<MiniCartMessage>('mini-cart', () => null)

  const onClick = () => {
    console.log('BuyButton emitted message', {type: 'ADD_TO_CART', skuId, price});

    emit({
      type: 'ADD_TO_CART',
      skuId,
      price,
    })
  }

  return (
    <div>
      <p>This is a react component including a button from the pattern lib</p>
      <ui-button onClick={onClick}>
        Buy SKU {skuId} for {price}€.
      </ui-button>
    </div>
  )
}

export default BuyButton
