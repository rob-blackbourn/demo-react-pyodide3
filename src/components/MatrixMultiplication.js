import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Matrix from './Matrix'
import { updateMatrixCell, isMatrixEqual } from '../utils'

const styles = (theme) => ({
  paper: {
    height: '100vh'
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    float: 'right'
  },
  parameter: {
    width: '12ch',
    margin: theme.spacing(1)
  },
  exercise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightAnswer: {
    fontSize: 'x-large',
    color: 'green'
  },
  wrongAnswer: {
    fontSize: 'x-large',
    color: 'red'
  }
})

class MatrixMultiplication extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maxNumberOfRows: 3,
      maxNumberOfColumns: 3,
      hasExercise: false,
      isGenerating: false,
      m: 1,
      n: 1,
      p: 1,
      A: [[0]],
      B: [[0]],
      C: [[0]],
      answer: [[0]]
    }
  }

  generateExercise = () => {
    const { maxNumberOfRows, maxNumberOfColumns } = this.state
    this.props
      .generator(maxNumberOfRows, maxNumberOfColumns)
      .then((result) => {
        this.setState({
          ...result,
          answer: result.C.map((row) => row.map((col) => '')),
          hasExercise: true,
          isGenerating: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  onChangeHandler = (i, j, value) => {
    const intValue = parseInt(value)
    if (Number.isInteger(intValue)) {
      value = intValue
    }
    const answer = updateMatrixCell(this.state.answer, i, j, value)
    this.setState({
      answer
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(
      {
        isGenerating: true
      },
      this.generateExercise
    )
  }

  onMaxRowsChangedHandler = (event) => {
    const maxNumberOfRows = parseInt(event.target.value)
    if (Number.isInteger(maxNumberOfRows) && maxNumberOfRows > 0) {
      this.setState({ maxNumberOfRows })
    }
  }

  onMaxColsChangedHandler = (event) => {
    const maxNumberOfColumns = parseInt(event.target.value)
    if (Number.isInteger(maxNumberOfColumns) && maxNumberOfColumns > 0) {
      this.setState({ maxNumberOfColumns })
    }
  }

  render() {
    const { maxNumberOfRows, maxNumberOfColumns, A, B, C, answer, hasExercise, isGenerating } = this.state
    const { classes } = this.props

    const isCorrect = isMatrixEqual(C, answer)

    return (
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              className={classes.parameter}
              type="number"
              value={maxNumberOfRows}
              label="Max Rows"
              onChange={this.onMaxRowsChangedHandler}
            />
            <TextField
              className={classes.parameter}
              type="number"
              value={maxNumberOfColumns}
              label="Max Columns"
              onChange={this.onMaxColsChangedHandler}
            />
            <Button className={classes.button} type="submit" disabled={isGenerating}>
              New Exercise
            </Button>
          </form>
          <div className={classes.exercise}>
            {hasExercise ? (
              <>
                <Matrix values={A} readOnly={true} />
                <Matrix values={B} readOnly={true} />
                <span>=</span>
                <Matrix values={answer} readOnly={false} onChange={this.onChangeHandler} />
              </>
            ) : (
              <Typography variant="body1">Click the button to generate a new exercise</Typography>
            )}
            {hasExercise ? (
              <div>
                {isCorrect ? (
                  <span className={classes.rightAnswer}>&#x2714;</span>
                ) : (
                  <span className={classes.wrongAnswer}>&#x2718;</span>
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </Paper>
      </Container>
    )
  }
}

MatrixMultiplication.propTypes = {
  classes: PropTypes.object,
  generator: PropTypes.func
}

export default withStyles(styles)(MatrixMultiplication)
