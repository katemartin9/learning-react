const Hello = (props) => {
  console.log(props)
  const now = new Date()
  return (
    <div>
    <p>Hello {props.name}, it is {now.toString()} and you are {props.age}</p>
  </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name={name} age={26 + 10} />
      <Hello name='Daisy' age={age}/>
      <Hello name='Milly' age={55}/>
    </div>
  )
}


export default App;
