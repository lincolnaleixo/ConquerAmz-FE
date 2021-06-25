# conquer-amz

## Project setup
1 - Navigate to the project's directory.

2 - Install dependencies:
```
npm install
```
3 - Add `.env` file in the project's root directory, with the following structure:
```
NODE_ENV=
VUE_APP_API_ENDPOINT=
```
**NB**:
- If you're running the repo with Docker, put `container` as `NODE_ENV`
- Use `VUE_APP_API_ENDPOINT` variable for the API's base endpoint. When running with Docker or on your local machine, put `http://localhost:3000`

4 - Run the app:
```
npm run serve
```

5 - Navigate to `http://localhost:8080`
