import read from './reader';
import json from './json';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => JSON.parse(response));
  }
}