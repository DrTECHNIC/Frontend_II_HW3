import { Card, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/card.css";

const { Text } = Typography;

export default function ProductCard({ product }: any) {
    return (
        <motion.div className="product-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
        >
            <Card title={product.name}>
                <Text>Цена: {product.price}₽</Text>
                <br/>
                <Text>Продажи: {product.sales}</Text>
                <br/>
                <Link to={`/dashboard/product/${product.id}`}>Подробнее</Link>
            </Card>
        </motion.div>
    );
}
