"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-ink hover:bg-teal/90 print:hidden"
    >
      Download PDF
    </button>
  );
}
