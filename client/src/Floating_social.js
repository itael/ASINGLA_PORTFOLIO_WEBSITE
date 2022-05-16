import './css/floating_icon.css'

function F_social()
{
    return(
        <>
            <div className="social_dmns ms-2">
                <a href="https://www.linkedin.com/in/anirudhasingla/" target="_blank"> <i title="Linkedin" className="fa-brands fa-linkedin-in linkedin my-3"></i> </a> <br /> 
                
                <a href="https://github.com/singlaanirudha" target="_blank"> <i title="GitHub" className="fa-brands fa-github github my-3"></i> </a> <br />	
                
                <a href="https://wa.me/919911598285" target="_blank"> <i title="What's App" className="fa-brands fa-whatsapp whatsapp my-3"></i> </a>	<br />
                
                <a href="mailto: singlaanirudha@gmail.com"> <i title="E-Mail" className="fa-solid fa-envelope gmail my-3"></i> </a> <br />	
                
                <a href="tel: 9911598285" target="_blank"> <i title="Phone" className="fa-solid fa-phone call my-3"></i> </a> 
            </div>

        </>
    )
}

export default F_social