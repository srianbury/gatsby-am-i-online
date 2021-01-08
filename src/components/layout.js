/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import SEO from "./seo";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Layout = ({ title, children }) => (
  <Typography>
    <SEO title={title} />
    <Grid container direction="column" alignItems="center">
      {children}
    </Grid>
  </Typography>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
