const ProductBox = (props) =>
{
    let img = [
        {
            name: "cocooil",
            price: 30,
            img: '<img src="./Cosmetic_Bottle_-_Mockup_(3).jpg" alt="bottles"</img>'
        }
        ' price="30$"></img>',
        ' <img src="./AP_001_Retro_camera_D.jpg" alt="camera" name="polaroid" price="60$"></img>',
        ' <img src="./16236.jpg" alt="cosmetic" name="Maui" price="20$"></img>'
    ];

    return (
        < figure >
            <img src={img.name}></img>
            <figcaption>{<span>{props.name}</span>}
            </figcaption>
            <p>{props.price}</p>
            <button className="buybutton">BUY NOW</button>
        </figure >
    );
}

export default ProductBox;