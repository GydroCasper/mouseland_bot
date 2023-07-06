import { initializeApp } from "firebase/app"
import { getDatabase, set, ref, onValue } from "firebase/database"
import { User } from "../types/user"
import { Assignments } from "../types/assignment"

const connect = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  }

  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)

  return database
}

export const assignUser = async (
  day: string,
  foodEvent: string,
  user: User
) => {
  const database = connect()

  await set(ref(database, `schedule/${day}/${foodEvent}/${user.id}`), user)
}

export const fetchAssignments = (callback: (assignments: Assignments) => void) => {
  const database = connect()
  const reference = ref(database, "schedule/")

  onValue(reference, (snapshot) => {
    callback(snapshot.val())
  })
}
