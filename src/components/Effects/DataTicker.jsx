import { useEffect, useRef } from "react";

const TICKER_DATA = [
  "010010101", "110101010", "001010101", "SYSTEM_OVERRIDE_ENABLED",
  "INIT_HANDSHAKE_FAILURE", "RETRY_04", "CRITICAL_NULL",
  "FLUX_STABILIZER: OFFLINE", "VOID_PROTOCOL_INITIATED",
  "0x4F2A3B", "0xDEADBEEF", "0xCAFEBABE", "NEURAL_SYNC: 98.7%",
  "TENSOR_FLOW: ACTIVE", "GPU_UTIL: 94%", "BATCH_SIZE: 256",
  "EPOCH: 147/200", "LOSS: 0.0023", "ACC: 99.1%",
  "PIPELINE_STATUS: NOMINAL", "NODE_492: ONLINE",
];

export default function DataTicker({ speed = 30, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Duplicate content for seamless loop
    const inner = el.querySelector("[data-ticker-inner]");
    if (inner && !inner.dataset.cloned) {
      inner.innerHTML += inner.innerHTML;
      inner.dataset.cloned = "true";
    }
  }, []);

  const tickerText = TICKER_DATA.join(" // ");

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap font-display text-label-sm text-aiml-glow/60 ${className}`}
    >
      <div
        data-ticker-inner
        className="inline-block"
        style={{
          animation: `data-scroll ${speed}s linear infinite`,
        }}
      >
        <span className="mr-16">{tickerText}</span>
        <span className="mr-16">{tickerText}</span>
      </div>
    </div>
  );
}
