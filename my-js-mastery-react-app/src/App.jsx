import Card from "./components/Card"

const App = () => {
  return (
    <>
      <Card title="Shadowhunters" actor={{ firstName: "Dzoni", lastName: "Milanovic"}}/>
      <Card title="Titanic" actor={{ firstName: "Leo", lastName: "Dicaprio"}}/>
      <Card title="Terminator" actor={{ firstName: "Arnold", lastName: "Schwartz"}}/>
    </>
  )
}

export default App