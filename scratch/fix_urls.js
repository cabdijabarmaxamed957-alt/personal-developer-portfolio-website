const fs = require('fs');

let c = fs.readFileSync('src/data/projects.ts', 'utf8');

c = c.replace(
  /("slug": "queuemaster-event-broker"[\s\S]*?"images": \[\s*)"[^"]+"/,
  '$1"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"'
);

c = c.replace(
  /("slug": "authvault-iam-service"[\s\S]*?"images": \[\s*)"[^"]+"/,
  '$1"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80"'
);

fs.writeFileSync('src/data/projects.ts', c, 'utf8');
console.log('SUCCESSFULLY_UPDATED_PROJECT_IMAGES');
