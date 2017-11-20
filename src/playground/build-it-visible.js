class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            display: false
        };
        this.title = "Visibility Toggle";
        this.subtitle = "Displaying the thing";
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                display: !prevState.display
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.display ? 'Hide details' : 'Show details'}</button>
                {this.state.display && <p>{this.subtitle}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const app = {
//     title: "Visibility Toggle",
//     subtitle: "Displaying the thing",
//     display: false
// };

// const appRoot = document.getElementById('app');

// const showDetails = () => {
//     app.display = !app.display;

//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={showDetails}>{app.display ? 'Hide details' : 'Show details'}</button>
//             {app.display && <p>{app.subtitle}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();