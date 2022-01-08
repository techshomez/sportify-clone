import React from "react";
import {BsFillMegaphoneFill} from 'react-icons/bs';

import '../styles/Banner.css';
import banner_images from '../images/cta-1-moc-1.png';

const Banners = () => {
    return (
        <section className="section_banner">
            <div className="sty">
               <div className="content">
                 <h4>Hire Talent</h4>
                 <h3>Find your dream job or talented employee</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit alias ad? Quia, enim hic. Error enim amet consectetur velit itaque quisquam, id sit dolorem non voluptatibus molestias facere tempora!
                 </p>
               </div>

               <div className="image">
                 <img src={ banner_images } alt=""/>
               </div>

           </div>
            
        </section>
    );
}

const Solutions = () => {
    return (
        <section className="section_solution">
            <div className="solution_container">
                <h2>One platform Many Solutions</h2>                
                
            </div>
        </section>
    )
}

export default Solutions



export { Banners }
