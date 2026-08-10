# Photography

Drop image files in this folder and they show up on the site automatically —
no code change needed. Supported: `.jpg` `.jpeg` `.JPG` `.png` `.webp` `.avif`

**Order** is by filename, so prefix them to control it:

    01-washington-square.jpg
    02-dumbo-morning.jpg
    03-amherst-fall.jpg

**Captions** are optional. To add one, open `src/components/Photography.jsx`
and add an entry to the `captions` object, keyed by the exact filename:

```js
const captions = {
  "01-washington-square.jpg": { title: "Washington Square", place: "New York", year: "2026" },
};
```

Photos without a caption just show their frame number.

**Size**: these ship as-is, so downscale before committing — roughly 2000px on
the long edge is plenty. Anything over ~500 KB per photo will slow the page.

While this folder has no images, the section renders a set of empty frames
with these instructions. It switches to the real contact sheet on the first file.
