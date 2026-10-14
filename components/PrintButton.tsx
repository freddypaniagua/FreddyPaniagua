"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-ink px-4 py-2 text-sm text-ink hover:bg-ink hover:text-paper print:hidden"
    >
      Print
    </button>
  );
}
