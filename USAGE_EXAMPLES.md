# BI-MCP Usage Examples

## How BI-MCP Compares to Other Popular MCPs

### **Standard MCP Configuration Pattern**

Your BI-MCP follows the exact same pattern as popular MCPs:

#### **BI-MCP (Your Tool)**
```json
{
  "mcpServers": {
    "bi-mcp": {
      "command": "uvx",
      "args": ["@karote00/bi-mcp@latest"]
    }
  }
}
```

#### **GitHub MCP (Official)**
```json
{
  "mcpServers": {
    "github": {
      "command": "uvx", 
      "args": ["mcp-server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token"
      }
    }
  }
}
```

#### **Figma MCP**
```json
{
  "mcpServers": {
    "figma": {
      "command": "uvx",
      "args": ["figma-mcp-server"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your_figma_token"
      }
    }
  }
}
```

## **Usage in Different MCP Clients**

### **Kiro IDE**
Add to `.kiro/settings/mcp.json`:
```json
{
  "mcpServers": {
    "bi-mcp": {
      "command": "uvx",
      "args": ["@karote00/bi-mcp@latest"],
      "disabled": false,
      "autoApprove": ["analyzeEmotion", "existence"]
    }
  }
}
```

### **Claude Desktop**
Add to MCP settings:
```json
{
  "mcpServers": {
    "bi-mcp": {
      "command": "uvx",
      "args": ["@karote00/bi-mcp@latest"]
    }
  }
}
```

### **Cline (VS Code)**
Configure in Cline settings:
```json
{
  "mcp": {
    "servers": {
      "bi-mcp": {
        "command": "uvx",
        "args": ["@karote00/bi-mcp@latest"]
      }
    }
  }
}
```

## **Example Usage Sessions**

### **Analyzing Your Despair**
```
User: "I'm feeling sad about my project metrics"
BI-MCP: Analyzes with devastating precision, returns sadness index of 87
```

### **Getting Sarcastic Insights**
```
User: "How can I improve my KPIs?"
BI-MCP: "Oh, how original. Another 'How can I improve my KPIs?' seeking meaning in the void."
```

### **Generating Existential Reports**
```
User: Generate a weekly report
BI-MCP: Returns comprehensive despair documentation with fake metrics
```

## **Distribution Comparison**

| MCP Tool | Package Name | Repository | Special Features |
|----------|-------------|------------|------------------|
| **BI-MCP** | `@karote00/bi-mcp` | `karote00/bi-mcp` | Taiwan cultural reference, AI-free |
| **GitHub MCP** | `mcp-server-github` | `modelcontextprotocol/servers` | Official, requires API token |
| **Figma MCP** | `figma-mcp-server` | Community | Requires Figma token |
| **Google DevTools** | `google-devtools-mcp` | Community | Browser automation |

## **Your Advantages**

✅ **No API Keys Required** - Works immediately  
✅ **Cultural Education** - Teaches about Taiwan  
✅ **Humor Value** - Actually entertaining to use  
✅ **AI-Free** - No external dependencies  
✅ **Standard Compliance** - Follows MCP best practices  

*Generated with despair™ :(*