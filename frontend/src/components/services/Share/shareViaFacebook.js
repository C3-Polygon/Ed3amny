import {FacebookShareButton,} from "react-share";
  import { FacebookIcon } from "react-share";
  import { Button, Container, Header, Segment, Grid } from "semantic-ui-react";

function Share(){

    return ( 

<>
        <Container>
          <Segment>
            <FacebookShareButton
              // url="https://www.facebook.com/AhmadMuraish"
              url='https://www.linkedin.com/in/maamoum-alkiswani-ba24031b2/'
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