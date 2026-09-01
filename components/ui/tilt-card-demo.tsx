"use client";

import { TiltCard } from "@/components/ui/tilt-card";

export function TiltCardDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0b] p-8">
      <TiltCard className="w-[340px] rounded-3xl border border-[rgba(245,197,24,0.2)] bg-[#171719] p-7 shadow-2xl">
        <div className="relative z-20">
          <div className="mb-16 flex items-center justify-between">
            <span className="rounded-full bg-[#f5c518] px-3 py-1 text-xs font-semibold text-black">
              Interactive
            </span>
            <span className="text-sm text-[#9a9a9f]">3D hover</span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">Tilt Card</h3>
          <p className="mt-3 text-sm leading-6 text-[#9a9a9f]">
            Move the cursor across the card to bend perspective and reveal the
            spotlight.
          </p>
        </div>
      </TiltCard>
    </div>
  );
}

export default TiltCardDemo;
