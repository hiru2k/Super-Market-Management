import React, {Component} from 'react';
import axios from 'axios'; 



export default class EmployeePayment extends Component{
constructor(props){
  super(props);

 
  this.state={
    salaries:[] 
  };
}


componentDidMount(){
  this.retriveSalaries(); 
}


retriveSalaries(){ 
  axios.get("/salaries").then(res=>{ 
    if(res.data.success){
      this.setState({
        salaries:res.data.existingSalaries
      });

      console.log(this.state.salaries);
    }
  });
}



onDelete = (id) =>{ 
   axios.delete(`/salary/delete/${id}`).then((res) =>{ 
     alert("Delete successfully");
     this.retriveSalaries();

   })
}
  


filterData(employee,searchKey){

  const result = employee.filter((a)=>

   a.Name.includes(searchKey)
  )
  this.setState({salaries:result})
}

handleSearchArea=(e) =>{
  const searchKey =e.currentTarget.value;
  axios.get("/salaries").then(res=>{ 
    if(res.data.success){
      this.filterData(res.data.existingSalaries,searchKey)

    }

});
}

render(){ 
    return(
      <div className ="background3">
      <div className ="container">
      <div className="row">
        



        <div className="textcenter" style={{marginTop:'40px' ,backgroundColor:'black' , color:'white', padding:'30px'}}>
           <h4>Employee Payment Management</h4>
       </div>
       <hr/>

        <div className="col-lg-3 mt-2 mb-2">
        <input
           className = "from-control" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
             </input>
             </div>
             
      </div>
        <table className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Basic Salary</th>
              <th scope="col">OT</th>
              <th scope="col">Vehicle Allowance</th>
              <th scope="col">Total Addition</th>
              <th scope="col">Transport</th>
              <th scope="col">Personal Tel</th>
              <th scope="col">Total Deduction</th>
              <th scope="col">Net Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
              {this.state.salaries.map((salaries,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  <td>
                      
                      <a href = {`/salary/${salaries._id}`} style={{textDecoration:'none'}}>
                      {salaries.Name}
                      </a>
                  
                   </td>  
                   <td>{salaries.Basicsalary}</td>
                  <td>{salaries.OT}</td>
                  <td>{salaries.Vehicleallowance}</td>
                  <td>{salaries.Totaladdition}</td>
                  <td>{salaries.Transport}</td>
                  <td>{salaries.Personaltel}</td>
                  <td>{salaries.Totaldeduction}</td>
                  <td>{salaries.Netsalary}</td>
                  <td>

                    <a className="btn btn-outline-success" href={`/editSalary/${salaries._id}`}>
                    <i className = "fas fa-edit"></i>&nbsp;Edit
                    </a>
                     &nbsp;
                    <a className="btn btn-outline-success" href="#" onClick={()=>this.onDelete(salaries._id)}> 
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>

                </tr>
               ) )}

          </tbody>
        </table>
       

        <div style={{marginTop:'20px' }}>
        <center>
         <button type="button" class="btn btn-success"><a href ="/addSalary" style={{textDecoration:'none', color:'white'}}>Insert New Salary</a></button>
        </center>
        </div>
        </div>
      </div>
       
     
    )
  }
}

