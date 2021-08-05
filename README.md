# conquer-amz

## Project setup
1 - Navigate to the project's directory.

2 - Install dependencies:
```
npm install
```
3 - If you're running the app without Docker, add `.env` file in the project's root directory, with the following structure:
```
NODE_ENV=
VUE_APP_API_ENDPOINT=htp://localhost:3000/
```

4 - Run the app:
```
npm run serve
```

5 - Navigate to `http://localhost:8080`.


**NB**:
- Use `VUE_APP_API_ENDPOINT` variable for the API's base endpoint. By default, it will be port 3000.
- When running with Docker/containers, set the `NODE_ENV` to `container`. Further instructions for the Docker setup
can be found in the API's README file.
