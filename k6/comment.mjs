import { readFileSync } from 'node:fs';

const report = JSON.parse(readFileSync('k6.json', 'utf-8'));

console.log(`# K6 Report`)
console.log(``)
console.log(`RPS: ${report.metrics.http_reqs.rate}`)
console.log(``)
console.log(`## Summary Table`)
console.log(``)
console.log(`| Key | Value |`)
console.log(`| ------------- | ------------- |`)

for (const [key, val] of Object.entries(report.metrics)) {
  if (val.max) {
    console.log(`| ${key} | min: ${val.min}, avg: ${val.avg}, max: ${val.max} |`)
  } else if (val.count) {
    console.log(`| ${key} | ${val.count} |`)
  }
}

console.log(``)
