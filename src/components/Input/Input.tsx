"use client";
import React from "react";
import "./Input.css";

type InputSearchProps = {
    search: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

export const Input = ({
    search,
    onSearchChange,
    placeholder,
}: InputSearchProps) => {
    return (
        <div className="input-search">
            <input
                type="text"
                placeholder={placeholder}
                onChange={onSearchChange}
                value={search}
            />
        </div>
    );
};
