import React, {Component, Fragment} from "react";
import './CourseList.css';


class CourseList extends Component {

    state = {
        is_update : false
    }

        // __________________________________________________________

    render_course = () =>{
        const random_factor = Math.random()*10;
        return(
            <li key={random_factor}>
                <span>{this.props.course_obj.name}</span>
                <button onClick={() => {this.switch_on_off()}}>
                    Update
                </button>
                <button onClick={() => {this.props.delete_course(this.props.course_id)}}>
                    Delete
                </button>
            </li>
        );
    }
        // __________________________________________________________

        switch_on_off = () =>{
            let {CourseList_state} = this.state;
            this.setState({
                CourseList_state : !CourseList_state
            })
        }

        // __________________________________________________________


        course_updated = (e) =>{
            e.preventDefault();
            this.props.change_course(this.props.course_id, this.input.value);
            this.switch_on_off();
        }

        //_________________________________________________________

    update_course = () =>{
        return(
            <form className="second-form" onSubmit={this.course_updated}>
                <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.course_obj.name} />
                <button> Change Course </button> 
            </form>
        )
    }
      // __________________________________________________________
    render(){
        let {CourseList_state} = this.state;
        return(
        <Fragment>
                {CourseList_state ? this.update_course() : this.render_course()}
        </Fragment>
        );

    }

}

export default CourseList;