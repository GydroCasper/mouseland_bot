import { User } from "./user"

export interface Assignments {
  [day: string]: FoodEventAssignments
}

export interface FoodEventAssignments {
  [foodEvent: string]: {[userId: string]: User}
}