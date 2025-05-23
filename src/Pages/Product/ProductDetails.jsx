import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Loading from '../../Components/Shared/Loading/Loading';
import { getOneProduct } from '../../redux/Slices/Product-Slice/ProductCategoryReducer';
import ProductComments from './productDetailsComponents/ProductComments';
import ProductDetailsCard from './productDetailsComponents/ProductDetailsCard';
import ProductNavbar from './productDetailsComponents/ProductNavbar';
import RelatedProducts from './productDetailsComponents/RelatedProducts';

function ProductDetails() {
    const { id } = useParams();
    const { product, productLoading } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getOneProduct({ id }));
        }
    }, [dispatch, id]);

    return (
        <div>
            <Navbar />
            <ProductNavbar productCategory={product?.CategoryName} />
            {productLoading ? (
                <div className='flex justify-center items-center'>
                    <Loading />
                </div>
            ) : (
                <ProductDetailsCard product={product} />
            )}
            <ProductComments />
            {!productLoading && product?.CategoryId && (
                <RelatedProducts categoryId={product.CategoryId} />
            )}
            <Footer />
        </div>
    );
}

export default ProductDetails;
