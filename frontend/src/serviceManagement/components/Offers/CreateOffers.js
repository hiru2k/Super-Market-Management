import React, {Component} from 'react';
import axios from 'axios';
import './CreateOffers.css';

export default class CreateOffers extends Component {

    constructor(props) {
        super(props);
        this.state={
            offerID:"",
            offerName:"",
            description:""
            
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

        const {offerID,offerName,description} = this.state;

        const data = {
            offerID:offerID,
            offerName:offerName,
            description:description
        
        }

        console.log(data)

        axios.post("/offer/save",data).then((res) =>{
            if(res.data.success){
                alert("New Offer Details Inserted Successfully!!")
                this.setState(
                    {
                        offerID:"",
                        offerName:"",
                        description:""
    
                    }
                )
            }
        })
    }

    render() {
        return(
            <div className="background6">
            <div className="container">
            <div className="crtoff">
                
                <br/>
                <a href="javascript: history.go(-1)"><i class="fas fa-arrow-left"></i>&nbsp;Go Back</a>
                
                <center>
                <h3 className="ab1"><b> Introducing A New Offer </b></h3><hr/><br/></center>

                <center>
                <div id="deof" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
            <li data-target="#deof" data-slide-to="0" className="active"></li>
            <li data-target="#deof" data-slide-to="1"></li>
            <li data-target="#deof" data-slide-to="2"></li>
            </ul>
  
            <div className="carousel-inner" style={{height:"60%"},{width:"60%"}}>
            <div className="carousel-item active">
            <img src="/static/images/k.jpg" width="100%" height="100px"/>
            </div>
            <div className="carousel-item">
            <img src="/static/images/l.jpg" width="100%" height="100px"/>
            </div>
            <div className="carousel-item">
            <img src="/static/images/o.jpg" width="100%" height="100px"/>
            </div>
            </div>
  
            <a className="carousel-control-prev" href="#deof" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#deof" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
            </div>
            </center>

               <br/> <form className="ofy" >
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}><b>Offer ID Number</b></label>
                        <input type="text"
                        className="form-control"
                        name="offerID"
                        placeholder="Enter Offer ID Number"
                        value={this.state.offerID}
                        onChange={this.handleInputChange} required/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}><b>How you name the new offer ?</b></label>
                        <input type="text"
                        className="form-control"
                        name="offerName"
                        placeholder="Enter Offer Name"
                        value={this.state.offerName}
                        onChange={this.handleInputChange} required/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}><b>What is about the new offer ?</b></label>
                        <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter the description"
                        value={this.state.description}
                        onChange={this.handleInputChange} required/>
                    </div>

                    <br/><center><button className="btn btn-success" type="submit" style={{marginBottom:"15px"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save Offer
                    </button>
                    </center>

                </form>
                
            </div>
            </div>
            </div>
        )

        }
    }
    