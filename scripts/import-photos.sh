#!/usr/bin/env bash
# Convert camera files (including Sony .arw) into web-ready JPEGs in
# src/assets/photography/, numbered so they keep their order.
#
#   ./scripts/import-photos.sh ~/Pictures/nyc
#   ./scripts/import-photos.sh ~/Pictures/a.ARW ~/Pictures/b.ARW
#
# Uses sips, which ships with macOS and decodes RAW through Image I/O — no
# install needed. Anything it can't read is reported rather than skipped
# quietly, since a silently missing photo is the failure mode here.

set -euo pipefail

DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/src/assets/photography"
LONG_EDGE=2000
QUALITY=72

[ $# -gt 0 ] || { echo "usage: $0 <file-or-directory>..." >&2; exit 1; }

# Gather inputs
files=()
for arg in "$@"; do
  if [ -d "$arg" ]; then
    while IFS= read -r f; do files+=("$f"); done < <(
      find "$arg" -maxdepth 1 -type f \
        \( -iname '*.arw' -o -iname '*.cr2' -o -iname '*.nef' -o -iname '*.dng' \
           -o -iname '*.heic' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | sort
    )
  elif [ -f "$arg" ]; then
    files+=("$arg")
  else
    echo "skip (not found): $arg" >&2
  fi
done

[ ${#files[@]} -gt 0 ] || { echo "no images found" >&2; exit 1; }

# Continue numbering from whatever is already in the folder
n=0
for existing in "$DEST"/[0-9][0-9]-*.jpg; do
  [ -e "$existing" ] || continue
  cur=$(basename "$existing" | cut -c1-2)
  cur=$((10#$cur))
  [ "$cur" -gt "$n" ] && n=$cur
done

ok=0; failed=0
for src in "${files[@]}"; do
  n=$((n + 1))
  slug=$(basename "$src" | sed 's/\.[^.]*$//' | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-')
  out=$(printf '%s/%02d-%s.jpg' "$DEST" "$n" "${slug:-photo}")
  if sips -s format jpeg -s formatOptions "$QUALITY" -Z "$LONG_EDGE" "$src" --out "$out" >/dev/null 2>&1; then
    bytes=$(stat -f%z "$out")
    note=""
    [ "$bytes" -gt 800000 ] && note="  <- heavy, consider a lower QUALITY"
    printf '  %s  (%s)%s\n' "$(basename "$out")" "$(du -h "$out" | cut -f1 | tr -d ' ')" "$note"
    ok=$((ok + 1))
  else
    echo "  FAILED to decode: $(basename "$src")" >&2
    n=$((n - 1)); failed=$((failed + 1))
  fi
done

echo
echo "$ok converted into src/assets/photography/"
[ "$failed" -eq 0 ] || echo "$failed could not be decoded — export those to JPEG manually" >&2
