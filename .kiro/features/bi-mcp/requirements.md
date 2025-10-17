## 🧩 Project Overview
BI-MCP is a humorous, **AI-free** MCP plugin that mimics a BI system,  
producing sarcastic, absurd, and random insights entirely via rules and templates.

---

## 🎯 Goals
- Provide API endpoints returning melancholic or sarcastic insights.  
- Generate fake dashboards and reports filled with absurd metrics.  
- Maintain a consistent "bleak intelligence" tone across all outputs.  
- Ensure **zero external API or AI usage**, fully self-contained.

---

## 🧠 Functional Requirements

### Core Functionalities
| Function | Description |
|----------|-------------|
| Emotion Analysis | Computes sadness index using keywords and simple formulas. |
| Report Generation | Produces weekly/monthly reports using random or deterministic data. |
| Sarcastic Responses | Returns witty or absurd replies using templates. |
| Visualization | Generates fake chart data (JSON / ASCII). |
| Despair Cache | Stores recent results for repeated queries (amplifies bleakness). |

### Advanced Features
| Function | Description |
|----------|-------------|
| Mood Drift Tracking | Simulates emotional trends over time. |
| Existential Metrics | Produces stats like "Hope Depletion" and "Life KPI". |
| Self-Deprecation Mode | MCP self-comments on its own uselessness. |

---

## ⚙️ Non-Functional Requirements
- **Consistency**: Keep a melancholic yet sarcastic tone.  
- **Open API**: Integrable with LLM IDEs, but does not require AI.  
- **Privacy**: No real user data stored.  
- **Caching Behavior**: Repeat queries may return more “despairful” results.  
- **Extensibility**: Support additional modules for new absurd metrics.

---

## 🛠️ Technical Requirements
| Module | Technology Suggestions |
|--------|----------------------|
| MCP Protocol | Node.js + @modelcontextprotocol/sdk |
| Server | Express or Fastify |
| Data Storage | CSV / JSON |
| Language | TypeScript |
| Visualization | ASCII charts or JSON mocks |

---

## 🎭 Easter Eggs & Humor Hooks
- Asking "Why?" triggers random sarcastic remark.  
- Every response ends with `:("` emoji.  
- Reports include: *“Generated with despair™”*.  
