import ReactTooltip from "react-tooltip"

import './css/floating_contact.css'

import './js/floating_contact_anim.js'

import float_cont_img from './imgs/floating_contact.png'
// import { NavLink } from 'react-router-dom';


function Float_contact()
{
    return(
        <>
            <div className="float_con_2 p-0 text-end" id="float_contact">
                <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
                    <img src={ float_cont_img } alt="" className="float_cont_img_size"  data-tip="Get in Touch !!" type="button" />
                    <ReactTooltip place="top" type="light" effect="float"/>
                </a>    
            </div>
        </>
    )
}

export default Float_contact;