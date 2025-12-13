"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const isFirstLoad = useRef(true);

    useEffect(() => {
        // ⛔ Skip loader on first visit
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        // ✅ Show loader on route change
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);

        return () => clearTimeout(timer);
    }, [pathname]);

    return loading ? <Loader /> : null;
}
