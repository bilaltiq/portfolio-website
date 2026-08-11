# Photography

Drop image files in this folder and they show up on the site automatically —
no code change needed. Supported: `.jpg` `.jpeg` `.JPG` `.png` `.webp` `.avif`

**RAW is not supported, and can't be.** `.arw` (Sony), `.cr2`, `.nef`, `.dng`
and friends have no browser decoder, so there's nothing the site could do with
one — it would just render as a broken image. `.heic` is out for the same
reason: Safari can display it, most other browsers can't.

Export to JPEG out of Lightroom / Capture One / Photos first. A file that isn't
one of the supported extensions is simply ignored — it won't appear, and it
won't raise an error either, so if a photo doesn't show up, check the extension.

**Order** is by filename, so prefix them to control it:

    01-washington-square.jpg
    02-dumbo-morning.jpg
    03-amherst-fall.jpg

**Captions** are optional. To add one, open `src/pages/Photography.jsx` and add
an entry to the `captions` object, keyed by the exact filename:

```js
const captions = {
  "01-washington-square.jpg": { title: "Washington Square", place: "New York", year: "2026" },
};
```

Photos without a caption just show their frame number.

**Size**: these ship as-is, with no image pipeline — downscale on export.
Roughly 2000px on the long edge is plenty, and anything over ~500 KB per photo
will slow the page down.

While this folder has no images, the section renders a set of empty frames
carrying these instructions. It switches to the real contact sheet on the first
file you add.
