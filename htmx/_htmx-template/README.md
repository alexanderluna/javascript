# HTMX Template

Server side of htmx can be implemented in any programming language that can serve HTML templates and has an HTTP server library (HOWL).

## POST data

```html
<form
    hx-post="server endpoint for the request"
    hx-disabled-elt="disable an HTML element while editing the form" 
    hx-target="where to place the returned HTML"
    hx-swap="how to swap the returned HTML"
    hx-on::after-request="what to do after the form is processed">
</form>
```

## GET data

```html
<table
    hx-trigger="event that triggers an HTTP request"
    hx-get="GET endpoint on server"
    hx-target="which elements should be replaced with the new data">
</table>
```

## DELETE data

```html
<tr class="on-hover" >
      <td>Lorem Ipsum</td>
      <td class="buttons">
        <button
          class="show-on-hover"
          hx-delete="DELETE endpoint on server"
          hx-confirm="confirmation dialogue"
          hx-target="which element should be deleted"
          hx-swap="what to do with the target element"
        >
          X
        </button>
      </td>
    </tr>
```

## Install and run

```sh
bun install
bun run dev

# open http://localhost:3000
```
