import { createClient } from '@sanity/client'
import { config as configureDotenv } from 'dotenv'
configureDotenv()

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-10-25',
  token: process.env.SANITY_SECRET_TOKEN
})

// https://www.sanity.io/docs/query-cheat-sheet

export async function getUser(options = {}) {
  const { email, id } = options
  let user
  if (id) {
    user = await client.fetch('*[_type == "user" && _id == $id][0]', { id })
  } else if (email) {
    user = await client.fetch('*[_type == "user" && email == $email][0]', { email })
  }
  return user
}

export async function createUser(user) {
  const result = await client.create(user)
  return result
}
