# Simple Backend with JS

A small backend server built with **Node.js** and **Express**. It serves two HTML pages and a JSON API for reading, adding, and removing items in a list.

> **Note:** The data is stored in memory, so it resets to `["ARU"]` every time the server restarts.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [Node.js](https://nodejs.org/) | JavaScript runtime |
| [Express 5](https://expressjs.com/) | Web server and routing |
| [nodemon](https://nodemon.io/) | Restarts the server when files change |

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/TamimAhmedDip/SimpleBackendwithJS.git
   cd SimpleBackendwithJS
   ```

2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

The server runs at **http://localhost:8383**.

## Endpoints

### Website

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/` | Shows the current data on a styled HTML page |
| `GET` | `/dashboard` | Shows a simple dashboard heading |

### API

| Method | Route | Description | Success status |
| --- | --- | --- | --- |
| `GET` | `/api/data` | Returns the list as JSON | `200 OK` |
| `POST` | `/api/data` | Adds a name to the end of the list | `201 Created` |
| `DELETE` | `/api/data` | Removes the last item from the list | `203 Non-Authoritative Information` |

## Example Requests

**Get the list**

```bash
curl http://localhost:8383/api/data
```

```json
["ARU"]
```

**Add a name**

The request body must be JSON with a `name` field:

```bash
curl -X POST http://localhost:8383/api/data \
  -H "Content-Type: application/json" \
  -d '{"name": "dipu"}'
```

**Remove the last item**

```bash
curl -X DELETE http://localhost:8383/api/data
```

## Testing the Endpoints

The project has no automated tests. Instead, `test.rest` contains a ready-made request for each endpoint. To use it, open the file in VS Code with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension and click **Send Request** above any request.

## Project Structure

```text
SimpleBackendwithJS/
├── server.js           # Express app, routes, and in-memory data
├── test.rest           # Manual requests for each endpoint
├── package.json        # Project details, scripts, and dependencies
└── package-lock.json   # Exact dependency versions
```

## License

Licensed under the **ISC** license, as declared in `package.json`.
