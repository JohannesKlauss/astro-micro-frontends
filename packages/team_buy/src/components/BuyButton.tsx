import {useBroadcast} from "./useBroadcast";
import "@ui5/webcomponents/dist/Button.js";

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
      <ui5-button onClick={() => setArticles(articles + 1)} className={'shared-class-name'}>
        Buy SKU {skuId} for {price} Euros.
      </ui5-button>
    </div>
  )
}

export default BuyButton
