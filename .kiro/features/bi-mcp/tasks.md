# tasks.md

## 🧩 BI-MCP Development Task List (AI-free)

---

## Phase 1 — Project Setup
- [ ] Create project folder `bi-mcp/`  
- [ ] Add `manifest.json`  
- [ ] Implement base MCP handler  
- [ ] Define core API endpoints:  
  - `/analyzeEmotion`  
  - `/generateReport`  
  - `/existence`  
  - `/sarcasticInsight`  
  - `/moodMetrics`  
- [ ] Add sample datasets (CSV / JSON)

---

## Phase 2 — Emotion Engine
- [ ] Implement `EmotionEngine` using keyword rules  
- [ ] Standardize JSON output with `despairNote`  
- [ ] Optional: allow random variation for “sadness index”

---

## Phase 3 — Sarcasm Module
- [ ] Implement `SarcasticQueryParser` using templates  
- [ ] Create 10–20 sarcastic / absurd response templates  
- [ ] Randomly select replies per query

---

## Phase 4 — Report Generation
- [ ] Implement `ExistentialReportGen`  
- [ ] Generate fake metrics and trends  
- [ ] Output JSON with report data

```json
{
  "week": "2025-W42",
  "average_sadness": 78,
  "peak_sadness": "Monday 09:30",
  "comment": "Existence continues. Barely.",
  "despairNote": "Generated with despair™"
}
```

---

## Phase 5 — Easter Eggs & Humor
- [ ] Add `/recharge` endpoint returning always failed message  
- [ ] Define error codes like `ERR_HOPELESS_CASE`  
- [ ] Optional: random existential quotes for triggers

---

## Phase 6 — Visualization
- [ ] Create ASCII or JSON mock charts  
- [ ] Define color / style theme for charts (if needed)  
- [ ] Show trends for “sadness index” or “hope depletion”

---

## Phase 7 — Final Touches
- [ ] Append “Generated with despair™” to all outputs  
- [ ] Write README.md in mock-serious, humorous tone  
- [ ] Push to GitHub with tag: `v0.1.0-sad`  

---

## Phase 8 — Optional Enhancements
- [ ] Add new absurd metrics modules (e.g., `HopeLossAnalyzer`)  
- [ ] Batch process multiple queries  
- [ ] Logging for MCP internal “melancholy state”
