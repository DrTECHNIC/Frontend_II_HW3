import ReactECharts from "echarts-for-react";

function getColorById(id: number) {
    const hue = (id * 137) % 360;
    return `hsl(${hue}, 70%, 55%)`;
}

export function SalesBarChart({ data }: any) {
    return (
        <ReactECharts
            style={{ height: "100%", width: "100%" }}
            option={{
                title: { text: "Продажи по товарам" },
                tooltip: { trigger: "axis" },
                xAxis: {
                    type: "category",
                    data: data.map((i: any) => i.name),
                    axisLabel: { show: false},
                },
                yAxis: { type: "value" },
                series: [
                    {
                        type: "bar",
                        data: data.map((i: any) => ({
                            value: i.sales,
                            itemStyle: {
                                color: getColorById(i.id),
                                borderRadius: 6,
                            },
                        })),
                    },
                ],
                grid: {top: 60, bottom: 20, left: 30, right: 10}
            }}
        />
    );
}

export function SalesPieChart({ data }: any) {
    return (
        <ReactECharts
            style={{ height: "100%", width: "100%" }}
            option={{
                title: { text: "Доли продаж", left: "center" },
                tooltip: {
                    trigger: "item",
                    formatter: (p: any) => `
            <strong>${p.name}</strong><br/>
            Продано: ${p.value} шт.<br/>
            Доля: ${p.percent}%
          `,
                },
                series: [
                    {
                        type: "pie",
                        top: 20,
                        bottom: 10,
                        radius: ["45%", "80%"],
                        label: { show: false },
                        labelLine: { show: false },
                        data: data.map((i: any) => ({
                            value: i.sales,
                            name: i.name,
                            itemStyle: {color: getColorById(i.id)},
                        })),
                        emphasis: {
                            scale: true,
                            scaleSize: 12,
                        },
                    },
                ],
                grid: {top: 60, bottom: 20, left: 30, right: 10}
            }}
        />
    );
}

export function RevenueChart({ data }: any) {
    return (
        <ReactECharts
            style={{ height: "100%", width: "100%" }}
            option={{
                title: { text: "Выручка по товарам" },
                tooltip: { trigger: "axis" },
                xAxis: {
                    type: "category",
                    data: data.map((i: any) => i.name),
                    axisLabel: { show: false},
                },
                yAxis: { type: "value" },
                series: [
                    {
                        type: "bar",
                        data: data.map((i: any) => ({
                            value: i.price * i.sales,
                            itemStyle: {
                                color: getColorById(i.id),
                                borderRadius: 6,
                            },
                        })),
                    },
                ],
                grid: {top: 60, bottom: 20, left: 30, right: 10}
            }}
        />
    );
}

export function CategoryBarChart({ data }: any) {
    const grouped: Record<string, number> = {};

    data.forEach((item: any) => {
        const category = item.category.trim().toLowerCase(); // 👈 нормализация
        if (!grouped[category]) {grouped[category] = 0;}
        grouped[category] += item.sales;
    });

    const categories = Object.keys(grouped).map(
        (c) => c.charAt(0).toUpperCase() + c.slice(1)
    );

    const values = Object.values(grouped);

    return (
        <ReactECharts
            style={{ height: "100%", width: "100%" }}
            option={{
                title: { text: "Продажи по категориям" },
                tooltip: { trigger: "axis" },
                xAxis: {
                    type: "category",
                    data: categories,
                    axisLabel: { show: false},
                },
                yAxis: { type: "value" },
                series: [
                    {
                        type: "bar",
                        data: values.map((value, index) => ({
                            value,
                            itemStyle: {
                                color: `hsl(${(index * 90) % 360}, 70%, 55%)`,
                                borderRadius: 6,
                            },
                        })),
                    },
                ],
                grid: {top: 60, bottom: 20, left: 30, right: 10}
            }}
        />
    );
}
