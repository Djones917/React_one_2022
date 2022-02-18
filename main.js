class Hello extends React.Component {
    render() {
        return <h1>Hello There!</h1>;
    }
}


// function Bye() {
//     return <h1>Good Bye!</h1>;
// }

ReactDOM.render(<Hello/>, document.getElementById('root'));
// ReactDOM.render(<Bye/>, document.getElementById('root'));