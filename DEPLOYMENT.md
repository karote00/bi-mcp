# BI-MCP Deployment Guide

## For Users

### Quick Start with uvx (Recommended)
```bash
uvx @karote00/bi-mcp
```

### NPM Global Installation
```bash
npm install -g @karote00/bi-mcp
bi-mcp
```

### MCP Client Configuration

#### Kiro IDE
Add to your `.kiro/settings/mcp.json`:
```json
{
  "mcpServers": {
    "bi-mcp": {
      "command": "uvx",
      "args": ["@karote00/bi-mcp@latest"],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

#### Claude Desktop
Add to your MCP configuration:
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

## For Developers

### Publishing to NPM
```bash
# Login to NPM
npm login

# Publish the package
npm publish --access public

# Update version and republish
npm version patch
npm publish
```

### Local Development
```bash
# Clone and setup
git clone https://github.com/karote00/bi-mcp.git
cd bi-mcp
npm install

# Run in development mode
npm run dev

# Test the MCP server
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list"}' | node src/index.js
```

## Troubleshooting

### Common Issues
- **uvx not found**: Install uv first: `pip install uv`
- **Permission errors**: Use `sudo npm install -g` on Unix systems
- **MCP not connecting**: Check your MCP client configuration file path

### Error Codes (All Intentional)
- `ERR_HOPELESS_CASE`: Standard operating condition
- `ERR_MONDAY_DETECTED`: System working as intended
- `ERR_REALITY_CHECK_FAILED`: Feature, not bug

*Generated with despair™ :(*