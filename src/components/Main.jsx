import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}
