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

const Contact = () =><h1>Register</h1>;               
ReactDOM.render(<App />, document.querySelector('#root'));

function About(){
	return (
	<section class="my-3 py-3">                       <div class="container">                           <div class="row">                             <div class="row justify-content-center text-center my-sm-5">                              <div class="col-lg-6">                        <span class="badge bg-primary mb-3">About</span>                        <h2 class="text-dark mb-0">Who We Are</h2>                             <p class="lead">         <p>Acsolot Integrated Services Limited formally Ages Xpat Technology is a NG-based IT-consulting and software development company founded in the year 2009; out of burning passion to help global companies and established brands to achieve and accelerates business growth at a reduced costs.</p>       </p>                                                                                                  </div>                                    </div>                                    </div>                                    </div>                </section>
	
)
};

const Contact = () =><h1>Register</h1>;               
function Web(){
	return (
	<section class="my-5 py-5">
	<div class="container">                               <div class="row align-items-center">                 <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
	<div class="rotating-card-container">                   <div class="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">                                                    <div class="front front-background" >
	<div class="card-body py-7 text-center">                                                  <i class="material-icons text-white text-4xl my-3">touch_app</i>

Gdjdjdkd
	</div>                                                      </div>                                            </div>
	</div>                                                      </div>                                            </div>
	</div>
	
	</section>
)

};
