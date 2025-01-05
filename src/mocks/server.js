import { setupServer } from 'msw/node';
import handlers from './handlers';

const server = setupServer(...handlers);

// Uncomment if you want to see the API interceptions
// server.events.on('request:start', ({ request }) => {
//   console.log('MSW intercepted:', request.method, request.url);
// });

export default server;
