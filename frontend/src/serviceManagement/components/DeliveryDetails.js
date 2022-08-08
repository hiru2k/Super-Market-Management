import React, {Component} from 'react';
import axios from 'axios';
import './DeliveryDetails.css';
import jsPDF from "jspdf";

export default class DeliveryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    GeneratePDF =() =>{
        var doc = new jsPDF("p","pt","a4","pdf");
        doc.html(document.querySelector('.w'),{
            callback:function(pdf){
                pdf.save("delivery.pdf");
            }
        });
    };

    componentDidMount(){

        const id = this.props.match.params.id;
        axios.get(`/postsSer/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });

    }
    
    render(){

        const {cartID,location,delivery_charge,delivery_Date,customerID} = this.state.post;
        return (
            <div className="background4">

            <div className="container">
            <div style={{marginTop:'20px'}}>
               <hr/>

               <center>
               <div className="w" style={{alignContent:"center"}}>
            <div style={{marginLeft:'50px'}}><h3 style={{fontFamily:"-moz-initial"}}><u> Delivery Report </u></h3></div>
            
        <div className="row" style={{padding:"80px"}}>
            <dt className="col-sm-6">Cart ID Number</dt> 
            <dd className="col-sm-6">{cartID}</dd>

            <dt className="col-sm-6">Delivery Location</dt>
            <dd className="col-sm-6">{location}</dd>

            <dt className="col-sm-6">Delivery Charge</dt>
            <dd className="col-sm-6">{delivery_charge}</dd>

            <dt className="col-sm-6">Delivery Date</dt>
            <dd className="col-sm-6">{delivery_Date}</dd>

            <dt className="col-sm-6">Customer ID Number</dt>
            <dd className="col-sm-6">{customerID}</dd>

            </div>
            <p style={{textAlign:"left"}}>This Order Fullfilment Report, one of the Ecommerce reports is crucial for <br/>
                keeping an eye out on customer order statuses.Essentially, “the Order <br/>
                Fulfillment Report provides information about customer shipments,<br/>
                including tracking numbers for individual packages,” explains Katherine Brown <br/>
                from Spyic.“Hence, managers know when they have been shipped off <br/>
                and how many items were included in a particular shipment.”<br/>
                Having this information at hand is critical for solving any customer queries <br/>
                related to shipping and returns that may come in.This report is also <br/>
                important for those of you who are aiming to improve customer experience <br/>
                by offering free and fast delivery – something that 79.3% say is important to them <br/>
                with 28.6% admitting delivery dates influence their buying decisions.</p>
            </div>
           <br/><button className="btn btn-secondary" style={{textDecoration:"none", color:"white"}} onClick={this.GeneratePDF} type="primary"> Print as a PDF </button>
            </center>


            <div className="sttus">
            <br/><br/><hr/><h3 style={{fontFamily:"monospace"}}><u><b> Order Status </b></u></h3>
            <center>
            <img src="/static/images/st2up.jpg" width="90%" height="270px"/></center>
            <br/><center><p><h5 style={{color:"maroon"}}>Your order has successfully reached to destination location, {location} on {delivery_Date} before 17:30 on our working time. Thank You.</h5></p></center>
            <hr/>
            </div>
            
            </div>
            </div>
            </div>
        )
    }
}