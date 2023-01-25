# ART EVENT API
Introducing the ultimate art event API for Italy - your one-stop destination for discovering and experiencing the best art events happening across the country. With our API, you have access to a comprehensive list of cities where art events take place, as well as a list of ongoing events happening in each city.

Our API makes it easy for you to stay informed about the latest art events happening in your city. You can simply filter events by location, and get detailed information about the event, including the time and location. Plus, with our API you can have all the information you need to plan your art events schedule.

We are constantly working to improve our service, and we plan to add more features in the future. In the meantime, we hope you find our API to be a valuable resource for discovering art events in Italy. Try it now and stay updated with the latest art events happening in your city!

## API
### 1. Live events
This service returns a list of ongoing events based on the city specified in the query. If no city is specified, it returns all ongoing events.

#### Example

To call this service, you would make a GET request to the endpoint `/api/ongoing-events` with the optional query parameter `city`. When the service is called, it retrieves a list of events from the database, filtered by the city parameter if it is provided. It also filter all events that are currently ongoing, comparing the `openingDate` and `closingDate` fields of the event with the current date.

#### Input

- `city` (optional) - a string representing the city to filter events by.

#### Output

- A JSON array containing the following fields for each event:
  - `title` : the title of the event
  - `city` : the city where the event is taking place
  - `openingDate`: the date on which the event starts
  - `closingDate`: the date on which the event ends
  - `location`: the location of the event
  - `address`: the address of the event


To call this service, you would make a GET request to the endpoint http://localhost:5000/api/ongoing-events with the optional query parameter city. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/ongoing-events?city=Roma'
```
#### Example output
```json
[
    {
        "title": "La Biennale dello scarto 2022/2024",
        "city": "Grosseto",
        "openingDate": "2022-08-05T00:00:00.000Z",
        "closingDate": "2024-04-30T00:00:00.000Z",
        "location": "CASSERO SENESE",
        "address": "Via Aurelio Saffi 6 - Grosseto - Toscana"
    },
    {
        "title": "Art Exhibition in Rome",
        "city": "Rome",
        "openingDate": "2022-09-01T00:00:00.000Z",
        "closingDate": "2022-10-15T00:00:00.000Z",
        "location": "Palazzo delle Esposizioni",
        "address": "Via Nazionale, 194 - Rome, Italy"
    }
]
```
Please note that the above output is an example, and the actual output will depend on the events stored in the database.

### 2. List of cities
This service returns a list of all cities where art events take place.

Example

To call this service, you would make a GET request to the endpoint `/api/cities`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/cities'
```
