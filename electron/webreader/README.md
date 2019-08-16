# Web Reader

This is an electron app which allows the user to add a web link which will be
stored inside the app so the user can access the website later just like a
bookmark.

The app uses a responsive design with CSS flexbox and extensive keyboard
support. It also has a custom menu bar with actions and keyboard shortcuts to
access them.

## Building

In order to build the app you will need a cetificate for both mac and windows.
On a mac, `electron-builder` automatically signs the app for mac builds. For the
windows build however, you need to generate your own certificate as followed:

1. Open keychain access
2. Create a Certificate with a type of `Code Signing`
3. Navigate to the `Certificates` tab
4. Export the created Certificate (in .p12 format)
5. Move the Certificate into the project folder
6. Update the `certificateFile` property in `package.json`

```bash
# build for macOS
yarn build-mac
```

## Auto Updating

`electron-builder` takes care of automatically uploading the build targets to
github and updating our app but for that we have to configure our github
repository and `electron-builder` in the `package.json`:

1. create a release
2. generate a personal access token (full repo controll)
3. DO NOT COMMIT THE TOKEN
4. Set the `GH_TOKEN` environment variable to your access token

```bash
GH_TOKEN=ksjdncks yarn publish
```
