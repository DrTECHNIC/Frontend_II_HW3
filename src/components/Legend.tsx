import { Card, Space, Typography } from "antd";

const { Text } = Typography;

export default function Legend({ data }: any) {
    if (!data) return null;

    return (
        <Card className="legend-card compact" bodyStyle={{ padding: 8 }}>
            <Space wrap size={[8, 6]}>
                {data.map((item: any) => (
                    <Space key={item.id} size={6} align="center">
                        <Text
                            style={{
                                width: 10,
                                height: 10,
                                background: `hsl(${(item.id * 137) % 360}, 70%, 55%)`,
                                display: "inline-block",
                                borderRadius: 2,
                            }}
                        />
                        <Text className="legend-text">{item.name}</Text>
                    </Space>
                ))}
            </Space>
        </Card>
    );
}