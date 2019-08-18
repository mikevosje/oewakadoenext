function Footer() {
  return (
    <footer className="footer_long">
      <div className="container">Logo: <a target="_blank" href="http://kleurm.nl/">KleurM - Marije Fransen</a> &amp;
        Webdesign Mike Vosters
      </div>
      
      <style jsx>
        {`
            footer {
                width: 100%;
                padding: 10px 0;
                color: white;
                font-size: 16px;
                float: left;
                background-color: #76b729;
            }

            a {
                color: white;
                text-decoration: underline;
            }
        `}
      </style>
    </footer>
  )
}

export default Footer;
