"use client";

export default function ChatWidget() {
  return (
    <button
      aria-label="Open chat"
      className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full bg-black border-none cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.2)] z-[9999] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-all duration-300 select-none"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4.5 12.75l6 6 9-13.5" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" strokeOpacity="0.3"/>
      </svg>
    </button>
  );
}
