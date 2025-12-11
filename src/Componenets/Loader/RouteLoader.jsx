"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";


export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    // Initial load
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800); // small delay for polish
        return () => clearTimeout(timer);
    }, []);

    // On route change
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [pathname]);

    return loading ? <Loader /> : null;
}
