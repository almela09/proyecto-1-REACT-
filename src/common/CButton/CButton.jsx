import "./CButton.css"

export const CButton = ({className, title, functionEmit}) => {

    return (
        <a href="#null"><div className={className} onClick={functionEmit}>
            {title}
        </div></a>
    )
}