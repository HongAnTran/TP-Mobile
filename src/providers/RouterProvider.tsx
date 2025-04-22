"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const previousPath = useRef(pathname);

    useEffect(() => {
        if (previousPath.current !== pathname) {
            NProgress.start();
            previousPath.current = pathname;
            const timeout = setTimeout(() => {
                NProgress.done();
            }, 400);

            return () => clearTimeout(timeout);
        }
    }, [pathname]);

    return <>{children}</>;
};
