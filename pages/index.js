import CurrentQuote from "../components/CurrentQuote";
import theme from '../pages/theme.js'; 

 
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
              
              <link 
                href="https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap" 
                rel="stylesheet"
                key="google-font-josefin-slab" 
                />
              
                <div className="header">
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
                    <style global jsx>{`

                      body {
                        background-image: url("./../static/cattails.jpg");
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 100%;
                        width: 100%;
                        color: ${theme.colors.text};
                        font-family: 'Josefin Slab', serif;
                        text-align: center 
        
                      }
                      `}</style>
                      <style global jsx>{`
                        body {
                          margin: 0;
                          padding: 0;
                          font-size: 18px;
                          font-weight: 400;
                          line-height: 1.8;
                        }
                        h1 {
                          font-weight: 700;
                        }
                        p {
                          margin-bottom: 10px;
                        }
                        `}</style>
            
            </div>
        );
    }
}
  
  export default Index;