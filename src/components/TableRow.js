import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this)
  }

  delete(){
    axios.get('http://localhost:4000/idea/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }


  render() {
    return (
            <div className="card text-center" style={{margin: "10px auto", width: "30rem", }} >
              <div className="card-header">

                <h3>{this.props.obj.idea_name}</h3>
              </div>
              <div className="card-body">

                <p className="card-text">{this.props.obj.idea_description}</p>
                <div >
                  <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                  <button onClick={this.delete} className="btn btn-danger editDelete">Delete</button>
                </div>
              </div>
              <div className="card-footer text-muted">
                {this.props.obj.idea_dateCreated}
              </div>
            </div>






    );
  }
}

export default TableRow;
