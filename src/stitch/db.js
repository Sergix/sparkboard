import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
import { stitchApp } from './app'

const mongodb = stitchApp.getServiceClient(
  RemoteMongoClient.factory,
  'sparkboard',
)

const boardsCollection = mongodb.db('app').collection('boards')

export { mongodb, boardsCollection }
