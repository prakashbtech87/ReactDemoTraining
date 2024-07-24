import { Component } from "react";

export default class Child extends Component{

constructor(props){
    super();
    this.state={
        upperCaseName:"",
        greet:"Hello"
    }
    console.log("Child Component Constructor executed, Name received : ",props.name);
}

static getDerivedStateFromProps( props,state){
    console.log("Child Component getDerivedStateFromProps executed");
    return{
        ...state,
        upperCaseName: state.greet+" "+props.name.toUpperCase()
    }
}


    render(){
        console.log("Child Component Redner Executed.....");
        return(
            <div className="child=box">
                <p>
                    Name from Parent : { this.props.name}
                </p>
                <p>
                    Name in CAPITAL (Child) : { this.state.upperCaseName}
                </p>

            </div>
        );

    }


    componentDidMount(){
        console.log("componentDidMount dome");
    }

    shouldComponentUpdate( nextProps, nextState) {
    
        console.log("Child Component shouldComponentUpdate executed");
    
        if(nextProps.name.length >=5){
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate( prevProps, prevState){
        console.log("getSnapshotBeforeUpdate dome");
        return "Data from getSnapshotBeforeUpdate";
    }


    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(snapshot);
        window.scrollY= 1500-snapshot.scrollPosition;
        console.log("Child component componentDidUpdate executed");
    }

}



