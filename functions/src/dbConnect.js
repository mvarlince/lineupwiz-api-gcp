import { MongoClient } from "mongodb";
import {db_creds} from './secret.js'


export default function db_connect() {
    const client = new MongoClient(db_creds.uri)
    console.log(db_creds.db)
    return client.db(db_creds.db)
}

