
import React, { Component } from 'react';
import { Link } from "react-router";

import Guest from './Guest.jsx';


//=========================Search Bar Component=============================== 
class SearchBar extends Component {
  constructor(props) {
    super(props);
    
  }    

  updateSearch(event) {  

    return this.props.onChangeSearchTerm(event.target.value);
    
  }

  render() {

    return (
        <div className="row search-row valign-wrapper">

            <div className="col s1 m1 l1 valign">
              <i className="material-icons search-icon center">search</i>
            </div>

            <div className="col s11 m5 l4 valign">
                <input 
                    className="guest-search"
                    type="text"
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Type here to search by guest name..."
                  />                    
            </div>

            <div className="col s12 m6 l7">
                  <h5 className="right-align">Add a new guest <Link to="dash/add-guest" className="gl-btn-primary btn-floating btn-small  waves-effect waves-light hoverable"><i className="material-icons">playlist_add</i></Link></h5>
            </div>
            
        </div>
    );
  }
}
//=========================== End =============================

export default SearchBar;

