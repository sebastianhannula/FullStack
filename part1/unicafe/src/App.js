import React, { useState } from 'react'

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr> 
  )
}

const Statistics = ({ statName, good, neutral, bad }) => {
  if ((good + neutral + bad) === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
      <Statistic text={statName[0]} value={good}/>
      <Statistic text={statName[1]} value={neutral}/>
      <Statistic text={statName[2]} value={bad}/>
      <Statistic text={statName[3]} value={good + neutral + bad}/>
      <Statistic text={statName[4]} value={(good - bad) / (good + neutral + bad)}/>
      <Statistic text={statName[5]} value={good / (good + neutral + bad)}/>
      </tbody>
    </table>
// I wasn't able to get the '%' sign to stay on the same line as positive
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const statName = [
    'good',
    'neutral',
    'bad',
    'all',
    'average',
    'positive'
  ]

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistics statName={statName} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App