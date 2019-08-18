import Wrapper from "../../components/wrapper";
import ContentWithoutSidebar from '../../components/contentwithoutsidebar';
import { getAlbum } from "../../components/GooglePhotos";
import PageHeader from "../../components/pageheader";
import Photogallery from "../../components/photogallery";

function Donderdag2019(props) {
  return (
    <Wrapper>
      <ContentWithoutSidebar>
        <PageHeader text="Sponsoren"/>
        <Photogallery images={props.images}/>
      </ContentWithoutSidebar>
    </Wrapper>
  )
}

Donderdag2019.getInitialProps = async ({ req }) => {
  const res = await getAlbum('6KWR8N4biVYQcnkM9');
  return { images: res }
};


export default Donderdag2019;
