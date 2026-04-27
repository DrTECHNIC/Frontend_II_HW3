import { Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Title } = Typography;

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
        >
            <Title>Панель аналитики</Title>
            <Link to="/dashboard">
                <Button type="primary">Перейти в Dashboard</Button>
            </Link>
        </motion.div>
    );
}
