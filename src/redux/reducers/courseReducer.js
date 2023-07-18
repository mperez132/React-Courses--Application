import * as types from "../actions/actionTypes";
//import { loadCourses } from "../actions/courseActions";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    case types.ENROLL_COURSE_OPTIMISTIC:
      if (action.course.id === action.course.id) {
        action.course.enrolled = 1;
      }
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.UNENROLL_COURSE_OPTIMISTIC:
      if (action.course.id === action.course.id) {
        action.course.enrolled = 0;
      }
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    default:
      return state;
  }
}
