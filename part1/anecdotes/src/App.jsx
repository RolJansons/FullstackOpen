import { useState } from 'react'

const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * max)
  console.log('randomly selected number', randomInt)
  return randomInt
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({anecdotes, votes}) => {
  const mostVotesIdx = votes.indexOf(Math.max(...votes))
  console.log('index with most votes', mostVotesIdx)
  if (Math.max(...votes) === 0) {
    return (
      <div>
        No votes yet
      </div>
    )
  }
  return (
    <div>
      {anecdotes[mostVotesIdx]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  console.log('votes array:', votes)

  const handleAnecdoteClick = () => {
    console.log('previous anecdote:', anecdotes[selected])
    return (
      setSelected(getRandomInt(anecdotes.length))
    )
  }

  const handleVoteClick = () => {
    console.log('previous votes state:', votes)
    const copy = [...votes]
    copy[selected] += 1
    return (
      setVotes(copy)
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button onClick={() => handleVoteClick()} text='vote'/>
        <Button onClick={() => handleAnecdoteClick()} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
        <Display anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App