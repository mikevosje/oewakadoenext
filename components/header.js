function Header() {
  return (
    <div id="header_long">
      <header className="container">
        <a href="https://www.oewakadoe.nl">
          <img id="logo" src="https://www.oewakadoe.nl/wp-content/themes/oewakadoe/dist/images/logo_oewakadoe_kleur.png"
               alt="logo"/>
        </a>
        <div id="slider_header">
          <img src="https://www.oewakadoe.nl/wp-content/themes/oewakadoe/dist/images/MVH-Oewakadoe_0004.jpg"
               alt="image"/>
          <img src="https://www.oewakadoe.nl/wp-content/themes/oewakadoe/dist/images/MVH-Oewakadoe_0006.jpg"
               alt="image"/>
        </div>
      </header>
      
      <style jsx>
        {`
            #header_long {
                width: 100%;
                background-color: #c5eaf0;
                overflow: auto;
            }

            header {
                width: 100%;
                background-color: #c5eaf0;
                overflow: auto;
            }

            header #logo {
                height: 200px;
                padding: 10px 0 10px 0;
                margin-left: 70px;
                float: left;
            }

            header #slider_header {
                float: right;
                overflow: hidden;
            }

            header #slider_header img {
                height: 200px;
                padding: 10px 10px 10px 5px;
                float: right;
            }

            @media (max-width: 767px) {
                header {
                    text-align: center;
                }

                header #logo {
                    margin: 0 auto;
                    float: none;
                    padding: 20px 0;
                }

                header #slider_header {
                    display: none;
                }
            }

            @media (max-width: 991px) {
                header #slider_header img:last-child {
                    display: none;
                }
            }

            header #slider_header img:last-child {
                float: right;
                padding: 10px 5px 10px 10px;
            }
        
        `}
      </style>
    </div>
  )
}

export default Header;
