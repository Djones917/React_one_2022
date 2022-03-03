class App extends React.Component {
    render() {
        return (
        <div>
          <Hello to="Vincent" from="Dad"/>
          <Hello />
        </div>
        )
    }
}

 ReactDOM.render(<App />, document.getElementById('root'));