import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
import { stitchApp } from './app'

const mongodb = stitchApp.getServiceClient(
  RemoteMongoClient.factory,
  'sparkboard',
)

const boardsCollection = mongodb.db('app').collection('boards')

async function getUserBoards() {
  const query = {
    owner_id: stitchApp.auth.user.id,
  }

  return await boardsCollection
    .find(query)
    .toArray()
    .then(boards => {
      return boards
    })
    .catch(err => console.error(err))
}

export { mongodb, boardsCollection, getUserBoards }
