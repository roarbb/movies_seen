import { shareReplay, map } from 'rxjs/operators'

import { docData, ObservableFromRef } from './utils'
import myFirestore from '../firestore';

const ObservableMap = new Map()
const dbRef = myFirestore.collection('movies')

export const allMovies = () => ObservableFromRef(dbRef).pipe(
  map(snapshot => snapshot.docs),
  map(docs => docs.map(docData)),
  shareReplay(1)
)

export const movie = id => {
  if (!ObservableMap.has(id)) ObservableMap.set(id, ObservableFromRef(dbRef.doc(id)))

  return ObservableMap.get(id).pipe(
    map(doc => docData(doc)),
    shareReplay(1)
  )
}