import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({text, counter}) => {
  console.log(text, counter)
  return (
    <p>{text}{counter}</p>
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

  const average = (good, neutral, bad) => {
    const a = good * 1
    const b = neutral * 0
    const c = bad * -1
    const sum = good + neutral + bad
    console.log('average', (a + b + c)/ sum)
    return (a + b + c)/ sum
  }

  const positive = (good, neutral, bad) => {
    const sum = good + neutral + bad
    const pos = good / sum
    return (
      <>{pos} %</>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Display text='good ' counter={good}/>
      <Display text='neutral ' counter={neutral}/>
      <Display text='bad ' counter={bad}/>
      <Display text='all ' counter={good + bad + neutral}/>
      <Display text='average ' counter={average(good, neutral, bad)}/>
      <Display text='positive ' counter={positive(good, neutral, bad)}/>

    </div>
  )
}

export default App
