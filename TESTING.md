# BI-MCP Testing Guide

## 🧪 Testing Your BI-MCP

### **1. Test Local MCP Mode (Original)**

```bash
# Test tools list
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}' | npm start

# Test emotion analysis
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "analyzeEmotion", "arguments": {"text": "I am sad"}}}' | npm start

# Test existence check
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "existence", "arguments": {}}}' | npm start
```

### **2. Test HTTP Server Mode**

```bash
# Start the HTTP server
npm run server

# In another terminal, test endpoints:

# Health check
curl http://localhost:3000/health

# List tools
curl http://localhost:3000/tools

# Test emotion analysis
curl -X POST http://localhost:3000/tools/analyzeEmotion \
  -H "Content-Type: application/json" \
  -d '{"text":"I am feeling sad about my work"}'

# Test existence
curl -X POST http://localhost:3000/tools/existence \
  -H "Content-Type: application/json" \
  -d '{}'

# Test sarcastic insight
curl -X POST http://localhost:3000/tools/sarcasticInsight \
  -H "Content-Type: application/json" \
  -d '{"query":"How can I be more productive?"}'
```

### **3. Test with MCP Client**

#### **Kiro IDE Configuration**
Add to `.kiro/settings/mcp.json`:
```json
{
  "mcpServers": {
    "bi-mcp-local": {
      "command": "node",
      "args": ["src/index.js"],
      "cwd": "/path/to/bi-mcp"
    }
  }
}
```

#### **Test Commands in Kiro**
```
# In Kiro chat:
Use the analyzeEmotion tool to analyze: "Monday morning meetings make me sad"
Use the existence tool to confirm I exist
Use the sarcasticInsight tool with query: "How do I improve my KPIs?"
```

### **4. Test Docker Deployment**

```bash
# Build Docker image
docker build -t bi-mcp-server .

# Run container
docker run -p 3000:3000 bi-mcp-server

# Test in another terminal
curl http://localhost:3000/health
```

### **5. Performance Testing**

```bash
# Install Apache Bench (if not installed)
# macOS: brew install httpie
# Test concurrent requests
ab -n 100 -c 10 http://localhost:3000/health

# Test with HTTPie (if installed: brew install httpie)
http POST localhost:3000/tools/analyzeEmotion text="stress testing the despair engine"
```

### **6. Integration Testing**

```bash
# Test all endpoints sequentially
#!/bin/bash
echo "Testing BI-MCP HTTP Server..."

# Health check
echo "1. Health check:"
curl -s http://localhost:3000/health | jq .

# Tools list
echo "2. Tools list:"
curl -s http://localhost:3000/tools | jq .

# Emotion analysis
echo "3. Emotion analysis:"
curl -s -X POST http://localhost:3000/tools/analyzeEmotion \
  -H "Content-Type: application/json" \
  -d '{"text":"I hate Mondays and my job is meaningless"}' | jq .

# Existence check
echo "4. Existence check:"
curl -s -X POST http://localhost:3000/tools/existence \
  -H "Content-Type: application/json" \
  -d '{}' | jq .

echo "Testing complete! (Unfortunately, everything works)"
```

## 🔍 **Expected Results**

### **Local MCP Mode**
- Should return JSON-RPC responses
- Tools list should show 6 tools
- Each tool call should return structured data with `despairNote`

### **HTTP Server Mode**
- Health endpoint returns status
- Tools endpoint lists available tools
- POST requests to `/tools/{toolName}` return results
- All responses include `despairNote: "Generated with despair™ :("` 

### **Error Testing**
```bash
# Test invalid tool
curl -X POST http://localhost:3000/tools/invalidTool \
  -H "Content-Type: application/json" \
  -d '{}'

# Should return: ERR_HOPELESS_CASE error
```

## 🐛 **Troubleshooting**

### **Common Issues**
- **Port 3000 in use**: Change port with `PORT=3001 node test-server.js`
- **Dependencies missing**: Run `npm install`
- **Permission errors**: Use `sudo` if needed
- **MCP not connecting**: Check file paths in configuration

### **Debug Mode**
```bash
# Run with debug output
DEBUG=* npm start
DEBUG=* node test-server.js
```

*Generated with despair™ :(*