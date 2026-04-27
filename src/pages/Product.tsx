import { useParams } from "react-router-dom";
import { Typography, Card } from "antd";
import { useStore } from "../app/store";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

export default function Product() {
    const { id } = useParams();
    const products = useStore((state: any) => state.products);
    const product = products.find((p: any) => p.id === Number(id));

    if (!product) return <Title>Не найдено</Title>;

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
        >
            <Card title={product.name}>
                <Title level={3}>Детальная информация</Title>
                <Text>Категория: {product.category}</Text>
                <br/>
                <Text>Цена: {product.price}₽</Text>
                <br/>
                <Text>Продажи: {product.sales}</Text>
            </Card>
        </motion.div>
    );
}
