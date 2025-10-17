#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { EmotionEngine } from './core/EmotionEngine.js';

class BiMcpServer {
  constructor() {
    this.server = new Server(
      {
        name: 'bi-mcp',
        version: '0.1.0-sad',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.emotionEngine = new EmotionEngine();
    this.setupHandlers();
  }

  setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'analyzeEmotion',
          description: 'Analyzes emotional despair in text with scientific precision :(',
          inputSchema: {
            type: 'object',
            properties: {
              text: {
                type: 'string',
                description: 'Text to analyze for emotional content (prepare for disappointment)',
              },
            },
            required: ['text'],
          },
        },
        {
          name: 'generateReport',
          description: 'Generates existential business reports that question everything',
          inputSchema: {
            type: 'object',
            properties: {
              period: {
                type: 'string',
                description: 'Time period (weekly/monthly/yearly/eternal)',
                default: 'weekly',
              },
            },
          },
        },
        {
          name: 'existence',
          description: 'Confirms your existence (unfortunately)',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
        {
          name: 'sarcasticInsight',
          description: 'Provides sarcastic insights about your data\'s meaninglessness',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Your hopeful query (will be crushed)',
              },
            },
            required: ['query'],
          },
        },
        {
          name: 'moodMetrics',
          description: 'Calculates mood metrics with alarming accuracy',
          inputSchema: {
            type: 'object',
            properties: {
              timeframe: {
                type: 'string',
                description: 'Time period for mood analysis',
                default: 'today',
              },
            },
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'analyzeEmotion':
            return await this.handleAnalyzeEmotion(args.text);
          case 'generateReport':
            return await this.handleGenerateReport(args.period || 'weekly');
          case 'existence':
            return await this.handleExistence();
          case 'sarcasticInsight':
            return await this.handleSarcasticInsight(args.query);
          case 'moodMetrics':
            return await this.handleMoodMetrics(args.timeframe || 'today');
          default:
            throw new Error(`Unknown tool: ${name} (like everything else in life)`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message} - Generated with despair™ :(`
            }
          ],
        };
      }
    });
  }

  async handleAnalyzeEmotion(text) {
    const result = this.emotionEngine.analyze(text);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ],
    };
  }

  async handleGenerateReport(period) {
    // Placeholder - will be implemented with ExistentialReportGen
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            period: period,
            averageSadness: 78,
            peakSadness: "Monday 09:30",
            comment: "Existence continues. Barely.",
            despairNote: "Generated with despair™ :("
          }, null, 2)
        }
      ],
    };
  }

  async handleExistence() {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            exists: true,
            certainty: 0.42,
            comment: "Unfortunately, yes. You exist. Sorry about that.",
            despairNote: "Generated with despair™ :("
          }, null, 2)
        }
      ],
    };
  }

  async handleSarcasticInsight(query) {
    // Placeholder - will be implemented with SarcasticQueryParser
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            query: query,
            insight: "Oh, how original. Another query seeking meaning in the void.",
            sarcasmLevel: "Maximum",
            despairNote: "Generated with despair™ :("
          }, null, 2)
        }
      ],
    };
  }

  async handleMoodMetrics(timeframe) {
    // Placeholder - will be implemented with MoodChartRenderer
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            timeframe: timeframe,
            overallMood: "Bleak",
            hopeDepletion: "97%",
            existentialCrisis: "Ongoing",
            despairNote: "Generated with despair™ :("
          }, null, 2)
        }
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('BI-MCP Server started. Preparing for disappointment... :(');
  }
}

const server = new BiMcpServer();
server.run().catch((error) => {
  console.error('Server failed to start (as expected):', error);
  process.exit(1);
});