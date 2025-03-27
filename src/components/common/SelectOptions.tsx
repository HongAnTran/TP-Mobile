"use client";

import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface CustomSelectProps {
    options: { label: string; value: string }[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const SelectOptions: React.FC<CustomSelectProps> = ({ options, value, onChange, placeholder, className }) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder || "Chọn một tùy chọn"} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SelectOptions;
