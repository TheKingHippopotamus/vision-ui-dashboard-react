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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Vision UI Dashboard React components
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Custom styles for the SidenavCard
import { card, cardContent } from "examples/Sidenav/styles/sidenavCard";

// Vision UI Dashboard React context
import { useVisionUIController } from "context";

function SidenavCard({ color, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>

    
        <VuiBox lineHeight={1}>
          <VuiTypography  mt={+2} variant="h6" color="white" fontWeight="bold"> 
            TwinnieAI 
                      </VuiTypography>
          <VuiBox mb={0} mt={+2}>
            <VuiTypography variant="h6" color="white" fontWeight="bold">
              Check this out now !!
            </VuiTypography>
          </VuiBox>
          <VuiButton
            component={Link}
            href=""
            target="_blank"
            rel="noreferrer"
            size="small"
            // sx={{ color: "white !important", background: "red" }}
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            Discover
          </VuiButton>
        </VuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
