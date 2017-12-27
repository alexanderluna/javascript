import C from './constant'
import { allSkiDays } from './store/reducers'

const state = [
  {
    "mountain": "Fuji",
    "date": "2014-01-15",
    "snow": true,
    "hike": false
  },
  {
    "mountain": "Harz",
    "date": "2014-01-16",
    "snow": true,
    "hike": false
  }
]

const action = {
  type: C.REMOVE_DAY,
  payload: "2014-01-16"
}

const nextState = allSkiDays(state, action)

console.log(`
    Current State: ${JSON.stringify(state)}
    Current Action: ${JSON.stringify(action)}
    Next Action: ${JSON.stringify(nextState)}
  `);
