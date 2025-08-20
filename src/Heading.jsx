import { useNavigate } from "react-router-dom";
export default function Heading(){
     const navigate = useNavigate();
     const handleLogoClick = () => {
        navigate("/"); // Navigate to homepage
    };
    return(
        <div className="heading" >
            {/* <img src="site-logo.png" onClick={handleLogoClick} style={{cursor: 'pointer'}}/> */}
            <div onClick={handleLogoClick}  className="heart" style={{fontSize:'50px'}}>🧡</div>
            <div onClick={handleLogoClick} style={{cursor: 'pointer'}}>
                <h1>CareerAi</h1>
                <p
                    style={{fontSize:'14px', color:'#666'}}
                >Your Smart Career Companion</p>
            </div>
        </div>
    )
}