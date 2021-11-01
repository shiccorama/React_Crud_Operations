import React, {Component, Fragment} from "react";
import './App.css';
import CourseForm from "./components/CourseForm/CourseForm";
import CourseList from "./components/CourseList/CourseList";

class App extends Component {

  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JavaScript"}
    ],
    current: ""
  }

  handle_change = (e) =>{
    this.setState(
      { 
        current: e.target.value
      }
    )
  };

  handle_submit = (e) =>{
    e.preventDefault();
    if(e.target.name.value !== ""){
      let changed_current = this.state.current;
      let existing_courses = this.state.courses;
      existing_courses.push({name: changed_current});
      this.setState({
        courses : existing_courses,
        current : ""
      })}
    
  };

  delete_course = (course_id) =>{

  let existing_courses = this.state.courses;
      existing_courses.splice(course_id, 1);
      this.setState(
        {
          courses : existing_courses
        }
      )
  }

  // update_course = (course_id) => {
  //   let existing_courses = this.state.courses;
  //   existing_courses.map((obj, index) => {
  //     if(obj.index === obj.course_id){
  //     return(console.log(obj.name));
  //     }
  //   })
  // }


  // show_courses = () =>{
  //   let existing_courses = this.state.courses;
  //   if(existing_courses.length === 0){
        
  //     }
  //   }

  change_course = (index, value) =>{
    let existing_courses = this.state.courses;
    let each_course = existing_courses[index];
    each_course['name'] = value;
    this.setState({
      courses : existing_courses
    })
  }

  render(){


    const App_state = this.state.courses;
    let items_length = App_state.length;
        const course_list = items_length ? ( 
          App_state.map((obj, index) => {
          return(
          <Fragment>
            <ul><CourseList course_obj={obj} key={index} course_id={index} delete_course={this.delete_course} change_course={this.change_course} show_courses={this.show_courses} /></ul>
          </Fragment>
          )
          })
        ) : (<p className="no-items"> There is no items to show </p>)
          

    return(
      <div className="App">
          <h2 id="main-header">CRUD operations for Course Lists</h2>
          <CourseForm className="main-form" handle_change={this.handle_change} handle_submit={this.handle_submit} App_current={this.state.current}/>
          <div className="main-ul">{course_list}</div>
      </div>
    );
  }
 
}

export default App;
