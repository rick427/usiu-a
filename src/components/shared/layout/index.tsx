import { Outlet, ScrollRestoration } from 'react-router';

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration/>
        </>
    )
}
