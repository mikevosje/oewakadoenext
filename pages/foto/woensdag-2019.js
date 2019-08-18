import Wrapper from "../../components/wrapper";
import ContentWithoutSidebar from '../../components/contentwithoutsidebar';
import { getAlbum } from "../../components/GooglePhotos";
import PageHeader from "../../components/pageheader";
import Photogallery from "../../components/photogallery";

function Woensdag2019(props) {
  return (
    <Wrapper>
      <ContentWithoutSidebar>
        <PageHeader text="Sponsoren"/>
        <Photogallery images={props.images}/>
      </ContentWithoutSidebar>
    </Wrapper>
  )
}

Woensdag2019.getInitialProps = async ({ req }) => {
  const res = await getAlbum('fbTxQ1nHxeub5D25A');
  return { images: res }
};


export default Woensdag2019;
