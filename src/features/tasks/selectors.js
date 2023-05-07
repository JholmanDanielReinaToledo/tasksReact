import { createSelector } from "@reduxjs/toolkit";
import { find, get } from "lodash";
import { TASKS_SLICE } from "../slicesConstants";

const stateCambios = (state) => get(state, TASKS_SLICE);

export const selectTaskById = (id) => createSelector(
  [stateCambios],
  (tasks) => find(tasks, (task) => task.id === id),
);