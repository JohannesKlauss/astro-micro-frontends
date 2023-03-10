import {useBroadcast} from "./useBroadcast";

import './styles.css'

export interface BuyButtonProps {
  skuId: string
  price: number
}

const BuyButton = ({skuId, price}: BuyButtonProps) => {
  const [articles, setArticles] = useBroadcast('articles-in-mini-cart', 0)

  return (
    <div>
      <p>This is a react component</p>
      <button onClick={() => setArticles(articles + 1)} className={'shared-class-name'}>
        Buy SKU {skuId} for {price} Euros.
      </button>
    </div>
  )
}

export default BuyButton
