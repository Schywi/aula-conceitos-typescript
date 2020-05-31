import {Request , Response }from 'express'
import createUser from './services/CreateUser';


export function helloWorld(request: Request , response: Response) {
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '12345',
    techs: [ 
      'Node.js',
      'ReactJs',
      "React Native",
    
    ]
  })
  
  return response.json({ message: 'Hello World'})

}