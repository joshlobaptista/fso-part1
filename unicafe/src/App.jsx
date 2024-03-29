import { useState } from 'react'

const Button = (props) => {
  console.log(props, "clicked")
  const { handleClick, text} = props
  return  (
  <button onClick={handleClick} >
    {text}
  </button>
)
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


// const handleGoodClick = () => {
//   setGood(good + 1)
// }
// const handleNeutralClick = () => {
//   debugger
//   setNeutral(neutral + 1)
// }
// const handleBadClick = () => {
//   setBad(bad + 1)
// }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

    </div>
  )
}

export default App
