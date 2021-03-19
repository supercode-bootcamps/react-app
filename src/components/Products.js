import ProductBox from './ProductBox';

const MyProducts = (props) =>
{


    return (

        <section className="products">
            <ProductBox name="Cocooil" price="30$"></ProductBox>
            <ProductBox name="Polaroid" price="60$"></ProductBox>
            <ProductBox name="Maui Moisture" price="20$"></ProductBox>
        </section >
    );
}

export default MyProducts;