import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 className='createh3'>Add A New Idea</h3>
                <form>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Date created: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit Idea" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
