"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import "@/styles/nprogress-custom.css";
    

export default function TopProgressBar() {

    const pathname = usePathname();

    // NProgress settings
    NProgress.configure({
        showSpinner: false,
        trickleSpeed: 150,
    });

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
