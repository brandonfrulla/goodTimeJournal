import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";

import Navigation from "../Navigation";
import PostButtons from "../postButtons";

export default function WriteLayout(props) {
  const classes = makeStyles();
  return (
    <main>
      <Navigation />
      <br />
      <Container maxWidth="md">
        <Box my={4}>
          <Card variant="outlined">
            <TextField
              label="Title"
              id="filled-margin-dense"
              defaultValue="Post Title"
              // className={classes.textField}
              fullWidth
              required
              variant="filled"
            />
            <div style={{ paddingLeft: 20 }}>
              <CardContent style={{ paddingLeft: 5 }}>
                {props.children}
              </CardContent>
              <PostButtons />
            </div>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
