import { cn } from "@/lib/utils";

const SuccessOutlineIcon = ({ className }: { className?: string }) => {
  return (
    <span className={cn("block w-6 h-6 text-gray-500", className)}>
      <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.5" cy={12} r={9} stroke="currentColor" />
        <path d="M8.5 12L11.5 15L16.5 9" stroke="currentColor" />
      </svg>
    </span>
  );
};
export default SuccessOutlineIcon;
