import * as fs from 'fs'
import * as path from 'path'

import films from '../data/data.json'

export async function getAllFilms() {
    const response = await fetch('http://localhost:3306/getFilms')
    const data = await response.json()
  return data
}