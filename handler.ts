import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import urlExists from 'url-exists-nodejs'
import Gateway from './gateway'

export async function hello(): Promise<APIGatewayProxyResult> {
  return Gateway.Result(
    200,
    'Hello World!'
  )
}

export async function echo(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  return Gateway.Result(
    200,
    event.body
  )
}

export async function checkUrl(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
  return Gateway.Result(
    200,
    await urlExists(event.body)
  )
}
