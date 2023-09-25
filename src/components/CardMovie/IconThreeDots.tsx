import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface IconThreeDotsProps {
    onClick: () => void;
}

export const IconThreeDots = ({ onClick }: IconThreeDotsProps) => {
    return (
        <BsThreeDots
            style={{
                background: "#ffffff5b",
                borderRadius: "50%",
                width: "17px",
                height: "17px",
                position: "absolute",
                left: "15%",
                top: "4%",
                cursor: "pointer",
            }}
            onClick={onClick}
        />
    );
};
