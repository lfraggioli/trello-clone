"use client"

import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormErrors } from "./form-errors";
import { forwardRef } from "react";



interface FormInputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    defaultValue?: string;
    onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    id, label, type, placeholder, required, disabled, errors, className, defaultValue = "", onBlur }, ref) => {
    const { pending } = useFormStatus();

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {label ? (
                    <Label
                        htmlFor={id}
                        className="text-xs font-semibold text-neutral-700"
                    >
                        {label}
                    </Label>
                ) : null}

                <Input
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled || pending}
                    className={cn(
                        "text-sm px-2 py-1 h-7",
                        className,
                    )}
                    aria-describedby={`${id}-error`}
                />
            </div>
            <FormErrors id={id} errors={errors} />

        </div>
    )

});


FormInput.displayName = "FormInput";