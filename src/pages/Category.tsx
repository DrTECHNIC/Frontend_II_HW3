import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { useStore } from "../app/store";
import { CategoryBarChart } from "../components/Chart";

const { Title } = Typography;

export default function Category() {
    const { category } = useParams();
    const products = useStore((state: any) => state.products);
    const filtered = products.filter((p: any) => p.category === category);

    return (
        <>
            <Title level={2}>Категория: {category}</Title>
            <CategoryBarChart data={filtered} />
        </>
    );
}
