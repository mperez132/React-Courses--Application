import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusAction";

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function enrollCourseOptimistic(course) {
  return { type: types.ENROLL_COURSE_OPTIMISTIC, course };
}

export function unEnrollCourseOptimistic(course) {
  return { type: types.UNENROLL_COURSE_OPTIMISTIC, course };
}
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

export function enrollCourse(course) {
  return function (dispatch) {
    dispatch(enrollCourseOptimistic(course));
    return courseApi.enrollCourse(course.id);
  };
}

export function unEnrollCourse(course) {
  return function (dispatch) {
    dispatch(unEnrollCourseOptimistic(course));
    return courseApi.unEnrollCourse(course.id);
  };
}
