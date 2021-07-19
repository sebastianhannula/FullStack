import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function indexOfMax(arr) { 
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(7)).map(Number.prototype.valueOf,0)) 

  const copy = [...votes]

  const handleNextClick = () => {
    setSelected(getRandomInt(0,7))
  }
  const handleVoteClick = () => {
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br/>
      has {votes[selected]} votes <br/>
      <Button text='next anecdote' handleClick={handleNextClick}/>
      <Button text='vote' handleClick={handleVoteClick}/>
      <h2>Anecdote with most votes</h2>
      {anecdotes[indexOfMax(votes)]} <br/>
      has {votes[indexOfMax(votes)]} votes <br/>
    </div>
  )
}

export default App