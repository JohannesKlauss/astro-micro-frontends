import {useBroadcast} from "./useBroadcast";
import './styles.css'
import type {MiniCartMessage} from "./types";

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
      <p>This is a react component</p>
      <button onClick={onClick} className={'shared-class-name'}>
        Buy SKU {skuId} for {price}€.
      </button>
    </div>
  )
}

export default BuyButton
