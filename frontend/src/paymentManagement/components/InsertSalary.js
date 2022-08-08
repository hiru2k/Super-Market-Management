import React, {Component} from 'react';
import axios from 'axios';


export default class InsertSalary extends Component{


constructor(props){
    super(props);
    this.state={ 
        Name:"",
        Basicsalary:"",
        OT:"",
        Vehicleallowance:"",
        Totaladdition:"",
        Transport:"",
        Personaltel:"",
        Totaldeduction:"",
        Netsalary:""
    

    }
}

    handleInputChange = (e) =>{ 
         const {name,value} = e.target; 

         this.setState({
             ...this.state,
        [name]:value
        
    })
    }
    
    onSubmit = (e) =>{ 

        e.preventDefault();
         const{Name,Basicsalary,OT,Vehicleallowance,Totaladdition,Transport,Personaltel,Totaldeduction,Netsalary} = this.state;

         const data = {
             Name:Name,
             Basicsalary:Basicsalary,
             OT:OT,
             Vehicleallowance:Vehicleallowance,
             Totaladdition:Totaladdition,
             Transport:Transport,
             Personaltel:Personaltel,
             Totaldeduction:Totaldeduction,
             Netsalary:Netsalary

         }

         console.log(data)
        
         axios.post("/salary/save",data).then((res) =>{ 
             if(res.data.success){ 
                 this.setState( 
                     {
                        Name:"",
                        Basicsalary:"",
                        OT:"",
                        Vehicleallowance:"",
                        Totaladdition:"",
                        Transport:"",
                        Personaltel:"",
                        Totaldeduction:"",
                        Netsalary:""
                         
                     }
                 )
             }
         })
    }
    
    render(){
        return(



            <div className="background3">
              <div class="col-mb-8 mt-4 mx-auto">
                  <h1 className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>Insert Salary</h1>
                    
                      




    <form className="needs-validation" noValidate>
                        



                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Employee Name</label>
                            <input type="text" className="form-control" name="Name" 
                            value={this.state.Name} onChange={this.handleInputChange}/>
                        </div>


                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Basic Salary</label>
                            <input type="text" className="form-control" name="Basicsalary" 
                            value={this.state.Basicsalary} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">OT Hours</label>
                            <input type="text" className="form-control" name="OT" 
                            value={this.state.OT} onChange={this.handleInputChange}/>
                        </div> 

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Vehicle Allowane</label>
                            <input type="text" className="form-control" name="Vehicleallowance" 
                            value={this.state.Vehicleallowance} onChange={this.handleInputChange}/>
                        </div>

                        

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Transport</label>
                            <input type="text" className="form-control" name="Transport" 
                            value={this.state.Transport} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                           <label style={{marginBottom:'5px'}} class="form-label">Personal Telephone Charges</label>
                            <input type="text" className="form-control" name="Personaltel" 
                            value={this.state.Personaltel} onChange={this.handleInputChange}/>
                        </div>

                        

                        
                   <center>
                       <button className="btn btn-success"  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                       <i className="far fa-check-square"></i>
                        &nbsp;save
                       </button>
                      </center>
                    </form>
                    </div>
                    </div>
                   
        )
    }
}