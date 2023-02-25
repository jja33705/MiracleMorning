import ToDo from '../interfaces/ToDo';

export function isCurrentTimeBeforeDeadline(toDo: ToDo) {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  if (hour > toDo.deadlineHour) {
    return false;
  }

  if (hour === toDo.deadlineHour && minute > toDo.deadlineMinute) {
    return false;
  }

  if (
    hour === toDo.deadlineHour &&
    minute === toDo.deadlineMinute &&
    second > 0
  ) {
    return false;
  }

  return true;
}
