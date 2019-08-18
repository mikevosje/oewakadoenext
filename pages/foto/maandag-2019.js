import Wrapper from "../../components/wrapper";
import ContentWithoutSidebar from '../../components/contentwithoutsidebar';
import { getAlbum } from "../../components/GooglePhotos";
import PageHeader from "../../components/pageheader";
import Photogallery from "../../components/photogallery";

function Maandag2019(props) {
  return (
    <Wrapper>
      <ContentWithoutSidebar>
        <PageHeader text="Sponsoren"/>
        <Photogallery images={props.images}/>
      </ContentWithoutSidebar>
    </Wrapper>
  )
}

Maandag2019.getInitialProps = async ({ req }) => {
  const res = await getAlbum('7VMy94Ak98TFXUBr8');
  return { images: res }
};


export default Maandag2019;
