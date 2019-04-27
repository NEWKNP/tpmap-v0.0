import HttpRequest from './http_request'

class ShapeProvider extends HttpRequest {
  constructor () {
    // api api
    super('http://localhost:3000/home/')
  }

  async getCountryShape () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/')
    return data
  }
}

export default ShapeProvider
