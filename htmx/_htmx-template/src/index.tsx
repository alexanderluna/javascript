import { type Context, Hono } from 'hono';
import { serveStatic } from 'hono/bun';

// define Diary
type Diary = { id: string, day: string, entry: string };
const diaries = new Map<string, Diary>();

// populate Diary with fake data
function addDiaryEntry(day: string, entry: string): Diary {
  const id = crypto.randomUUID();
  const diary = { id, day, entry };
  diaries.set(id, diary);
  return diary;
}

addDiaryEntry(new Date().toDateString(), 'Hello world');
addDiaryEntry(new Date().toDateString(), 'Lorem Ipsum');

// generate HTML response
function diaryRow(diary: Diary) {
  return (
    <tr class="on-hover" >
      <td>{diary.day}</td>
      <td>{diary.entry}</td>
      <td class="buttons">
        <button
          class="show-on-hover"
          hx-delete={`/diary/${diary.id}`}
          hx-confirm="Are you sure ?"
          hx-target="closest tr"
          hx-swap="delete"
        >
          X
        </button>
      </td>
    </tr>
  )
}

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

app.get('/table-rows', (c: Context) => {
  const sortedDiaries = Array.from(diaries.values())
    .sort((a, b) => a.day.localeCompare(b.day));
  return c.html(<>{sortedDiaries.map(diaryRow)}</>)
});

app.post('/diary', async (c: Context) => {
  const formData = await c.req.formData();
  const day = (formData.get('day') as string) || '';
  const entry = (formData.get('entry') as string) || '';
  const diary = addDiaryEntry(day, entry);
  return c.html(diaryRow(diary), 201);
});

app.delete('/diary/:id', (c: Context) => {
  const id = c.req.param('id');
  diaries.delete(id);
  return c.body(null);
});

export default app;