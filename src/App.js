import React from "react";
import './App.css';

function App() {
  return (

    <div className="container">
            {/* /* <img className="profile-pic" src="https://lh3.googleusercontent.com/p/AF1QipPWoZUWGW9WWhf8-24ib-golcxgFEdoAMIgDlV-=s1360-w1360-h1020-rw"/> */}

      {/* <h1 className="heading">Srinivasa Pindigirni</h1> 
      <hr className="line"/>
      <h4 className="sub">Opp to ideal girls hostel ,edgah church, bokkalgadda , hnk , wgl urban 506001</h4>
      <div className="link-row">
        <a href="tel:+919700700814" className="call-btn">Call Now</a>
        <a href="mailto:chenuriraju20@gmail.com" className="call-btn">Send us an email</a>
        <a href="https://wa.me/919700700814" target="_blank" className="call-btn">Chat on WhatsApp</a>
      </div> */}
       <h1 className="heading">Srinivasa Pindigirni</h1> 
  <hr className="line"/>
  <h4 className="sub">Opp to Ideal Girls Hostel, Edgah Church, Bokkalgadda, HNK, WGL Urban 506001</h4>
  <div className="link-row">
    <a href="tel:+919700700814" className="icon-btn phn" title="Call Now">
     <i className="fas fa-phone"></i>

    </a>
    <a href="mailto:chenuriraju20@gmail.com" className="icon-btn" title="Send Email">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://wa.me/919700700814" target="_blank" className="icon-btn" title="Chat on WhatsApp">
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
      <div className="text-para">
            <h4>
                🏡 Welcome to Our Flour Mill (Pindigirni)
                <br/>
                Founded by the Chennuri family in the early 1980s, our flour mill—locally known as Pindigirni—has delivered trusted, high-quality grinding services for over 30 years. Rooted in tradition, we continue to serve generations with care and commitment.
 </h4>
      </div>
      <h2>Our Services</h2>
      <div className="pindi-items">
       <table className="table-d">
        <tr>
            <th>Machine</th>
            <th>Item</th>
            <th>Price/KG</th>
        </tr>
        <tr className="data">
            <td>
                <img  className="pindi-items-pic" src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nreUMg_rY5hZ84QWqhtyyiFjn7O60DleyOGKabw1x_GQpH4RXgt3KmOEN8u8mtQ7PWLLnBrHzkI9ZZ0fer2zbE8zmyh7qjPxBKAMVEDij_xXGGfg-dlYUXb-CAUB2NiaQpc1f9F=s1360-w1360-h1020-rw"></img>
            </td>
            <td>
                <h4>Rice</h4>
            </td>
            <td>
                <h4>6rs/Kg</h4>
                </td>
        </tr>
       </table>

      </div>
      <div className="other-services">
        <h2>Other Services</h2>
        <ul className="other-services">
            <li>
                <img className="profile-pic" src="https://m.media-amazon.com/images/I/514SyNre6lL._UF1000,1000_QL80_.jpg"></img>
                <h2>Lighting Work</h2>
            </li>
            <li>
              <img className="profile-pic" src="https://artwoonz.com/wp-content/uploads/2019/11/Pencil-sketch-artist-Ani-Cinski-27.jpg">
              </img>
              <h2>Drawings</h2>
            </li>
        </ul>
      </div>
    </div>
   
  );
}


export default App;
