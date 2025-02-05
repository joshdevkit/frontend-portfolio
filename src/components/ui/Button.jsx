import React, { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef(({ variant = "default", size = "md", className, ...props }, ref) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
        default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    const sizeStyles = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "w-10 h-10 p-2", // Circular button for icons
    };

    return (
        <button
            ref={ref} // Allow ref to be passed
            className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
            {...props}
        />
    );
});

export default Button;
