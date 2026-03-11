"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BrandingHeader() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const logoPath = currentTheme === "dark"
        ? "/CSE-Dept-Mindkraft/logos/mindkraft-white.png"
        : "/CSE-Dept-Mindkraft/logos/mindkraft-black.png";

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-start p-6 pointer-events-none">
            {/* Left Logo: Karunya */}
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl pointer-events-auto transition-transform hover:scale-105">
                <Image
                    src="/CSE-Dept-Mindkraft/logos/karunya-color.png"
                    alt="Karunya Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>

            {/* Right Logo: Mindkraft */}
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-2 shadow-2xl pointer-events-auto transition-transform hover:scale-105">
                <Image
                    src={logoPath}
                    alt="Mindkraft Logo"
                    width={100}
                    height={100}
                    className="object-contain transition-opacity duration-300"
                />
            </div>
        </div>
    );
}
