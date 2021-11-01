import React, {Component, Fragment} from "react";
import "./CourseForm.css"


const CourseForm = (props) => {
    return(
            <Fragment>
                    
                <form className="main-form" onSubmit={props.handle_submit}>
                    <input id="course-name" type="text" name="name" placeholder="Enter Course Name" onChange={props.handle_change} value={props.App_current}/>
                    <input id="submit" type="submit" name="submit" value="Add Course" />
                </form>
            </Fragment>
    );


}

export default CourseForm;