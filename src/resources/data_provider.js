import HttpRequest from './http_request'

class DataProvider extends HttpRequest {
  constructor () {
    // api api
    super('https://www.tpmap.in.th/public/data/61/61_country_common.csv')
  }

  async getCountryCommon () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/')
    return data
  }
}

export default DataProvider
