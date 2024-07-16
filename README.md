# ART EVENT API
Introducing the ultimate art event API for Italy - your one-stop destination for discovering and experiencing the best art events happening across the country. With our API, you have access to a comprehensive list of cities where art events take place, as well as a list of ongoing events happening in each city.

Our API makes it easy for you to stay informed about the latest art events happening in your city. You can simply filter events by location, and get detailed information about the event, including the time and location. Plus, with our API you can have all the information you need to plan your art events schedule.

We are constantly working to improve our service, and we plan to add more features in the future. In the meantime, we hope you find our API to be a valuable resource for discovering art events in Italy. Try it now and stay updated with the latest art events happening in your city!

## API
### 1. Live events
This service returns a list of ongoing events based on the city specified in the query. If no city is specified, it returns all ongoing events.

#### Example

To call this service, you would make a GET request to the endpoint `/api/ongoing-events` with the optional query parameter `city`. When the service is called, it retrieves a list of events from the database, filtered by the city parameter if it is provided. It also filter all events that are currently ongoing, comparing the `openingDate` and `closingDate` fields of the event with the current date. The `openingDate` and `closingDate` fields are both in ISO 8601 format, which is a standardized format for representing date and time information. The format is `YYYY-MM-DDTHH:MM:SS.sssZ`, where `T` separates the date and time components and `Z` indicates that the time is in UTC. The `.sss` portion is optional, and is used to represent milliseconds. These fields can be easily parsed and used to perform calculations or comparisons with other dates.

#### Input

- `lang` (optional) - a string representing the language in which the event details should be returned. The default language is Italian (it), other supported languages are English (en) and Chinese (zh).
- `city` (optional) - a string representing the city to filter events by.
- `location` (optional) -  returns events that are happening in a location that contains the specified string.
- `genre` (optional) -  returns events that belong to the specified genre.

#### Output

- A JSON array containing the following fields for each event:
  - `id` : the event identifier, can be used for retrieving the details
  - `title` : the title of the event
  - `city` : the city where the event is taking place
  - `openingDate`: the date on which the event starts
  - `closingDate`: the date on which the event ends
  - `location`: the location of the event
  - `address`: the address of the event
  - `location`: the location of the event
  - `genres`: a list of genres related to the event


To call this service, you would make a GET request to the endpoint http://localhost:5000/api/ongoing-events with the optional query parameter city. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/ongoing-events?city=Roma'
```
#### Example output
```json
[
    {
        "id": "<uuidV4>",
        "title": "Inside Banksy: Unauthorized Exhibition",
        "city": "Firenze",
        "openingDate": "2022-11-25T00:00:00.000Z",
        "closingDate": "2023-02-26T00:00:00.000Z",
        "location": "SANTO STEFANO AL PONTE",
        "address": "Piazza di Santo Stefano, 5 - Firenze - Toscana",
        "genres": [
            "new media"
        ],
        "artists": [
            "Banksy"
        ]
    },
    {
        "id": "<uuidV4>",
        "title": "La Roma della Repubblica. Il racconto dell’Archeologia",
        "city": "Roma",
        "openingDate": "2023-01-13T00:00:00.000Z",
        "closingDate": "2023-09-24T00:00:00.000Z",
        "location": "Palazzo Caffarelli - Musei Capitolini",
        "address": "Piazza Del Campidoglio 1 - Roma - Lazio",
        "genres": [
            "archeologia"
        ],
        "artists": []
    }
]
```
Please note that the above output is an example, and the actual output will depend on the events stored in the database.

### 2. Events Detail
This service returns all data related to a specific `id`. The `id` field in the example you provided is a unique identifier for the event. It is a string of characters that follows the format of a universally unique identifier (UUID), which is a standardized way of generating a 128-bit identifier that is guaranteed to be unique across all devices and all time. The UUID is typically represented as a string of 32 hexadecimal characters, separated by hyphens, in the format of 8-4-4-12. The id field is used to easily and specifically reference the event in question.

#### Input
- `lang` (optional) - a string representing the language in which the event details should be returned. The default language is Italian (it), other supported languages are English (en) and Chinese (zh).

#### Output
- A JSON array containing the following fields for each event:
  - `title`: The name of the event
  - `city`: The city where the event is taking place
  - `openingDate`: The date and time when the event starts (in ISO 8601 format)
  - `closingDate`: The date and time when the event ends (in ISO 8601 format)
  - `description`: A brief overview of the event
  - `press`: Additional information and details about the event, such as the artistic director, theme, and location
  - `location`: The specific location where the event is taking place
  - `address`: The full address of the event location
  - `dates`: The dates of the event
  - `opening`: The opening date of the event
  - `genres`: The type of event, such as festival, concert, or exhibition
  - `artists`: A list of artists or performers involved in the event
  - `editors`: A list of people or organizations responsible for editing the event
  - `id`: A unique identifier for the event

### 3. List of cities
This service returns a list of all cities where art events take place.

Example

To call this service, you would make a GET request to the endpoint `/api/cities`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/cities'
```

### 4. List of locations
This service returns a list of all locations where art events take place.

Example

To call this service, you would make a GET request to the endpoint `/api/locations`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/locations'
```

### 5. List of genres
This service returns a list of all genres of the events.

Example

To call this service, you would make a GET request to the endpoint `/api/genres`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/genres'
```

### 6. Health check
The service it allows you to monitor if the application is up time. It returns an healthcheck object that has three properties `uptime` , `message` and `timestamp`.

Example

To call this service, you would make a GET request to the endpoint `/api/healthcheck`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/healthcheck'
```

### 7. random events
This service returns a random event from the database. It is use for demo purposes.

Example

To call this service, you would make a GET request to the endpoint `/api/rand-event`. Here is an example using cURL:

```bash
curl -X GET 'http://localhost:5000/api/rand-event'
```
