import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    width: 500,
    margin: 25,
    borderRadius: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    display: 'flex'
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
            className={classes.media}
            image='https://raw.githubusercontent.com/AhmedCodeGuy/Full-Stack-Conf/master/images/nodestradamus.png'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              nodestradamus
            </Typography>
            {/* <Typography component='p'>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
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
