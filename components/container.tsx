import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-r border-l flex-col min-h-screen max-w-[1100px] mx-auto bg-white">
      {children}
    </div>
  );
}
