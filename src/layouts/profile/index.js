/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Table from "examples/Tables/Table";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";
// Import icons
import Spotify from "examples/Icons/Spotify";
import Invision from "examples/Icons/Invision";
import Jira from "examples/Icons/Jira";
import Slack from "examples/Icons/Slack";
import VuiProgress from "components/VuiProgress";
import VuiAvatar from "components/VuiAvatar";
import Tooltip from "@mui/material/Tooltip";

// Data for the projects table
const projectsTableData = {
  columns: [
    { name: "Companies", align: "left" },
    { name: "members", align: "left" },
    { name: "PAID", align: "center" },
    { name: "completion", align: "center" },
  ],
  rows: [
    {
      TOPIC: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Spotify Project
          </VuiTypography>
        </VuiBox>
      ),
      members: (
        <VuiBox display="flex" py={1}>
          {[
            [team1, "Elena Morison"],
            [team2, "Ryan Milly"],
          ].map(([image, name]) => (
            <Tooltip key={name} title={name} placeholder="bottom">
              <VuiAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                  border: ({ borders: { borderWidth }, palette: { dark } }) =>
                    `${borderWidth[2]} solid ${dark.focus}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:not(:first-of-type)": {
                    ml: -1.25,
                  },
                  "&:hover, &:focus": {
                    zIndex: "10",
                  },
                }}
              />
            </Tooltip>
          ))}
        </VuiBox>
      ),
      PAID: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
          $14,000
        </VuiTypography>
      ),
      completion: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
            60%
          </VuiTypography>
          <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    },
    {
      TOPIC: (
        <VuiBox display="flex" alignItems="center">
          <Invision size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Invision Project
          </VuiTypography>
        </VuiBox>
      ),
      members: (
        <VuiBox display="flex" py={1}>
          {[
            [team3, "Nick Daniel"],
            [team4, "Peterson"],
          ].map(([image, name]) => (
            <Tooltip key={name} title={name} placeholder="bottom">
              <VuiAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                  border: ({ borders: { borderWidth }, palette: { dark } }) =>
                    `${borderWidth[2]} solid ${dark.focus}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:not(:first-of-type)": {
                    ml: -1.25,
                  },
                  "&:hover, &:focus": {
                    zIndex: "10",
                  },
                }}
              />
            </Tooltip>
          ))}
        </VuiBox>
      ),
      PAID: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
          $2,500
        </VuiTypography>
      ),
      completion: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
            90%
          </VuiTypography>
          <VuiProgress value={90} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    },
    {
      TOPIC: (
        <VuiBox display="flex" alignItems="center">
          <Jira size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Jira Project
          </VuiTypography>
        </VuiBox>
      ),
      members: (
        <VuiBox display="flex" py={1}>
          {[
            [team1, "Elena Morison"],
            [team2, "Ryan Milly"],
          ].map(([image, name]) => (
            <Tooltip key={name} title={name} placeholder="bottom">
              <VuiAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                  border: ({ borders: { borderWidth }, palette: { dark } }) =>
                    `${borderWidth[2]} solid ${dark.focus}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:not(:first-of-type)": {
                    ml: -1.25,
                  },
                  "&:hover, &:focus": {
                    zIndex: "10",
                  },
                }}
              />
            </Tooltip>
          ))}
        </VuiBox>
      ),
      PAID: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
          Not set
        </VuiTypography>
      ),
      completion: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
            25%
          </VuiTypography>
          <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    },
    {
      TOPIC: (
        <VuiBox display="flex" alignItems="center">
          <Slack size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Slack Project
          </VuiTypography>
        </VuiBox>
      ),
      members: (
        <VuiBox display="flex" py={1}>
          {[
            [team3, "Nick Daniel"],
            [team4, "Peterson"],
          ].map(([image, name]) => (
            <Tooltip key={name} title={name} placeholder="bottom">
              <VuiAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                  border: ({ borders: { borderWidth }, palette: { dark } }) =>
                    `${borderWidth[2]} solid ${dark.focus}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:not(:first-of-type)": {
                    ml: -1.25,
                  },
                  "&:hover, &:focus": {
                    zIndex: "10",
                  },
                }}
              />
            </Tooltip>
          ))}
        </VuiBox>
      ),
      PAID: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
          $4,000
        </VuiTypography>
      ),
      completion: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
            40%
          </VuiTypography>
          <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    },
    {
      TOPIC: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Webdev Project
          </VuiTypography>
        </VuiBox>
      ),
      members: (
        <VuiBox display="flex" py={1}>
          {[
            [team1, "Elena Morison"],
            [team2, "Ryan Milly"],
          ].map(([image, name]) => (
            <Tooltip key={name} title={name} placeholder="bottom">
              <VuiAvatar
                src={image}
                alt="name"
                size="xs"
                sx={{
                  border: ({ borders: { borderWidth }, palette: { dark } }) =>
                    `${borderWidth[2]} solid ${dark.focus}`,
                  cursor: "pointer",
                  position: "relative",
                  "&:not(:first-of-type)": {
                    ml: -1.25,
                  },
                  "&:hover, &:focus": {
                    zIndex: "10",
                  },
                }}
              />
            </Tooltip>
          ))}
        </VuiBox>
      ),
      PAID: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
          $2,000
        </VuiTypography>
      ),
      completion: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
            100%
          </VuiTypography>
          <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    },
  ],
};

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <CarInformations />
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="profile information"
              description="Hi, I'm Emily Polak, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: "Emily Polak",
                mobile: "(44) 123 1234 123",
                email: "mark@simmmple.com",
                location: "United States",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Partners
                </VuiTypography>
                <VuiTypography color="text" variant="button" fontWeight="regular">
                  30 done this month
                </VuiTypography>
              </VuiBox>
              <VuiBox mb={3}>
                <Table columns={projectsTableData.columns} rows={projectsTableData.rows} />
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile1}
                    label="project #2"
                    title="modern"
                    description="As Uber works through a huge amount of internal management turmoil."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile2}
                    label="project #1"
                    title="scandinavian"
                    description="Music is something that every person has his or her own specific opinion about."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                      { image: team4, name: "Peterson" },
                      { image: team1, name: "Elena Morison" },
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                  <DefaultProjectCard
                    image={profile3}
                    label="project #3"
                    title="minimalist"
                    description="Different people have different taste, and various types of music."
                    action={{
                      type: "internal",
                      route: "/pages/profile/profile-overview",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                      { image: team3, name: "Nick Daniel" },
                      { image: team2, name: "Ryan Milly" },
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
