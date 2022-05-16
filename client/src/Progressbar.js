import './css/progressbar.css'
import './js/scrollprogbar.js'

function Progbar()
{
    return(
        <>
            <div className="header">
                <div className="progress-container">
                   <div className="progress-bar" id="myBar"></div>
                </div>  
            </div>
        </>
    )
}

export default Progbar;