const grid = {
  turnStatus: true,
  xState: [],
  oState: [],
  winArray: [
    
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],

      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],

      ['0', '4', '8'],
      ['2', '4', '6']
  ]
}

document.addEventListener('click', event => {
  const target = event.target
  const cellLocation = target.classList.contains('cells')
  const isPicked = target.classList.contains('picked')

  if (cellLocation && !isPicked) {
      const cellValue = target.dataset.value

      grid.turnStatus === true
          ? grid.xState.push(cellValue)
          : grid.oState.push(cellValue)

      target.classList.add('picked')
      target.classList.add(grid.turnStatus ? 'ximage' : 'oimage')

      grid.turnStatus = !grid.turnStatus
       

  

  if (!document.querySelectorAll('.cells:not(.picked)').length) {
    document.querySelector('.game-over').classList.add('visible')
    document.querySelector('.game-over-text').textContent = 'Draw!'
}


grid.winArray.forEach(winningState => {
    const xWins = winningState.every(state => grid.xState.includes(state))
    const oWins = winningState.every(state => grid.oState.includes(state))

    if (xWins || oWins) {
        document.querySelectorAll('.cells').forEach(cell => cell.classList.add('picked'))
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = xWins
            ? 'X wins!'
            : 'O wins!'
    }
})
}
})

document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible')
    document.querySelectorAll('.cells').forEach(cell => {
    cell.classList.remove('picked', 'ximage', 'oimage')
    
    })
    grid.turnStatus = true
    grid.xState = []
    grid.oState = []
    })
    