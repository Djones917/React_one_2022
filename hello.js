class Hello extends React.Component {
    render() {
        return <h1>Hello: {this.props.to} From: {this.props.from} Age: {this.props.age}</h1>
    }
}