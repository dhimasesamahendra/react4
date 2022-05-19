import react from 'react';
import utama from'./pages/utama';
import {link} from 'react-router-dom';

class app extends react.component {
  render() {
    return(
      <div> <hr>
      <link to="\">beranda</link> |
      <link to="\tentangsaya">tentang saya</link> |
      <link to="\karya">karya</link> |
      <link to="\kontak">kontak</link></hr> 
      <Link to="/gallery" className="nav-link">Gallery</Link>
      <p>utama /</p>
      </div>
    );
  }
}

export default App;
