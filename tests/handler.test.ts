import { APIGatewayEvent } from 'aws-lambda'
import * as handler from '../handler'

test('hello', async () => {
  const response = await handler.hello()

  expect(response ? response.statusCode : 500).toEqual(200)
  expect(typeof (response ? JSON.parse(response.body).result : null)).toBe('string')
  expect(response ? JSON.parse(response.body).result : null).toEqual('Hello World!')
})

test('echo', async () => {
  const event = { body: JSON.stringify({ key: 'value' }) } as APIGatewayEvent

  const response = await handler.echo(event)

  expect(response ? response.statusCode : 500).toEqual(200)
  expect(typeof (response ? JSON.parse(response.body).result : null)).toBe('string')
  expect(response ? JSON.parse(response.body).result : null).toEqual(event.body)
})

test('check', async () => {
  const eventCorrect = { body: 'https://google.com' } as APIGatewayEvent
  const eventIncorrect = { body: 'https://httpbin.org/status/404' } as APIGatewayEvent
  const eventInvalid = { body: 'not-a-valid-url' } as APIGatewayEvent
  const eventCorrectRedirect = { body: 'https://bit.ly/300awAn' } as APIGatewayEvent

  const responseCorrect = await handler.checkUrl(eventCorrect)
  const responseIncorrect = await handler.checkUrl(eventIncorrect)
  const responseInvalid = await handler.checkUrl(eventInvalid)
  const responseCorrectRedirect = await handler.checkUrl(eventCorrectRedirect)

  expect(responseCorrect ? JSON.parse(responseCorrect.body).result : null).toEqual(true)
  expect(responseIncorrect ? JSON.parse(responseIncorrect.body).result : null).toEqual(true)
  expect(responseInvalid ? JSON.parse(responseInvalid.body).result : null).toEqual(true)
  expect(responseCorrectRedirect ? JSON.parse(responseCorrectRedirect.body).result : null).toEqual(true)
})