import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
  constructor(props) {
   super(props);
   this.state = {ideas: []};
 }
 componentDidMount(){
   axios.get('http://localhost:4000/idea')
     .then(response => {
       this.setState({ ideas: response.data });
       console.log(response.data)
     })
     .catch(function (error) {
       console.log(error);
     })
 }
 tabRow(){
   return this.state.ideas.map(function(object, i){
       return <TableRow obj={object} key={i} />;
   });
 }

 render() {
   return (
     <div>

           { this.tabRow() }

     </div>
   );
 }
}
