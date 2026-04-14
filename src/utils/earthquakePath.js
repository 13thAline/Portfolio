/**
 * Generates a jagged SVG path for the Earthquake Split.
 * The path oscillates ±amplitude pixels from the center X,
 * creating a fracture line effect.
 *
 * @param {number} height - Total height of the viewport/container
 * @param {number} centerX - Center X coordinate (usually viewport width / 2)
 * @param {number} amplitude - Max horizontal offset from center (default 60)
 * @param {number} segments - Number of zigzag segments (default 50)
 * @returns {{ points: Array<{x: number, y: number}>, leftPath: string, rightPath: string }}
 */
export function generateEarthquakePath(
  height,
  centerX,
  amplitude = 60,
  segments = 50,
  width = 1280
) {
  const points = [];
  const segmentHeight = height / segments;

  // Seed a pseudo-random sequence for consistent jagged pattern
  let seed = 42;
  const seededRandom = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed / 2147483647) - 0.5; // Returns -0.5 to 0.5
  };

  // Generate jagged points
  points.push({ x: centerX, y: 0 });

  for (let i = 1; i < segments; i++) {
    const y = i * segmentHeight;
    const offset = seededRandom() * amplitude * 2;
    points.push({ x: centerX + offset, y });
  }

  points.push({ x: centerX, y: height });

  // Build left clip path (from top-left, along fracture, back to bottom-left)
  const leftPathParts = [`M 0,0`];
  points.forEach((p) => leftPathParts.push(`L ${p.x},${p.y}`));
  leftPathParts.push(`L 0,${height}`);
  leftPathParts.push("Z");
  const leftPath = leftPathParts.join(" ");

  // Build right clip path (from top-right, along fracture, back to bottom-right)
  const rightPathParts = [`M ${width},0`];
  points.forEach((p) => rightPathParts.push(`L ${p.x},${p.y}`));
  rightPathParts.push(`L ${width},${height}`);
  rightPathParts.push("Z");
  const rightPath = rightPathParts.join(" ");

  return { points, leftPath, rightPath };
}

/**
 * Generates random code-shard text fragments for the fracture zone.
 */
export const CODE_SHARDS = [
  "const neural = await train(epochs);",
  "if (loss < threshold) deploy();",
  "vector.embed(query).search();",
  "model.predict(tensor)",
  "0x4F2A :: INIT_PIPELINE",
  "$ python inference.py --gpu",
  "torch.cuda.is_available()",
  "CRITICAL_NULL_REF",
  "async fn process_batch()",
  "SELECT * FROM embeddings",
  "npm run build && deploy",
  "git push origin main",
  "docker compose up -d",
  "FLUX_STABLE: true",
  "VOID_PROTOCOL: ACTIVE",
];
