import React from "react";
import "./App.css";

class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      cardNumber:"**** **** **** ****",
      validThru:"**/**",
      userName:"UserName",

    }
  }

  validDate=e=>{
		if(!e.target.value.match(/[^0-9/]/gi) && e.target.value.length < 6 && e.target.value.slice(0,2) < 13) {
			this.setState({
				validThru: e.target.value
				.replace(/[^\d]/g, "")
				.replace(/(.{2})/g, "$1/")
				.replace(/^['/'\uFEFF\xA0]+|['/'\uFEFF\xA0]+$/g, "").slice(0,5)
			})
    }
    else{
      e.target.value=null
    }
  }
  
  regName =/(?!.*[\.\-\_]{2,})^[a-zA-Z\.\-\_]{0,20}$/ 

  regNumber=(e)=>{
    let patt=/^[0-9]*$/gm;
     if (patt.test(e.target.value)){
      let newValue = String(e.target.value).slice(0,4)+" "+String(e.target.value).slice(4,8)+" "+String(e.target.value).slice(8,12)+" "+String(e.target.value).slice(12,16)
       this.setState({cardNumber: newValue})
     }
     else{
       e.target.value=null
     }
  }
 
  render() {
  
    return ( 
    
    <div className="App">
      <div className="card-container">
        <h1>CompanyName</h1>
        <p>{this.state.cardNumber.padEnd(16,'*')}</p>
        <img src="https://image.shutterstock.com/image-illustration/credit-card-chip-isolated-3d-260nw-1026233488.jpg"/>
        <div className="thru-image">
          <p>{this.state.validThru}</p>
          <img src="https://www.azernews.az/media/2016/08/15/mastercard__logo_140815.jpg" alt="*" />
        </div>
        <p>{this.state.userName}</p>
      </div>
      <div className="input-container">
        <input type="text"   maxLength="16" onChange={this.regNumber}/>
        <input type="text"   maxLength="4"  onChange={this.validDate} />
        <input type="text"   maxLength="20"  onChange={(e) => this.regName.test(e.target.value)?this.setState({userName:e.target.value.toUpperCase()}):null} />
      </div>
    </div>
    
    );
  };
}

export default App;
