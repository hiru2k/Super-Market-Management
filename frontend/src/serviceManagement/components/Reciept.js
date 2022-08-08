import React, {Component} from 'react';
import "./Reciept.css";
import jsPDF from "jspdf";

export default class Reciept extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      value: 'Galle'

    };
  
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a4", "pdf");
    doc.html(document.querySelector('.rcpss'),{
           callback: function(pdf){
               pdf.save("receipt.pdf");
           }
    });
  };

  render(){

      return (
        <div className="background2">

        <div className="container">

        <div className = "recpt"> 

        <div className="recptform">
        <form>
        <br/><br/><hr/><label style={{fontSize:"22px"}}>
            Select your Delivery Town
          &nbsp;&nbsp;<select value={this.state.value} onChange={this.handleChange}>
          <option value="Galle">Galle</option>
          <option value="Colombo">Colombo</option>
          <option value="Matara">Matara</option>
          <option value="Hambanthota">Hambanthota</option>
          </select>
          </label>
          </form>
        </div>

        
        <div className="rpt">

        <div className="row" style={{ width: '100%'}}>
        <div className="column" style={{float: 'left'},{ width: '50%'}}>
        <br/><img src="/static/images/payServ.png" width='500px' height='300px'/>
        </div>
        <div className="column" style={{ width: '50%'}}>
        <br/><img src="/static/images/payS.png" width='500px' height='300px'/>      
        </div>
        </div>

        <br/><div className="rcpss" style={{alignContent:"center"}}>
        <br/>
        <div className="recpheader">
        <h3><i class="fas fa-leaf"></i>.<i>SuperMarket</i></h3><hr style={{width:"550px"}}/></div>
        <br/><h4 style={{marginLeft:'220px'}}><u>Reciept</u></h4>
        
        <br/><br/><div className="row" style={{marginLeft:'50px'}}>
       
        <dt className="col-sm-6"><h5> Your Delivery Area is   :</h5></dt> <dd className="col-sm-6">{this.state.value}</dd>
        <dt className="col-sm-6"><h5> Delivery Charge      : </h5></dt> <dd className="col-sm-6">{(() => {
                    switch (this.state.value) {
                      case "Galle":   return "Rs.200.00";
                      case "Colombo": return "Rs.250.00";
                      case "Matara":  return "Rs.350.00";
                      default:      return "Rs.400.00";
                        }
                 })()}</dd>
        <dt className="col-sm-6"><h5> Service Charge        : </h5></dt> <dd className="col-sm-6">Rs.60.00</dd>   
        <hr style={{width:"450px"}}/><dt className="col-sm-6"><h5> Total Payment = </h5></dt> <dd className="col-sm-6">
        {(() => {
                  switch (this.state.value) {
                      case "Galle":   return "Rs.260.00";
                      case "Colombo": return "Rs.310.00";
                      case "Matara":  return "Rs.410.00";
                      default:      return "Rs.460.00";
                        }
                 })()}</dd><hr style={{width:"450px"}}/><hr style={{width:"450px"}}/>
            
            <br/><br/>
            <p><h6>**Our organization is 100% responsible for your payments.</h6></p>
            </div>
      
      </div>
    
      </div>
      <div className="ssss" style={{marginLeft:'250px'}}>
      <br/><button className="btn btn-secondary" style={{textDecoration:"none", color:"white"}} onClick={this.GeneratePDF} type="primary"> Print Reciept </button>
      </div>
      <br/><hr/>
      </div>
      </div>
      </div>
      )
  }
}