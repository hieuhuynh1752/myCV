import React from "react";
import { Box, Grid } from "@material-ui/core";
import { DateRange } from "@material-ui/icons";

const Main = (props) => {
  return (
    <Grid mt={5} className={props.classes.card}>
      <Grid item mt={5} md={7} xs={12} className={props.classes.cardChild}>
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>EDUCATION</h2>
          </Box>
          <Box
            borderTop={3}
            mb={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>Bachelor of Computing</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>
                University of Greenwich (Vietnam) - Da Nang Campus, Vietnam
              </strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
            2018 - Present
          </Box>
        </Grid>
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>COURSES & CERTIFICATES</h2>
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>GraphQL with React: The Complete Developers Guide</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>Udemy</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
            Issued Nov 2020
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.light}
          >
            <h3>
              Front-End Web UI Frameworks and Tools: Bootstrap 4 by The Hong
              Kong University of Science and Technology
            </h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>Coursera</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
            Issued Feb 2020
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.light}
          >
            <h3>Certificate of Participation in PHP Course #1 in Nov 2019</h3>
            <Box mt={-2} mb={1} color={props.theme.palette.primary.main}>
              <strong>.NFQ Asia</strong>
            </Box>
            <DateRange className={props.classes.icon} color="disabled" />
            Issued Nov 2019
          </Box>
        </Grid>
        <Grid item xs={11} style={{ margin: "auto" }}>
          <Box mb={-2} color={props.theme.palette.primary.dark}>
            <h2>PROJECTS</h2>
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.dark}
          >
            <h3>myFamily Project</h3>
            <Grid item style={{ marginBottom: 25 }}>
              <Box mt={-1} mb={1} color={props.theme.palette.primary.main}>
                <strong>
                  Social media, events and tasks management application for
                  Family members
                </strong>
              </Box>
              <DateRange className={props.classes.icon} color="disabled" />
              01/2021 - 03/2021
              <Box mt={1} textAlign="justify">
                <li>
                  <strong>Technologies:</strong> Laravel, React Native, GraphQL
                </li>
                <li>
                  <strong>Personal project</strong>
                </li>
                <li>
                  <strong>Description:</strong>
                </li>
                <li style={{ listStyle: "none", marginLeft: "1.45rem" }}>
                  An Android application for users to share their thoughts,
                  tasks and events within their family.
                </li>
              </Box>
            </Grid>
          </Box>
          <Box
            mt={2}
            borderTop={3}
            borderColor={props.theme.palette.primary.light}
          >
            <h3>GreeChain Project</h3>
            <Grid item style={{ marginBottom: 25 }}>
              <Box mt={-1} mb={1} color={props.theme.palette.primary.main}>
                <strong>
                  Blockchain-based Management System for Coffee industry
                </strong>
              </Box>
              <DateRange className={props.classes.icon} color="disabled" />
              04/2020 - 06/2020
              <Box mt={1} textAlign="justify">
                <li>
                  <strong>Technologies:</strong> PHP, HTML, CSS, JavaScript,
                  Solidity
                </li>
                <li>
                  <strong>Team members: </strong>4
                </li>
                <li>
                  <strong>Role: </strong> Front End Developer
                </li>
                <li>
                  <strong>Description:</strong>
                </li>
                <li style={{ listStyle: "none", marginLeft: "1.45rem" }}>
                  A web application to manage entire process of the Coffee
                  industry: farming, harvesting, packaging, delivery and sell to
                  customers, with the integration of Etherium Blockchain
                  technology.
                </li>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={5} xs={12} style={{ marginTop: "-1.25rem" }}>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>SKILLS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "18rem" }}>
            <Grid item>
              <Box mt={3} mb={-1} color={props.theme.palette.primary.main}>
                <h3>Programming Skills</h3>
              </Box>
              <Box>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>C#</li>
              </Box>
              <Box
                mb={1}
                mt={2}
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <h3>Web development technologies</h3>
              </Box>
              <Box mb={3}>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>Laravel</li>
                <li>API Services: GraphQL & RESTful</li>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>ACHIEVEMENTS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "27rem" }}>
            <Grid item>
              <Box mt={3} mb={-1} color={props.theme.palette.primary.main}>
                <h3>Personal achievements</h3>
              </Box>
              <Box mb={3}>
                <li>
                  {" "}
                  <strong>
                    Best Student of Summer Semester 2019
                  </strong> <br /> University of Greenwich (Vietnam) - Da Nang
                  campus
                </li>
                <li>
                  <strong>Best Student of Spring Semester 2019</strong> <br />{" "}
                  University of Greenwich (Vietnam) - Da Nang campus
                </li>
                <li>
                  <strong>Best Student of Fall Semester 2018</strong> <br />{" "}
                  University of Greenwich (Vietnam) - Da Nang campus
                </li>
              </Box>
              <Box
                mb={-1}
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <h3>Team achievements</h3>
              </Box>
              <Box>
                <li>
                  {" "}
                  <strong>
                    Top 10 Team at Vietnam Online Hackathon 2020
                  </strong>{" "}
                  <br /> Google Developers Group Mien Trung - DNES
                </li>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={11} mt={0} xs={12} className={props.classes.cardChild}>
          <Box
            mb={-2}
            color="white"
            bgcolor={props.theme.palette.primary.main}
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <div style={{ margin: "auto", width: "90%" }}>
              <h2>INTERESTS</h2>
            </div>
          </Box>
          <Grid item style={{ margin: "auto", width: "90%", height: "14rem" }}>
            <Grid item>
              <Box mt={3} mb={-1} color={props.theme.palette.primary.main}>
                <h3>Sports</h3>
              </Box>
              <Box>
                <li>Swimming</li>
                <li>Jogging</li>
              </Box>
              <Box
                mb={1}
                mt={2}
                borderTop={3}
                borderColor={props.theme.palette.primary.light}
                color={props.theme.palette.primary.main}
              >
                <h3>Musical instruments</h3>
              </Box>
              <Box>
                <li>Modern Piano</li>
                <li>Acoustic Guitar</li>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
