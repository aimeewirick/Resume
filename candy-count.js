const { Redis } = require('@upstash/redis');

// The Upstash integration on Vercel auto-injects these env vars once connected
const redis = Redis.fromEnv();

const KEY = 'candyJarCount';
const START = 27; // baseline shown before any real submissions existed

module.exports = async function handler(req, res) {
  // Allow this to be called from your site (same-origin, but harmless to set)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      let count = await redis.get(KEY);
      if (count === null || count === undefined) {
        count = START;
        await redis.set(KEY, count);
      }
      return res.status(200).json({ count });
    }

    if (req.method === 'POST') {
      // Make sure the key exists before incrementing, so we start from START not 0
      const existing = await redis.get(KEY);
      if (existing === null || existing === undefined) {
        await redis.set(KEY, START);
      }
      const count = await redis.incr(KEY);
      return res.status(200).json({ count });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('candy-count error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
