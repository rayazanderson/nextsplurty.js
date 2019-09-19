import CurrentQuote from "../components/CurrentQuote";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Visibility,
  Modal
} from "semantic-ui-react";
const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>Home</Menu.Item>
      <Menu.Item as="a">Work</Menu.Item>
      <Menu.Item as="a">Company</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
); 


 
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: "",
            quotes: [],
            newQuote: ""
        
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
        console.log(this.state.quotes);
        const newQuotesState = [...this.state.quotes];
        newQuotesState.push(this.state.newQuotes);
        this.setState({
            CurrentQuote:this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
        }) 
      }

      handleAddQuote() {
        this.setState({
            quotes:this.state.quotes.concat(this.state.NewQuote)
        }) 
      }

      handleChange = e =>  {
        const {value}= e.target
        this.setState({
            currentQuote:value
        })
      }

    render() {
      console.log(this.state.currentQuote);
        return (
            <div>
              
              <link 
                href="https://fonts.googleapis.com/css?family=Josefin+Slab&display=swap" 
                rel="stylesheet"
                key="google-font-josefin-slab" 
                />
                <link rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                />
              <Menu
                style={{
                  background: "none",
                  border: "none",
                  borderRadius: 0,
                  boxShadow: "none",
                  marginTop: "5em",
                  transition: "box-shadow 0.6s ease, padding 0.6s ease"
                }}
              >
                  <Menu.Item header>Welcome to your Quoting Generator!</Menu.Item>
                  
              </Menu>

              <CurrentQuote quote={this.state.CurrentQuote}/>
              <br />
                <div className="header">
                Welcome to your Quoting Generator!
                </div>
                    
                    <Modal trigger={<button onClick={this.handleAddQuote}> 
                        Add New Quote </button>}>
                        
                        <br />
                      <input value={this.state.newQuote} onChange={this.handleChange}/>
                    <button onClick={this.handleClick}> 
                        Load New Quote 
                    </button>
                    </Modal>
                    
                    <style global jsx>{`

                      body {
                        background-image: url("./../static/cattails.jpg")   !important;
                        background-size: auto            !important;
                        background-repeat: no-repeat        !important;       
                        background-position: center         !important;
                        height: 100%                        !important;
                        width: 100%                         !important;
                        color: white         !important;
                        font-family: 'Josefin Slab', serif     !important;
                        text-align: center                    !important;
        
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