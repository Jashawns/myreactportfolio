import React from "react";

const HexColorPicker = ({value, onChange, ...rest}) => {
    return (
    <span>
        <input type="text" value={value} onChange={onChange} {...rest} />
    </span>
    );
};


export default HexColorPicker;