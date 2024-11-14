"use client";

export default function ListingCheckbox({
  checked,
  partiallyChecked,
  onClick,
}) {
  return (
    <button
      className={
        partiallyChecked || checked
          ? "listing__checkbox checked"
          : "listing__checkbox"
      }
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      {partiallyChecked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-minus"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      ) : checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ) : null}
    </button>
  );
}
