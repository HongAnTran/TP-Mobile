import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import CalendarIcon from "@/components/icons/CalendarIcon";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DatepickerProps {
    value?: Date;
    onChange: (date?: Date) => void;
    placeholder?: string;
    calendarProps?: React.ComponentProps<typeof Calendar>;
    isShowYearSelect?: boolean; // Added new prop
}

export default function Datepicker({
    value,
    onChange,
    placeholder,
    calendarProps,
    isShowYearSelect = true // Default value set to true
}: DatepickerProps) {
    // Generate array of years (current year ± 10 years)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 100 + i);

    const handleYearChange = (year: string) => {
        const newDate = value ? new Date(value) : new Date();
        newDate.setFullYear(parseInt(year));
        onChange(newDate);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    {value ? format(value, "dd/MM/yyyy") : <span>{placeholder}</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                {isShowYearSelect && (
                    <div className="p-3 border-b">
                        <Select
                            value={value?.getFullYear().toString()}
                            onValueChange={handleYearChange}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                                {years.map((year) => (
                                    <SelectItem key={year} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                )}
                <Calendar
                    {...calendarProps}
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                />
            </PopoverContent>
        </Popover>
    );
}