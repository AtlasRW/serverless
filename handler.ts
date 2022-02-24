import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda'
import urlExist from 'url-exists-nodejs'
import Gateway from './gateway'

export const hello: APIGatewayProxyHandler = async () =>
  Gateway.Result(
    200,
    'Hello World!'
  )

export const echo: APIGatewayProxyHandler = async (event: APIGatewayEvent) =>
  Gateway.Result(
    200,
    event.body
  )

export const checkUrl: APIGatewayProxyHandler = async (event: APIGatewayEvent) =>
  Gateway.Result(
    await urlExist(event.body)
      ? 200
      : 404
  )