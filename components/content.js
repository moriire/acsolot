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
const About = () =>(
	<section class="my-3 py-3">                       <div class="container">                           <div class="row">                             <div class="row justify-content-center text-center my-sm-5">                              <div class="col-lg-6">                        <span class="badge bg-primary mb-3">About</span>                        <h2 class="text-dark mb-0">Who We Are</h2>                             <p class="lead">         <p>Acsolot Integrated Services Limited formally Ages Xpat Technology is a NG-based IT-consulting and software development company founded in the year 2009; out of burning passion to help global companies and established brands to achieve and accelerates business growth at a reduced costs.</p>       </p>                                                                                                  </div>                                    </div>                                    </div>                                    </div>                </section>
)

const Contact = () =><h1>Register</h1>;               
ReactDOM.render(<App />, document.querySelector('#root'));
