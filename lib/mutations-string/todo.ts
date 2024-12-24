export const todoAddMutation = /*graphQL*/ `
mutation todoAddMutation($input:TodoInput){
addTodoMutation(todo:$input){
taskName
description
}
}
`;
