import React from 'react';
import Navbar from '../components/Navbar';
import './index.css';

function Empty() {
    return (
      <React.Fragment>
        <main>
            <Navbar />
        </main>
        <body>
          <iframe title="yt" id="ytplayer" type="text/html" width="100%" height="100%"
          src="https://youtube.com/embed/ePpPVE-GGJw?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"></iframe>
        </body>

      </React.Fragment>
      )
    }
export default Empty;
