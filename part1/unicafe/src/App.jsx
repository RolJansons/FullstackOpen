import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, counter}) => {
  console.log(text, counter)
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = (good, neutral, bad) => {
    const a = good * 1
    const b = neutral * 0
    const c = bad * -1
    const sum = good + neutral + bad
    return (a + b + c)/ sum
  }

  const positive = (good, neutral, bad) => {
    const sum = good + neutral + bad
    const pos = good / sum * 100
    return (
      <>{pos} %</>
    )
  }

  if (good + bad + neutral === 0){
    return (
    <div>
      No feedback given
    </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good ' counter={good}/>
        <StatisticLine text='neutral ' counter={neutral}/>
        <StatisticLine text='bad ' counter={bad}/>
        <StatisticLine text='all ' counter={good + bad + neutral}/>
        <StatisticLine text='average ' counter={average(good, neutral, bad)}/>
        <StatisticLine text='positive ' counter={positive(good, neutral, bad)}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    console.log('good value before', {good})
    return (
      setGood(good + 1)
    )
  }

  const handleNeutralClick = () => {
    console.log('neutral value before', {neutral})
    return (
      setNeutral(neutral + 1)
    )
  }
  const handleBadClick = () => {
    console.log('bad value before', {bad})
    return (
      setBad(bad + 1)
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App
