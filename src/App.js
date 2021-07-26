import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import MatrixMultiplication from './components/MatrixMultiplication'
import * as Comlink from 'comlink/dist/esm/comlink'
import PythonWorker from 'worker-loader!./pythonWorker.js' // eslint-disable-line import/no-webpack-loader-syntax

const styles = (theme) => ({
  progress: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pythonWorker: null
    }
  }

  async componentDidMount() {
    const pythonWorker = Comlink.wrap(new PythonWorker())
    await pythonWorker.setup()
    this.setState({ pythonWorker })
  }

  render() {
    const { pythonWorker } = this.state
    const { classes } = this.props

    return pythonWorker == null ? (
      <div className={classes.progress}>
        <Typography variant="h2">Loading Python</Typography>
        <LinearProgress />
      </div>
    ) : (
      <div>
        <MatrixMultiplication generator={pythonWorker.generateMatmulExercise} />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
