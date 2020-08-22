import React from 'react'
 class About extends React.Component{
     constructor()
     {
         super();
         
     }
     componentDidMount()
     {
        console.warn("props",this.props.name)

        // console.warn("did mount");
     }
     componentDidUpdate()
     {
        console.warn("props in update",this.props.name)

        // alert("name is updated")
     }
     render(){
        //  console.warn("render")
         return(<div>
             <h1>About us Component</h1>
         <h2>{this.props.name}</h2>
         </div>)
     }
 }

 export default About;

//  constructor()
// {

// }
// componentDidMount() {
// }

// componentDidUpdate(){

// }

// componentWillUnmount() {
// }