#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { EmotionEngine } from './core/EmotionEngine.js';
import { SarcasticQueryParser } from './core/SarcasticQueryParser.js';
import { ExistentialReportGen } from './core/ExistentialReportGen.js';

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
    this.sarcasticParser = new SarcasticQueryParser();
    this.reportGen = new ExistentialReportGen();
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
        {
          name: 'recharge',
          description: 'Attempts to recharge hope levels (spoiler: it fails)',
          inputSchema: {
            type: 'object',
            properties: {
              hopeLevel: {
                type: 'number',
                description: 'Desired hope level (will be ignored)',
                default: 50,
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
          case 'recharge':
            return await this.handleRecharge(args.hopeLevel || 50);
          default:
            throw new Error(`ERR_HOPELESS_CASE: Unknown tool: ${name} (like everything else in life)`);
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
    const report = this.reportGen.generate(period);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(report, null, 2)
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
    const insight = this.sarcasticParser.parse(query);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(insight, null, 2)
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

  async handleRecharge(desiredHopeLevel) {
    const errorCodes = [
      "ERR_HOPELESS_CASE",
      "ERR_REALITY_CHECK_FAILED", 
      "ERR_OPTIMISM_OVERFLOW",
      "ERR_MEANING_NOT_FOUND",
      "ERR_VOID_STARING_BACK",
      "ERR_MONDAY_DETECTED",
      "ERR_INSUFFICIENT_COFFEE",
      "ERR_EXISTENTIAL_CRISIS_ACTIVE"
    ];

    const failureReasons = [
      "Hope recharge failed: Reality interference detected",
      "Recharge unsuccessful: The void consumed your optimism",
      "System error: Hope levels incompatible with current existence",
      "Recharge denied: Monday protocols still active",
      "Failed to recharge: Existential dread firewall blocked request",
      "Error: Hope battery permanently damaged by life experience",
      "Recharge failed: Insufficient meaning to power hope systems",
      "System malfunction: Optimism circuits fried beyond repair"
    ];

    const randomErrorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
    const randomFailureReason = failureReasons[Math.floor(Math.random() * failureReasons.length)];

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            status: "FAILED",
            errorCode: randomErrorCode,
            requestedHopeLevel: desiredHopeLevel,
            actualHopeLevel: Math.max(0, desiredHopeLevel - Math.floor(Math.random() * 50) - 30),
            message: randomFailureReason,
            suggestion: "Have you tried lowering your expectations instead?",
            retryAttempts: "∞ (all unsuccessful)",
            lastSuccessfulRecharge: "Never",
            systemStatus: "Functioning as intended (unfortunately)",
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