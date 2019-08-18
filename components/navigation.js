import Link from 'next/link'

function Navigation() {
  
  const links = [
    { href: '/', label: "Home" },
    { href: '/sponsoren', label: "Sponsoren" },
    { href: '/foto', label: "Foto's" },
    { href: '/contact', label: 'Contact' }
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  })
  
  return (
    <div id="menu_long">
      <div className="container">
        <nav role="navigation">
          <div className="menu-menu-1-container">
            <ul id="menu-menu-1" className="nav">
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      
      <style jsx>
        {`
            #menu_long {
                width: 100%;
                background-color: #76b729;
                overflow: auto;
            }

            nav {
                width: 100%;
                background-color: #76b729;
                overflow: auto;
            }

            nav ul {
                float: right;
                margin-right: 10px;
                padding: 10px 0;
            }

            nav ul li {
                display: inline-block;
                float: left;
            }

            nav ul li a {
                font-size: 16px;
                color: #fff;
                text-decoration: none;
                margin: 0 5px;
            }

            nav ul li a:hover {
                text-decoration: underline;
            }

            @media (max-width: 500px) {
                #menu_long .container {
                    padding: 0;
                }

                nav {
                    background-color: white;
                }

                nav ul {
                    margin: 0;
                    padding: 0;
                    float: none;
                    width: 100%;
                }

                nav ul li {
                    display: block;
                    width: 100%;
                }

                nav ul li a {
                    text-align: center;
                    width: 100%;
                    padding: 10px 0;
                    margin: 0 0 10px 0;
                    display: block;
                    color: white;
                    background-color: #76b729;
                }

            }
        `}
      </style>
    </div>
  )
}

export default Navigation;
