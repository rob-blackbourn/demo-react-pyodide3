import * as Comlink from 'comlink/dist/esm/comlink'

self.importScripts('https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js') // eslint-disable-line no-restricted-globals

const PYTHON_CODE = `
import random
import numpy as np

def generate_matmul_exercise(max_rows, max_cols):
    m = random.randint(1, max_rows)
    n = random.randint(1, max_cols)
    p = random.randint(1, max_cols)

    rng = np.random.default_rng()
    A = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)
    B = rng.integers(low=-10, high=10, size=(n, p), dtype=np.int32)
    C = A @ B

    return {
        'm': m,
        'n': n,
        'p': p,
        'A': A,
        'B': B,
        'C': C
    }

def generate_matadd_exercise(max_rows, max_cols):
    m = random.randint(1, max_rows)
    n = random.randint(1, max_cols)

    rng = np.random.default_rng()
    A = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)
    B = rng.integers(low=-10, high=10, size=(m, n), dtype=np.int32)
    C = A + B

    return {
        'm': m,
        'n': n,
        'A': A,
        'B': B,
        'C': C
    }    
`

function wrapGenerateMatmulExercise(pyodide) {
  const func = pyodide.globals.get('generate_matmul_exercise')

  return (maxNumberOfRows, maxNumberOfColumns) => {
    console.log('generateMatmulExercise')
    const obj = func(maxNumberOfRows, maxNumberOfColumns)
    const results = {
      m: obj.get('m'),
      n: obj.get('n'),
      p: obj.get('p'),
      A: obj
        .get('A')
        .toJs()
        .map((x) => Array.from(x)),
      B: obj
        .get('B')
        .toJs()
        .map((x) => Array.from(x)),
      C: obj
        .get('C')
        .toJs()
        .map((x) => Array.from(x))
    }
    obj.destroy()
    return results
  }
}

function wrapGenerateMataddExercise(pyodide) {
  const func = pyodide.globals.get('generate_matadd_exercise')

  return (maxNumberOfRows, maxNumberOfColumns) => {
    const obj = func(maxNumberOfRows, maxNumberOfColumns)
    const results = {
      m: obj.get('m'),
      n: obj.get('n'),
      A: obj
        .get('A')
        .toJs()
        .map((x) => Array.from(x)),
      B: obj
        .get('B')
        .toJs()
        .map((x) => Array.from(x)),
      C: obj
        .get('C')
        .toJs()
        .map((x) => Array.from(x))
    }
    obj.destroy()
    return results
  }
}

const pythonContext = {
  setup() {
    self // eslint-disable-line no-restricted-globals
      .loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/'
      })
      .then((pyodide) => {
        pyodide
          .loadPackage(['numpy'])
          .then(() => {
            pyodide.runPython(PYTHON_CODE)

            this.generateMatmulExercise = wrapGenerateMatmulExercise(pyodide)
            this.generateMataddExercise = wrapGenerateMataddExercise(pyodide)
          })
          .catch((error) => {
            console.log(error)
          })
      })
  }
}

Comlink.expose(pythonContext)
