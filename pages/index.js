import CurrentQuote from "../components/CurrentQuote";
// import "...static/css/rocks_tiny_flowers.jpg"; 

 
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentQuote: "",
            quotes: ["Hey now, you're an all-star", "Get your game on, get paid", "All that glitters is gold~"],
            NewQuote: ""
        
        };
            this.handleClick = this.handleClick.bind(this);
            this.handleAddQuote = this.handleAddQuote.bind(this);
            this.handleChange = this.handleChange.bind(this);
    }  

      
      componentDidMount() {
          this.setState({
              CurrentQuote:this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
          }) 
      }

      handleClick() {
        this.setState({
            CurrentQuote:this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
        }) 
      }

      handleAddQuote() {
        this.setState({
            quotes:this.state.quotes.concat(this.state.NewQuote)
        }) 
      }

      handleChange(e) {
        const {name,value}= e.target
        this.setState({
            [name]:value
        })
      }

    render() {
        return (
            <div>
                <div class="header">
                Welcome to your Quoting Generator!
                </div>
                <CurrentQuote quote={this.state.CurrentQuote}/>
                    <input name="NewQuote" value={this.state.NewQuote} onChange={this.handleChange}/>
                    <button onClick={this.handleAddQuote}> 
                        Add Quote 
                    </button> 
                    <br />
                    <button onClick={this.handleClick}> 
                        Load New Quote 
                    </button>                    
                    <style jsx>{`
                        p {
                        color: blue;
                        }
                        div {
                        background: 
                        }
                        @media (max-width: 600px) {
                        div {
                            background: blue;
                        }
                        }
                        `}</style>
                        <style global jsx>{`
                        
                          body {
                            @import url('https://fonts.googleapis.com/css?family=Sue+Ellen+Francisco&display=swap');
                            font-family: 'Sue Ellen Francisco', cursive;
                            color: white;
                            text-align: center;
                            background: url(https://images.unsplash.com/photo-1422466839804-70381f09bea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1863&q=80);
                            background-size: 100vw 100vh;
                          }
                        `}</style>
            
            </div>
        );
    }
}
  
  export default Index;