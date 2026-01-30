import { Product } from '@/types';
import { View, Text } from 'react-native';

interface ProductsGridProps {
    isLoading: boolean,
    isError: boolean,
    products: Product[]
}

const ProductsGrid = ({products, isLoading, isError}: ProductsGridProps) => {
    const handleAddToCart = () => {};


  return (
    <View>
      <Text>ProductsGrid</Text>
    </View>
  )
}

export default ProductsGrid