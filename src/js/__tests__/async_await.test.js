import GameSavingLoader from '../async_await/GameSavingLoader';

test('Проверка GameSavingLoader', async () => {
  const expectation = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual(expectation);
});