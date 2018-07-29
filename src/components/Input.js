import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import { renderComponent } from 'recompose'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    margin: theme.spacing.unit
  }
})

class Inputs extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Input
          placeholder='Name'
          className={classes.input}
          inputProps={{
            'aria-label': 'Description'
          }}
          {...this.props}
        />
      </div>
    )
  }
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Inputs)
