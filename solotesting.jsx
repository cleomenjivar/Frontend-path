// const name = "Carlos"
// const el = <p>Hello, {name}</p>

const { func } = require("prop-types")

// const { func } = require("prop-types");

// // reactDOM.render(
// //     el,
// //     document.getElementById('root')
// // );

// let counter = 0,

// function show () {
//     counter++;
//     const el = <p> {counter} </p>;
//     reactDOM.render (
//         el, document.getElementsById("root")
//     );
// }

//setInterval(show, 1000);

// Functional Component
// function Hello() {
//     return <h1>Hello World.</h1>;
// }

// function Hello() {
//     return <h1>Hello world.</h1>;
//   }
  
//   const el = <Hello />; 
//   ReactDOM.render(
//     el, 
//     document.getElementById('root')
//   );

//Class Component
// class Hello extends React.Component {
//     render() {
//         return <h1>Hello world.</h1>;
//     }
// }

function App () {
    return <div>
        <Hello name = "Carlos" />
        <Hello name = "Alex" />
        <Hello name = "Jessica" />
    </div>;
}

//Props
class Image extends React.Component {
    render() {
        return <img src={this.props.url} />;
    }
}
