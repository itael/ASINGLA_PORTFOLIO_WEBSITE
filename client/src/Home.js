import './css/common_css.css'
import './css/button.css'

import './js/fullpage_anim.js'

import Progressbar from './Progressbar';
import Floating_social from './Floating_social';
import Openingpage from './Openingpage';
import Counter from './Counter';
import Bio from './Bio';
import Abtme from './Abtme';
import Marquee from './Marquee';
import Contactme from './Contactme';
import Totop from './Totop';
import Project from './Project';
import Footer from './Footer';
import Float_contact from './Floating_contact';

function App()
{
    return(
        <>
            <Openingpage />
            <Counter />
            <Bio />
            <Abtme />
            <Marquee />
            <Project />
            <Footer />

{/* -------------------------------------------------------------- */}

            <Progressbar />
            <Floating_social />
            <Totop />
            <Float_contact />
            <Contactme />
        </>
    )
}

export default App;