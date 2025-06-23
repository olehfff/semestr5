export default function Sticker({ img, label}) {
    return (
        <>
        <div className="sticker">
           <img src={img} alt={label} />
        </div>
        </>
    )
}