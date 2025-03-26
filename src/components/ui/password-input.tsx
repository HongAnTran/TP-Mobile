import React, { useState } from "react";
import { Input, InputProps } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        return (
            <div className="relative w-full">
                <Input
                    {...props}
                    ref={ref}
                    type={showPassword ? "text" : "password"}

                />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeClosedIcon className="h-5 w-5" /> : <EyeOpenIcon className="h-5 w-5" />}
                </Button>
            </div>
        );
    }
)

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };