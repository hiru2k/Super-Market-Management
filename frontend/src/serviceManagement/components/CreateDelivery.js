import React, {Component} from 'react';
import axios from 'axios'
import './create.css'

export default class CreateDelivery extends Component {

    constructor(props) {
        super(props);
        this.state={
            cartID:"",
            location:"",
            delivery_charge:"",
            delivery_Date:"",
            customerID:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e) =>{

        e.preventDefault();

        const {cartID,location,delivery_charge,delivery_Date,customerID} = this.state;

        const data = {
            cartID:cartID,
            location:location,
            delivery_charge:delivery_charge,
            delivery_Date:delivery_Date,
            customerID:customerID
        }

        console.log(data)

        axios.post("/postsSer/save",data).then((res) =>{
            if(res.data.success){
                alert("Delivery Information Inserted Successfully!!")
                this.setState(
                    {
                        cartID:"",
                        location:"",
                        delivery_charge:"",
                        delivery_Date:"",
                        customerID:""
                    }
                )
            }
        })
    }

    render(){
        return (
            <div className="background">
            <div className="container">
            <div className="crte" style={{width:"85%"}}>

            <br/><h3 style={{textAlign:"center"}}><b> Place Your Delivery Order</b></h3><hr/>
           <br/>

           <div id="demo" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            </ul>
  
            <div className="carousel-inner" style={{height:"100%"},{width:"100%"}}>
            <div className="carousel-item active">
            <img src="/static/images/e.jpg" width="100%" height="100%"/>
            </div>
            <div className="carousel-item">
            <img src="/static/images/q.jpg" width="100%" height="300px"/>
            </div>
            <div className="carousel-item">
            <img src="/static/images/z.jpg" width="100%" height="300px"/>
            </div>
            </div>
  
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
            </div>

           
                    <br/><form className="cte"> 

                    <div className="form-group" style={{marginBottom:"15px"},{fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Cart ID Number</label>
                        <input type="text" 
                        className="form-control"
                        name="cartID"
                        placeholder="Enter cartID Number"
                        value={this.state.cartID}
                        required
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"},{fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Location</label>
                        <input type="text" required
                        className="form-control"
                        name="location"
                        placeholder="Enter Delivery Address"
                        value={this.state.location}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"},{fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Cost</label>
                        <input type="number" required
                        className="form-control"
                        name="delivery_charge"
                        placeholder="Enter Delivery Charge"
                        value={this.state.delivery_charge}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"},{fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Date</label>
                        <input type="text" required
                        className="form-control"
                        name="delivery_Date"
                        placeholder="Enter Delivery Date" 
                        value={this.state.delivery_Date}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"},{fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Customer ID Number</label>
                        <input type="text" required
                        className="form-control"
                        name="customerID"
                        placeholder="Enter Customer ID Number"
                        value={this.state.customerID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <br/><center>
                    <button className="btn btn-success" type="submit" style={{marginBottom:"15px"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Make Order
                    </button>
                    </center>

                </form>
            
                </div>
                </div>  
                </div>
        )
    }
}