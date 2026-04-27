import { Layout as AntLayout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/layout.css";

const { Header, Content } = AntLayout;

export default function Layout() {
    return (
        <AntLayout>
            <Header className="header">
                <Menu theme="dark" mode="horizontal" style={{ overflowX: "auto" }}>
                    <Menu.Item key="1">
                        <Link to="/">Главная</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="content">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Outlet />
                </motion.div>
            </Content>
        </AntLayout>
    );
}
