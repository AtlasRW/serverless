import { APIGatewayProxyResult } from 'aws-lambda'

export default class Gateway {

  static Result(code: number, value?: any): APIGatewayProxyResult {
    return {
      statusCode: code,
      body: JSON.stringify({ result: value ?? null })
    }
  }

} 