import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
  super(props);
  this.onChangeIdeaName = this.onChangeIdeaName.bind(this);
  this.onChangeIdeaDescription = this.onChangeIdeaDescription.bind(this);
  this.onChangeIdeaDateCreated = this.onChangeIdeaDateCreated.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    idea_name: '',
    idea_description : '',
    idea_dateCreated:''
  }
}

componentDidMount() {
    axios.get('http://localhost:4000/idea/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({
              idea_name: response.data.idea_name,
              idea_description: response.data.idea_description,
              idea_dateCreated: response.data.idea_dateCreated });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

onChangeIdeaName(e) {
  this.setState({
    idea_name: e.target.value
  });
}
onChangeIdeaDescription(e) {
  this.setState({
    idea_description: e.target.value
  })
}
onChangeIdeaDateCreated(e) {
  this.setState({
    idea_dateCreated: e.target.value
  })
}
onSubmit(e) {
  e.preventDefault();
  const obj = {
    idea_name: this.state.idea_name,
    idea_description: this.state.idea_description,
    idea_dateCreated: this.state.idea_dateCreated
  };
  axios.post('http://localhost:4000/idea/update/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));

  this.props.history.push('/index');
}
  render() {
 return (
     <div style={{ marginTop: 10 }}>
         <h3 align="center">Update Idea</h3>
         <form onSubmit={this.onSubmit}>
             <div className="form-group">
                 <label>Idea Name:  </label>
                 <input
                   type="text"
                   className="form-control"
                   value={this.state.idea_name}
                   onChange={this.onChangeIdeaName}
                   />
             </div>
             <div className="form-group">
                 <label>Idea Description: </label>
                 <input type="text"
                   className="form-control"
                   value={this.state.idea_description}
                   onChange={this.onChangeIdeaDescription}
                   />
             </div>
             <div className="form-group">
                 <label>Date Created: </label>
                 <input type="text"
                   className="form-control"
                   value={this.state.idea_dateCreated}
                   onChange={this.onChangeIdeaDateCreated}
                   />
             </div>
             <div className="form-group">
                 <input type="submit"
                   value="Update Idea"
                   className="btn btn-primary"/>
             </div>
         </form>
     </div>
 )
}
}
