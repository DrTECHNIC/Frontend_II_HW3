import { Typography, Card, Space } from "antd";
import { useStore } from "../app/store";
import ProductCard from "../components/Card";
import {
    SalesBarChart,
    SalesPieChart,
    RevenueChart,
    CategoryBarChart,
} from "../components/Chart";
import Legend from "../components/Legend";
import "../styles/dashboard.css";
import { Layout } from "antd";

const { Title } = Typography;

function CategoryLegend({ data }: any) {
    const grouped: any = {};

    data.forEach((item: any) => {
        if (!grouped[item.category]) grouped[item.category] = 0;
        grouped[item.category] += item.sales;
    });

    const categories = Object.keys(grouped);

    return (
        <Card className="legend-card compact" bodyStyle={{ padding: 8 }}>
            <Space wrap size={[8, 6]}>
                {categories.map((cat: string, index: number) => (
                    <Space key={cat} size={6} align="center">
            <span
                className="legend-color"
                style={{
                    background: `hsl(${(index * 90) % 360}, 70%, 55%)`,
                }}
            />
                        <span className="legend-text">{cat}</span>
                    </Space>
                ))}
            </Space>
        </Card>
    );
}

export default function Dashboard() {
    const products = useStore((state: any) => state.products);

    return (
        <Space direction="vertical" size="large">
            <Title level={2}>Общая аналитика</Title>

            <Space wrap size="middle" className="cards">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </Space>

            <Space direction="vertical" size="middle" className="section">
                <Title level={3}>Аналитика по товарам</Title>

                <Layout.Content className="sticky-legend">
                    <Legend data={products} />
                </Layout.Content>

                <Space direction="vertical" size="middle" className="charts">
                    <Card className="chart-block">
                        <SalesBarChart data={products} />
                    </Card>

                    <Card className="chart-block">
                        <SalesPieChart data={products} />
                    </Card>

                    <Card className="chart-block">
                        <RevenueChart data={products} />
                    </Card>
                </Space>
            </Space>

            <Space direction="vertical" size="middle" className="charts">
                <Title level={3}>Аналитика по категориям</Title>

                <Layout.Content className="sticky-legend">
                    <CategoryLegend data={products} />
                </Layout.Content>

                <Space direction="vertical" size="middle" className="charts">
                    <Card className="chart-block">
                        <CategoryBarChart data={products} />
                    </Card>
                </Space>
            </Space>
        </Space>
    );
}
