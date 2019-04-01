const uuid = require("uuid");
const faker = require("faker");
const moment = require("moment");
const fs = require("fs");

const A_YEAR_AGO = moment().subtract(1, "year");
const A_YEAR_FROM_NOW = moment().add(1, "year");

const NUM_USERS = 25;
const NUM_EVENTS = 200;

function buildUsers() {
  const users = [];

  for (var i = 0; i < NUM_USERS; i++) {
    users.push({
      id: uuid.v4(),
      name: faker.fake("{{name.firstName}} {{name.lastName}}"),
      avatarUrl: faker.image.people(),
    });
  }

  return users;
}

function randomTime() {
  return {
    hour: faker.random.number() % 12,
    min: faker.random.boolean() ? 30 : 0,
  }
}

function buildEvent() {
  const startDate = moment(faker.date.between(A_YEAR_AGO, A_YEAR_FROM_NOW)).startOf("day");
  const { hour: startHour, min: startMin } = randomTime();
  const { hour: endHour, min: endMin } = randomTime();

  const startWithTime = startDate.add(startHour, "hours").add(startMin, "minutes");
  const endWithTime = moment(startWithTime).add(endHour, "hours").add(endMin, "minutes");

  return {
    id: uuid.v4(),
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    startDate: startWithTime.toISOString(),
    endDate: endWithTime.toISOString(),
  };
}

function randomUserIds(users) {
  const randomSet = new Set();
  const numUsers = faker.random.number() % 8;

  for (var i = 0; i < numUsers; i++) {
    const u = faker.random.arrayElement(users);
    randomSet.add(u.id);
  }

  return Array.from(randomSet);
}

function sortByStartDate(a, b) {
  if (a.startDate > b.startDate) {
    return 1;
  } else if (a.startDate < b.startDate) {
    return -1;
  }

  return 0;
}

function buildEvents(users) {
  const events = [];

  for (var i = 0; i < NUM_EVENTS; i++) {
    events.push({
      ...buildEvent(),
      userIds: randomUserIds(users),
    });
  }

  return events.sort(sortByStartDate);
}

function seedDb() {
  const users = buildUsers();
  const events = buildEvents(users);

  const db = JSON.stringify({
    users,
    events,
  });

  fs.writeFile("./db/db.json", db, (err) => {
    if (err) { throw err; }
  });
};

seedDb();
