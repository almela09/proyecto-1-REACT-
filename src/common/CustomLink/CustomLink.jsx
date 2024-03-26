
import "./CustomLink.css"
import { useNavigate } from "react-router-dom"

export const CustomLink = ({title, path})=>{
    const navigate = useNavigate()
    return(
        <div className="linkDesign" onClick={()=> navigate(path)}>
            {title}
        </div>
    )
}