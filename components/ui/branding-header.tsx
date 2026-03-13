"use client";

import Image from "next/image";

export function BrandingHeader() {
    return (
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-6 md:pt-6">
            <div className="relative flex items-start justify-between">
                <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
                    <div className="relative h-14 w-14 md:h-20 md:w-20">
                        <Image
                            src="/logos/karunya-color.png"
                            alt="Karunya Logo"
                            fill
                            className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                            priority
                        />
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">Institution</p>
                        <p className="mt-1 text-sm font-medium text-white/70">Karunya Institute</p>
                    </div>
                </div>

                <div className="pointer-events-auto flex items-center gap-3 md:gap-4">
                    <div className="hidden text-right md:block">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">Festival</p>
                        <p className="mt-1 text-sm font-medium text-white/70">Mindkraft</p>
                    </div>
                    <div className="relative h-14 w-14 md:h-20 md:w-20">
                        <Image
                            src="/logos/mindkraft-gear-white.svg"
                            alt="Mindkraft Logo"
                            fill
                            className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                        />
                    </div>
                </div>

                <div className="absolute inset-x-0 top-full mt-4 hidden h-px bg-gradient-to-r from-transparent via-white/18 to-transparent md:block" />
            </div>
        </div>
    );
}
