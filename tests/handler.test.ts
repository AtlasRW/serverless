import { APIGatewayEvent, Context } from 'aws-lambda'
import * as handler from '../handler'

test('hello', async () => {
  const context = {} as Context
  const event = {} as APIGatewayEvent

  const response = await handler.hello(event, context, console.log)

  expect(response ? response.statusCode : 500).toEqual(200)
  expect(typeof (response ? response.body : null)).toBe('string')
  expect(response ? response.body : null).toEqual('Hello World!')
})

test('echo', async () => {
  const context = {} as Context
  const event = { body: JSON.stringify({ key: 'value' }) } as APIGatewayEvent

  const response = await handler.echo(event, context, console.log)

  expect(response ? response.statusCode : 500).toEqual(200)
  expect(typeof (response ? response.body : null)).toBe('string')
  expect(response ? response.body : null).toEqual(JSON.stringify(event.body))
})

test('check', async () => {
  const context = {} as Context

  const eventCorrect = { body: 'https://google.com' } as APIGatewayEvent
  const eventIncorrect = { body: 'https://httpbin.org/status/404' } as APIGatewayEvent
  const eventInvalid = { body: 'not-a-valid-url' } as APIGatewayEvent
  const eventCorrectRedirect = { body: 'https://bit.ly/300awAn' } as APIGatewayEvent

  const responseCorrect = await handler.echo(eventCorrect, context, console.log)
  const responseIncorrect = await handler.echo(eventIncorrect, context, console.log)
  const responseInvalid = await handler.echo(eventInvalid, context, console.log)
  const responseCorrectRedirect = await handler.echo(eventCorrectRedirect, context, console.log)

  expect(responseCorrect ? responseCorrect.statusCode : 500).toEqual(200)
  expect(responseIncorrect ? responseIncorrect.statusCode : 500).toEqual(404)
  expect(responseInvalid ? responseInvalid.statusCode : 500).toEqual(404)
  expect(responseCorrectRedirect ? responseCorrectRedirect.statusCode : 500).toEqual(200)
})