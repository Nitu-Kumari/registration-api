const fetch = require("node-fetch");
const MongodbService = require("./MongodbService");



class Controller {
  static async login(req, res) {
    const data = req.body;
    const mongodbService = new MongodbService();
    await mongodbService.init();
    const user = await mongodbService.login(data);
    res.json(user);
  }

  static async registration(req, res) {
    const data = req.body;
    const mongodbService = new MongodbService();
    await mongodbService.init();
    const user = await mongodbService.registration(data);
    res.json(user);
  }

  static async getUser(req, res) {
    const username = req.params.username;
    const mongodbService = new MongodbService();
    await mongodbService.init();
    const user = await mongodbService.getUser(username);
    res.json(user);
  }

  static async search(req, res) {
    const query = req.query;
    const keys = Object.keys(query);
    const queryString = keys.reduce((acc, key)=>{
        return acc += `${key}=${query[key]}&`
    },'');
    const api = `https://hn.algolia.com/api/v1/search?${queryString}`;

    const body = await fetch(api);
    const result = await body.json();
    res.json(result);
  }
}
module.exports = Controller;