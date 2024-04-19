import { cn } from "@/lib/utils";

const SuccessIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-10 h-10 text-[#66CD15]", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 41 40"
        fill="none"
      >
        <circle cx="20.4297" cy="20" r="15" fill="currentColor" />
        <path
          d="M13.7624 20L18.7624 25L27.0957 15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};
export default SuccessIcon;
