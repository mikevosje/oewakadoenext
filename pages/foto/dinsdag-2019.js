import Wrapper from "../../components/wrapper";
import ContentWithoutSidebar from '../../components/contentwithoutsidebar';
import { getAlbum } from "../../components/GooglePhotos";
import PageHeader from "../../components/pageheader";
import Photogallery from "../../components/photogallery";

function Dinsdag2019(props) {
  return (
    <Wrapper>
      <ContentWithoutSidebar>
        <PageHeader text="Sponsoren"/>
        <Photogallery images={props.images}/>
      </ContentWithoutSidebar>
    </Wrapper>
  )
}

Dinsdag2019.getInitialProps = async ({ req }) => {
  const res = await getAlbum('k2FJCHq3Jq3ft4o89');
  return { images: res }
};


export default Dinsdag2019;
