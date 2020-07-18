import { APIGatewayProxyHandler } from 'aws-lambda'
import daclient from 'data-api-client'
import 'source-map-support/register'

const client = daclient({
  secretArn: process.env.AURORA_SECRET_ARN,
  resourceArn: process.env.AURORA_RDS_ARN,
  database: process.env.AURORA_DB_NAME,
})

interface User {
  firstName: string
  lastName: string
}

export const read: APIGatewayProxyHandler = async () => {
  const result = await client.query<User[]>(`SELECT * from users;`)
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
