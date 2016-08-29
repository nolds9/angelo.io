# Angelo.io

Spotify playlists rendered in React

## Local Setup

- Clone down repo locally, and change into that directory
- Run `$ bundle install` to get Ruby dependencies
- Run `cd client && npm install` to get Node dependencies
- Run `$ rake db:create db:migrate` to prepare database locally
- Need to register and configure a new application through Spotify's developer console
  - Make sure to make note of client id and client secret
  - Add `http://localhost:3000/users/auth/spotify/callback`
  to the `Redirect URIs` section via the Spotify app's settings
- To configure application, run `$ bundle exec figaro install` to generate an `config/application.yml`
- Inside `config/application.yml`, add the spotify application's client id and client secret, following the syntax:

```ruby
SPOTIFY_CLIENT_ID: "yourclientidhere"
SPOTIFY_CLIENT_SECRET: "yourclientsecrethere"
```

- Now, should be all set to start the server and run the application with:
```bash
$ npm run rails-server
```
