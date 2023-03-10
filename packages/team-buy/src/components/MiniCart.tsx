import {useBroadcast} from "./useBroadcast";

export interface MiniCartProps {
}

const MiniCart = ({}: MiniCartProps) => {
  const [articles] = useBroadcast('articles-in-mini-cart', 0)

  return (
    <div className={'shared-class-name'}>
      Artikel im Warenkorb: {articles}
    </div>
  )
}

export default MiniCart
