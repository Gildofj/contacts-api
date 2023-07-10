import { ObjectId } from "mongodb";

export default class Game {
  constructor(public email: string, public firstName: string, public surname: string, public id?: ObjectId) { }
}