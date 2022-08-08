import React, {Component} from 'react';
import axios from 'axios';
import "./Home.css"
import jsPDF from "jspdf";

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };

}

GeneratePDF =()=>{
  var doc = new jsPDF("p", "pt", "a4", "pdf");
  doc.html(document.querySelector('.dely'),{
         callback: function(pdf){
             pdf.save("Alldeliveries.pdf");
         }
  });
};

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/postsSer").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts//same posts variable which is inside the constructor this.state.posts
      });

      console.log(this.state.posts)
    }

  });
}

onDelete = (id) =>{

  axios.delete(`/postsSer/delete/${id}`).then((res) =>{
    alert("Deleted Successfully!!");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
   
  const result = posts.filter((post) =>
  post.cartID.toLowerCase().includes(searchKey)||
  post.location.toLowerCase().includes(searchKey)||
  post.delivery_Date.includes(searchKey)||
  post.customerID.toLowerCase().includes(searchKey)

  )

  this.setState({posts:result})
}

handleSearchArea = (e) =>{

   const searchKey = e.currentTarget.value;

   axios.get("/postsSer").then(res =>{
    if(res.data.success){
      
      this.filterData(res.data.existingPosts,searchKey)
    }
  });
}

  render(){
    return(

        <div className="background1">
        <div className="container">  
        <div className="row">
           
        
        <div className="hme_hd">  
        <br/><br/><h3 className="zz"><b >Past Delivery Orders</b></h3></div>
        </div>
        <hr/>
        <br/><div style={{textAlign:"right"}}className="col-lg-4">
           <input
           className="form-control"
           type="search"    
           placeholder=" SEARCH DELIVERIES"
           name="searchQue"
           onChange={this.handleSearchArea}>
        
            </input>          
            </div>
             
        <br/> 
          <div className="con_1">
    
            <center>
            <div className="dely">
                <h3 style={{fontFamily:"-moz-initial"}}>Orders Report</h3>
          <br/><table className="tabledeli" style={{width:"76%"}} >
       
          <thead>
          <tr>
              <th scope="col" style={{width:"7%"}}>Delivery ID</th>
              <th scope="col" style={{width:"8%"}}>Cart ID</th>
              <th scope="col" style={{width:"10%"}}>Delivery Location</th>
              <th scope="col" style={{width:"9%"}}>Delivery Cost</th>
              <th scope="col" style={{width:"10%"}}>Delivery Date</th>
              <th scope="col" style={{width:"9%"}}>customer ID</th>
              <th scope="col" style={{width:"23%"}}>Action</th>
           </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>{
            
              return <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/postService/${posts._id}`} style={{textDecoration:"none"}}>
                    {posts.cartID}
                    </a>
                    </td>
                <td>{posts.location}</td>
                <td>{posts.delivery_charge}</td>
                <td>{posts.delivery_Date}</td>
                <td>{posts.customerID}</td>
                <td>
                    <a className="btn btn-warning" href={`/editService/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Update
		                 </a>
		                 &nbsp;

                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
		                </a>
                </td>
              </tr>
            })}
          </tbody>
        </table>
        </div>
        </center>
        
        
        <br/>
        
        <div className="text-center">
        <button className="btn btn-secondary" style={{textDecoration:"none", color:"white"}} onClick={this.GeneratePDF} type="primary"> Print as a PDF </button>
        </div>
        </div>
        <br/><br/><button className="btn btn-success"><a href="/addService" style={{textDecoration:"none", color:"white"}}> Create New Delivery </a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-success"><a href="/chargesService" style={{textDecoration:"none", color:"white"}}> Check Where We Deliver </a></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger"><a href="/OffService" style={{textDecoration:"none", color:"white"}}> Check Our New Offers </a></button><br/>
        
       
           <br/><div class="mapouter"><div class="gmap_canvas"><iframe width="1080px" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=sri jayawardenepura kotte&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org" style={{position:"relative"},{textAlign:"right"},{height:"500px"},{width:"600px"}}></a><a href="https://www.embedgooglemap.net" style={{overflow:"hidden"},{background:"none!important"},{height:"500px"},{width:"600px"}}>embed google maps html</a></div></div>
        

      </div>
      </div>
    )
}
}