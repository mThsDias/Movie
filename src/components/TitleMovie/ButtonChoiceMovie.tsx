import React from "react";
import "./Button.css";

export const ButtonChoiceMovie = () => {
    return (
        <>
            <input id="checkbox_toggle" type="checkbox" className="check" />
            <div className="checkbox">
                <label className="slide" htmlFor="checkbox_toggle">
                    <label className="toggle" htmlFor="checkbox_toggle"></label>
                    <label className="text" htmlFor="checkbox_toggle">
                        Dia
                    </label>
                    <label className="text" htmlFor="checkbox_toggle">
                        Semanal
                    </label>
                </label>
            </div>
        </>
    );
};
