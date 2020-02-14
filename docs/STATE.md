# State management notes

## Main store

The main store contains:

- array of board objects
- Uploadcare API key

### Board object

- board ID
- title
- description
- cover image
- list of card IDs

## Board module

Contains data loaded in when /board/:id is opened.
The board must belong to the current user account.

- array of card objects
- board title
- cover image

### Card object

- card ID
- title
- description
- image
- position
  - x
  - y
- size

## Account module

- user ID
- signed in
- username
- email
- first name
- last name
