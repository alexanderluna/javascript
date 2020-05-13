# Zoom Video Streaming

This is a zoom clone with an express server for serving static files and
handling routing to rooms. A socket server takes care of listening to events
coming from the client as well as sending events to the client when users
join a room.

> This project requires a PeerJS server andclient to assign each user a UUID to
> identify them in the backend and create/remove their stream.

## Install

```bash
yarn install
yarn dev
```

## TODO

- Add user authentication
- Display a list of streams to join
- Create a React App
