class App extends React.Component {
    render() {
        return (
        <div>
          <Hello to="Vincent" from="Dad"/>
          <Hello to="Ivy" from="Dad"/>
        </div>
        )
    }
}

 ReactDOM.render(<App />, document.getElementById('root'));