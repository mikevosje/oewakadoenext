import ContentWithoutSidebar from "../components/contentwithoutsidebar";
import PageHeader from "../components/pageheader";
import Wrapper from "../components/wrapper";

function Sponsoren() {
  return (
    <Wrapper>
      <ContentWithoutSidebar>
        <PageHeader text="Sponsoren"/>
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/a.Attractie.jpg" alt="Oewakadoe Hapert"/>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/b.jumbo_.jpg" alt="Oewakadoe Hapert"/>
            </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/c.Orkavuurwerk.jpg" alt="Oewakadoe Hapert"/>
//             </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/e.BMA_.png" alt="Oewakadoe Hapert"/>
//             </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/e.Win-it.jpg" alt="Oewakadoe Hapert"/>
//             </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/f.Hendriks.jpg" alt="Oewakadoe Hapert"/>
//             </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/f.Lemmens.jpg" alt="Oewakadoe Hapert"/>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/Kempen-Packaging-Logo.jpg"
                   alt="Oewakadoe Hapert"/>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/i.Stappaerts.jpg" alt="Oewakadoe Hapert"/>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/k.Het-Palet.jpg" alt="Oewakadoe Hapert"/>
            </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/l.Logo_WBH_Internationaal_NL.jpg"
//                    alt="Oewakadoe Hapert"/>
//             </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/Kleur-M-logo-DEF.jpg"
//                    alt="Oewakadoe Hapert"/>
//             </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/m.rabobank.jpg" alt="Oewakadoe Hapert"/>
//             </div>
            <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
              <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/n.obk-logo.jpg" alt="Oewakadoe Hapert"/>
            </div>
//             <div className="col-md-4 col-sm-6 col-xs-12 sponsor_article">
//               <img src="https://www.oewakadoe.nl/wp-content/uploads/2015/08/q.visitekaartje.jpg"
//                    alt="Oewakadoe Hapert"/>
            </div>
          </div>
        </div>
      </ContentWithoutSidebar>
      <style jsx>
        {`
        .sponsor_article {
    float: left;
    height: 200px;
    margin-bottom: 10px;
    text-align: center;
        -ms-flex-pack: center!important;
    justify-content: center!important;
        display: -ms-flexbox!important;
    display: flex!important;
}

        .sponsor_article img {
    max-width: 250px;
    max-height: 100px;
        -ms-flex-item-align: center!important;
    align-self: center!important;
}
`}
      </style>
    </Wrapper>
  
  )
}

export default Sponsoren;
