class App extends React.Component {
    render() {
        return (
        <div>
          <Hello 
            to="Vincent" 
            from="Dad"
            age={10}
          />
          <Hello 
            to="Ivy" 
            from="Dad"
            age={8}
          />
        </div>
        )
    }
}

 ReactDOM.render(<App />, document.getElementById('root'));