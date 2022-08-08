import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import CreateDelivery from './serviceManagement/components/CreateDelivery';
import EditDelivery from './serviceManagement/components/EditDelivery';
import Home from './serviceManagement/components/Home';
import DeliveryDetails from './serviceManagement/components/DeliveryDetails';
import DeliveryCharges from './serviceManagement/components/DeliveryCharges';
import Reciept from './serviceManagement/components/Reciept';
import CreateOffers from './serviceManagement/components/Offers/CreateOffers';
import Offers from './serviceManagement/components/Offers/Offers';
import EditOffer from './serviceManagement/components/Offers/EditOffer';



export default class AppService extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
      
      <Route path="/service"  component={Home}></Route>
      <Route path="/addService" component={CreateDelivery}></Route>
      <Route path="/editService/:id" component={EditDelivery}></Route>
      <Route path="/postService/:id" component={DeliveryDetails}></Route>
      <Route path="/chargesService" component={DeliveryCharges}></Route>
      <Route path="/recieptService" component={Reciept}></Route>
      <Route path="/addoffer" component={CreateOffers}></Route>
      <Route path="/OffService" component={Offers}></Route>
      <Route path="/offeredit/:id" component={EditOffer}></Route>

      </div>
      </BrowserRouter>
    )
  }
}
