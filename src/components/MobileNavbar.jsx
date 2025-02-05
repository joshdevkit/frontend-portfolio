import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const MobileNavbar = () => {
    return (
        <nav className="md:hidden fixed top-0 left-0 w-full bg-background border-b p-4 flex justify-between items-center z-50">
            <h1 className="text-xl font-bold">JoshDeviLokano</h1>
            <ThemeToggle />
        </nav>
    );
};

export default MobileNavbar;
