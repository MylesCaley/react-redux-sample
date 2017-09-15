'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nextTodoId = 0;
var addTodo = exports.addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};