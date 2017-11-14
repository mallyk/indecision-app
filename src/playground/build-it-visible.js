const app = {
    title: "Visibility Toggle",
    subtitle: "Displaying the thing",
    display: false
};

const appRoot = document.getElementById('app');

const showDetails = () => {
    app.display = !app.display;

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}}</h1>
            <button onClick={showDetails}>{app.display ? 'Hide details' : 'Show details'}</button>
            {app.display && <p>{app.subtitle}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();