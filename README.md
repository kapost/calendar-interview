# Calendar App

This is a simple React app that renders a custom calendar. Currently, it supports only a month view with the ability to switch between months and jump to today's date. We want to be able view and add events to the calendar. Additionally, we want to be able to view a single day and its events.

Your job is to implement as many of the following features as you can:
1) Implement a day view.
2) Display events on the calendar in month view.
3) Display events in day view.
4) Add the ability to create new events.

## Day View

### Navigating Day View
- The Day View can be accessed a few ways:
  - Through a correctly formatted url that represents an actual date (i.e. `/day/${year}/${month}/${day}`).
  - By clicking on the day number in a cell in Month View.
  - By pressing "Shift + D" on the keyboard.

- Clicking the arrows at the top of the page navigate between days. The right arrow navigates one day into the future and the left arrow navigates one day into the past.
- Clicking the month in the header returns the view to Month View.
- Clicking the Today button jumps to today.

### Displaying Day View
  - The day of the week and the date of the day are displayed in the top left corner of the view.
  - The date mentioned above remains fixed top of the page while the body is scrollable.
  - Each hour in day view is 50px.
  - The top of each hour is denoted by a horizontal line across the view with the hour in the format "H A" (e.g. "2 PM") on the left hand side.
  - If the day is today, the date shows a special state (see wireframe).

## Displaying events
Users must be able to add events to the calendar. Events have a title, an optional description, a start and end date, and a list of attendees. Each event has the following shape:
```
{
  id: string.isRequired,
  title: string.isRequired,
  description: string,
  startDate: string.isRequired (ISO 8601 format),
  endDate: string.isRequired (ISO 8601 format),
  attendees: arrayOf(string).isRequired,
}
```

#### Adding Events

1) Events can be added to the calendar by clicking on the day in Month View. Events added this way will have a duration that spans the whole day.

2) Events can be added by clicking on the Day View. Events added this way will span 1 hour by default and start at the nearest 30 minute increment before the time that corresponds to the cursor.

- Events can be discarded and will not be added to the Redux store.
- When the user clicks "Save" events will be added to the Redux store.
