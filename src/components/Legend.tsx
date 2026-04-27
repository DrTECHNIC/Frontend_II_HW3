import { Card, Space } from "antd";

export default function Legend({ data }: any) {
    if (!data) return null;

    return (
        <Card className="legend-card compact" bodyStyle={{ padding: 8 }}>
            <Space wrap size={[8, 6]}>
                {data.map((item: any) => (
                    <Space key={item.id} size={6} align="center">
            <span
                className="legend-color"
                style={{
                    background: `hsl(${(item.id * 137) % 360}, 70%, 55%)`,
                }}
            />
                        <span className="legend-text">{item.name}</span>
                    </Space>
                ))}
            </Space>
        </Card>
    );
}
