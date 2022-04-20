const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route;                                                                         
const App = () => (                                   
<ReactRouterDOM.HashRouter>                           
<Route path="/" exact component={Home} />             
<Route path="/about" component={About} />             
<Route path="/contact" component={Contact} />
</ReactRouterDOM.HashRouter>                                                                                
);                                                                                                          
const Home = () =><h1>Homw</h1>                       
const About = () =><h1 class="name">About</h1>                     
const Contact = () =><h1>Register</h1>;               
ReactDOM.render(<App />, document.querySelector('#root'));
