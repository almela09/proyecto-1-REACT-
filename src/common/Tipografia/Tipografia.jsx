import "./Tipografia.css"

export const Tipografia = ({ text, fontSize, color, fontFamily }) => {
    const style = {
        fontSize: fontSize,
        color: color,
        fontFamily: fontFamily,
    };

    return <p style={style}>{text}</p>;
};

