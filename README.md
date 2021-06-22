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
BASE_API=
```
**NB**:
- If you're running the repo with Docker, put `container` as `NODE_ENV`
- Use `BASE_API` variable for the API's base endpoint. If you're running the API locally as well, insert `http://localhost:3000`

4 - Run the app locally:
```
npm run serve
```
5 - Navigate to `http://localhost:8080`
