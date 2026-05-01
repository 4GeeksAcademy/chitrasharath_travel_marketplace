import { SearchIcon } from "@/components/shared/Icons";

interface DestinationSearchInputProps {
  placeholder: string;
  value: string;
  isFocused: boolean;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onEnter?: () => void;
  leftSlot?: React.ReactNode;
}

export const DestinationSearchInput = ({
  placeholder,
  value,
  isFocused,
  onChange,
  onFocus,
  onBlur,
  onEnter,
  leftSlot,
}: DestinationSearchInputProps) => (
  <label className="relative flex items-center w-full">
    {leftSlot}
    <span className="absolute left-5 top-1/2 -translate-y-1/2">
      <SearchIcon className="pointer-events-none h-4 w-4 text-[var(--text-secondary)]" />
    </span>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={(event) => {
        if (event.key === "Enter") onEnter?.();
      }}
      placeholder={placeholder}
      className={`h-14 w-full rounded-full border bg-white pr-4 pl-12 text-[15px] font-semibold text-[var(--text-primary)] shadow-[var(--shadow-primary)] transition outline-none ${
        isFocused
          ? "border-[var(--accent-primary)] ring-2 ring-[color:var(--accent-soft)]"
          : "border-[var(--border-soft)]"
      }`}
    />
  </label>
);
