const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route;                                             
const App = () => (                           
<ReactRouterDOM.HashRouter>                           
<Route path="/" exact component={Home} />             
<Route path="/about" component={About} />             
<Route path="/contact" component={Contact} />
<Route path="/services" component={Services} />
<Route path="/web" component={Web} />
</ReactRouterDOM.HashRouter>        
);

ReactDOM.render(<App />, document.querySelector('#root'));

const Home = () =><h1>Homw</h1>   

const Services = () =><h1>Homw</h1>

const Contact = () =><h1>Register</h1>

const About = () =><h1>Homw</h1>

const Web = () =><h1>Register</h1>;
