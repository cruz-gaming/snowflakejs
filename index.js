let sequence = 0n;
let lastTimestamp = -1n;

const EPOCH = 1420070400000n; 

/**
 * Generate a Discord-style Snowflake ID
 * @param {number} [workerId=1] Worker ID (0–1023)
 * @returns {bigint}
 */
export function generateSnowflake(workerId = 1) {
  const wid = BigInt(workerId & 0x3ff); 
  let timestamp = BigInt(Date.now());

  if (timestamp === lastTimestamp) {
    sequence = (sequence + 1n) & 0xfffn;
    if (sequence === 0n) {
      
      while (timestamp <= lastTimestamp) {
        timestamp = BigInt(Date.now());
      }
    }
  } else {
    sequence = 0n;
  }

  lastTimestamp = timestamp;

  const snowflake = ((timestamp - EPOCH) << 22n) | (wid << 12n) | sequence;
  return snowflake.toString();
}

/**
 * Extract timestamp from a Snowflake
 * @param {bigint|string} snowflake
 * @returns {Date}
 */
export function getTimestamp(snowflake) {
  const id = BigInt(snowflake);
  const timestamp = (id >> 22n) + EPOCH;
  return new Date(Number(timestamp));
}