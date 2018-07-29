import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    width: 500,
    margin: 25,
    borderRadius: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

class SimpleMediaCard extends Component {
  constructor (props) {
    super(props)
    this.state = { raised: false }
  }

  onMouseOver = () => this.setState({ raised: true })
  onMouseOut = () => this.setState({ raised: false })

  render () {
    console.log('name', this.props.name)
    console.log('image', this.props.image)
    const { classes } = this.props
    return (
      <div>
        <Card
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          raised={this.state.raised}
          className={classes.card}
        >
          <CardMedia
            image={this.props.image}
            className={classes.media}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {this.props.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
