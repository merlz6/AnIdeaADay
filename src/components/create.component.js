import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangedescription = this.onChangedescription.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  this.state = {
    idea_name:'',
    idea_description:'',
    idea_dateCreated:''
  }
}
onChangeName(event) {
    this.setState({
      idea_name: event.target.value
    });
  }
  onChangedescription(event) {
    this.setState({
      idea_description: event.target.value
    })
  }
  onChangeDate(event) {
    this.setState({
      idea_dateCreated: event.target.value
    })
  }
  onSubmit(event) {
   event.preventDefault();
   console.log(`The values are ${this.state.idea_name}, ${this.state.idea_description}, and ${this.state.idea_dateCreated}`)
   this.setState({
     idea_name:'',
     idea_description:'',
     idea_dateCreated:''
   })
 }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 className='createh3'>Add A New Idea</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.idea_name}
                          onChange={this.onChangeName}
                          />
                    </div>
                    <div className="form-group">
                        <label>Description </label>
                        <input
                          type="text"
                          className="form-control"
                          value={this.state.idea_description}
                          onChange={this.onChangedescription}
                          />
                    </div>
                    <div className="form-group">
                        <label>Date created: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.idea_dateCreated}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="submit" value="Submit Idea" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
