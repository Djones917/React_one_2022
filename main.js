function getMood() {
    const moods = ['Horny', 'Hungry', 'Happy', 'Sad', 'God Mode'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello There!</h1>
                <h1>My number is: {18}</h1>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        );
    }
}


// function Bye() {
//     return <h1>Good Bye!</h1>;
// }

ReactDOM.render(<Hello/>, document.getElementById('root'));
// ReactDOM.render(<Bye/>, document.getElementById('root'));