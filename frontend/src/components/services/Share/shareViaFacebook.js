import {FacebookShareButton,} from "react-share";
  import { FacebookIcon } from "react-share";
  import { Button, Container, Header, Segment, Grid } from "semantic-ui-react";
  import { useLocation } from "react-router";

function Share(){
  const location = useLocation()
  let path = `https://localhost:3000/${location.pathname}`

    return ( 

<>
        <Container>
          <Segment>
            <FacebookShareButton
              // url="https://www.facebook.com/AhmadMuraish"
              url={path}
              quote={"Easy Peasy Lemon Squeezy"}
              hashtag="#facebookshare"
            >
              <FacebookIcon logofillcolor="white" round={true}></FacebookIcon>
            </FacebookShareButton>
          </Segment>
        </Container>
      </>


    )
}






  export default Share;