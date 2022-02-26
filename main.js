// function getMood() {
//     const moods = ['Horny', 'Hungry', 'Happy', 'Sad', 'God Mode'];
//     return moods[Math.floor(Math.random() * moods.length)];
// }

// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello There!</h1>
//                 <h1>My number is: {18}</h1>
//                 <h1>My current mood is: {getMood()}</h1>
//             </div>
//         );
//     }
// }

// // function Bye() {
// //     return <h1>Good Bye!</h1>;
// // }

// ReactDOM.render(<Hello/>, document.getElementById('root'));
// // ReactDOM.render(<Bye/>, document.getElementById('root'));



// Get Number
function getNum() {
  return Math.floor(Math.random() * 10 + 1);
}

// Conditionals in JSX
class NumPicker extends React.Component {
    render() { 
            const num = getNum();         
            return (
              <div>
              <h1>Your Number is: {num}</h1>
              <p>{thing ? 'Ok' : 'Try Next Time'}</p>
              </div>              
          )         
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));