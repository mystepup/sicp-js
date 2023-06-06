let x = 10;
const s = make_serializer()
concurrent_execute(() => { x = s(() => x * x)(); }, s(() => { x = x + 1; }))