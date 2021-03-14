import React from "react";
import avatar from "../images/avatar.jpg";

import {
    Box,
    Grid,
    Avatar,
  } from "@material-ui/core";
  import {
    AlternateEmail,
    Call,
    LocationOn,
    LinkedIn,
    GitHub
  } from "@material-ui/icons";

  const Header = (props) =>{
      return(
        <Grid className={props.classes.container}>
        <Grid item xs={11} md={2} style={{margin:"auto"}}>
          <Avatar className={props.classes.avatar} src={avatar} />
        </Grid>
        <Grid item xs={11} md={10} style={{margin:"auto"}}>
          <h1>HUYNH THAI HIEU</h1>
          <Box mt={-1} color={props.theme.palette.primary.main}>
            <h2>Front-end Developer</h2>
          </Box>
          <Box className={props.classes.box}>
            <Grid className={props.classes.container}>
              <Grid item style={{marginRight:'auto'}}>
                <Box className={props.classes.box}>
                  <AlternateEmail className={props.classes.icon} />
                  <strong>thaihieuhuynh1752@gmail.com</strong>
                </Box>
              </Grid>
              <Grid item style={{marginRight:'auto'}}>
                <Box className={props.classes.box}>
                  <Call className={props.classes.icon} />
                  <strong>0905 510 623</strong>
                </Box>
              </Grid>
              <Grid item style={{marginRight:'auto'}}>
                <Box className={props.classes.box}>
                  <LocationOn className={props.classes.icon} />
                  <strong>
                    573 Ngo Quyen street, Son Tra district, Da Nang
                  </strong>
                </Box>
              </Grid>
              <Grid item style={{marginRight:'auto'}}>
                <Box className={props.classes.box}>
                  <LinkedIn className={props.classes.icon} />
                  <a href="https://www.linkedin.com/in/huynhthaihieu1752qn"><strong>linkedin.com/in/huynhthaihieu1752qn</strong></a>
                </Box>
              </Grid>
              <Grid item style={{marginRight:'auto'}}>
                <Box className={props.classes.box}>
                  <GitHub className={props.classes.icon} />
                  <a href="https://www.github.com/hieuhuynh1752"><strong>github.com/hieuhuynh1752</strong></a>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      )
  }

  export default Header;