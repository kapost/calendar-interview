# Calendar App

This is a simple React app that renders a custom calendar. Currently, it supports only a month view with the ability to switch between months and jump to today's date. We want to be able view and add events to the calendar. Additionally, we want to be able to view a single day and its events.

Your job is to implement as many of the following features as you can:
1) Fork the repository
2) Fetch events and display on the appropriate day of Month View of the calendar.
3) Implement a Day View.
4) Display events in Day View.
5) Add the ability to create new events.
6) Send your fork to the hiring manager who sent you this interview

We are looking for clean, well structured, tested code & commits. Show us your best work. Quality over quantity. We recommend spending between 2 and 3 hours on this.

## Set up
To run the app, simply run
```
yarn start
```

If it's the first time you're running the app, seed the db with sample data:
```
yarn db:seed
```

Then run the server in a separate tab:
```
yarn serve
```

The server will start on port 3001.

## Database
The database will be seeded with two entities: events and users. Data can be fetched by sending a GET request to the appropriate endpoint (http://localhost:3001/events or http://localhost:3001/users). Events can be added by sending a POST request to the `events` endpoint. When the database is seeded, events are sorted by their start date.

Events have a title, an optional description, a start and end date, and a list of attendees. Each event has the following shape:
```
{
  id: string.isRequired,
  title: string.isRequired,
  description: string,
  startDate: string.isRequired (ISO 8601 format),
  endDate: string.isRequired (ISO 8601 format),
  userIds: arrayOf(string).isRequired,
}
```

Users have the following shape:
```
{
  id: string.isRequired,
  name: string.isRequired,
  avatarUrl: string.isRequired,
}
```

## Displaying events in Month View.
Users must be able to see their events on the calendar.

- In Month View, events show on the appropriate day with their title.
- Clicking on an event in MonthView opens up the side panel (stubbed out in `<Calendar />`). Details of the corresponding event are shown in the side panel. The users associated with the event are shown as well with their name and a picture (linked to their avatarUrl).

## Day View

### Navigating Day View
- The Day View can be accessed a few ways:
  - Through a correctly formatted url that represents an actual date (i.e. `/day/${year}/${month}/${day}`).
  - By clicking on the day number in a cell in Month View.

- Clicking the arrows at the top of the page navigate between days. The right arrow navigates one day into the future and the left arrow navigates one day into the past.
- Clicking the month and year in the header returns the view to Month View.
- Clicking the Today button jumps to today.

### Displaying Day View
- The day of the week and the date of the day are displayed in the top left corner of the view.
- The date mentioned above remains fixed top of the page while the body is scrollable.
- Each hour in day view is 50px.
- The top of each hour is denoted by a horizontal line across the view with the hour in the format "H A" (e.g. "2 PM") on the left hand side.
- If the day is today, the date shows a special state (see wireframe).

### Displaying events in Day View
- Similarly to MonthView, clicking on an event will open the side panel, showing its details.
- Events are represented by blocks that span their duration the in Day View (the top of the div aligns with the time the event's `startDate` and the bottom of the div aligns with the event's `endDate`)

### Adding Events
- Events can be added to the calendar by clicking on the day in Month View. Events added this way will have a duration that spans the whole day.

- Events can be added by clicking on the Day View. Events added this way will span 1 hour by default and start at the nearest 30 minute increment before the time that corresponds to the cursor.

- Clicking to add an event opens up the calendar side panel with a form to fill out additional details (title, description, users). Start and end dates cannot be modified.

- Events can be discarded and will not be added to the store.
- When the user clicks "Save" events will be added to the database. Events can be created with a POST request to http://localhost:3001/events
