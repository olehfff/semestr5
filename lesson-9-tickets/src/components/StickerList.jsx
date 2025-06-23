import stickers from '../stickers.json' 
import Sticker from './Sticker'
export default function Stickers(){

return(
    <div>
        {stickers.map((sticker, index) => (
            <Sticker key={index} img={sticker.img} label={sticker.label}/>
        ))}
    </div>
)
}