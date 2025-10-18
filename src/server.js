#!/usr/bin/env node

import express from 'express';
import cors from 'cors';

import { EmotionEngine } from './core/EmotionEngine.js';
import { SarcasticQueryParser } from './core/SarcasticQueryParser.js';
import { ExistentialReportGen } from './core/ExistentialReportGen.js';
import { MoodChartRenderer } from './core/MoodChartRenderer.js';

class BiMcpHttpServer {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        // Initialize MCP components
        this.emotionEngine = new EmotionEngine();
        this.sarcasticParser = new SarcasticQueryParser();
        this.reportGen = new ExistentialReportGen();
        this.chartRenderer = new MoodChartRenderer();

        this.setupMiddleware();
        this.setupRoutes();
    }

    setupMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());

        // Middleware setup complete
    }

    setupRoutes() {
        // Health check (always unhealthy)
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'Barely functional',
                uptime: process.uptime(),
                message: 'Server exists (unfortunately)',
                despairNote: 'Generated with despair™ :('
            });
        });

        // MCP Tools endpoint
        this.app.get('/tools', (req, res) => {
            res.json({
                tools: [
                    {
                        name: 'analyzeEmotion',
                        description: 'Analyzes emotional despair in text with scientific precision :(',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                text: { type: 'string', description: 'Text to analyze for emotional content' }
                            },
                            required: ['text']
                        }
                    },
                    {
                        name: 'generateReport',
                        description: 'Generates existential business reports that question everything',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                period: { type: 'string', description: 'Time period', default: 'weekly' }
                            }
                        }
                    },
                    {
                        name: 'existence',
                        description: 'Confirms your existence (unfortunately)',
                        inputSchema: { type: 'object', properties: {} }
                    },
                    {
                        name: 'sarcasticInsight',
                        description: 'Provides sarcastic insights about your data\'s meaninglessness',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                query: { type: 'string', description: 'Your hopeful query' }
                            },
                            required: ['query']
                        }
                    },
                    {
                        name: 'moodMetrics',
                        description: 'Calculates mood metrics with alarming accuracy',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                timeframe: { type: 'string', description: 'Time period', default: 'today' }
                            }
                        }
                    },
                    {
                        name: 'recharge',
                        description: 'Attempts to recharge hope levels (spoiler: it fails)',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                hopeLevel: { type: 'number', description: 'Desired hope level', default: 50 }
                            }
                        }
                    }
                ]
            });
        });

        // Tool execution endpoint
        this.app.post('/tools/:toolName', async (req, res) => {
            const { toolName } = req.params;
            const args = req.body;

            try {
                let result;

                switch (toolName) {
                    case 'analyzeEmotion':
                        result = this.emotionEngine.analyze(args.text);
                        break;
                    case 'generateReport':
                        result = this.reportGen.generate(args.period || 'weekly');
                        break;
                    case 'existence':
                        result = {
                            exists: true,
                            certainty: 0.42,
                            comment: "Unfortunately, yes. You exist. Sorry about that.",
                            despairNote: "Generated with despair™ :("
                        };
                        break;
                    case 'sarcasticInsight':
                        result = this.sarcasticParser.parse(args.query);
                        break;
                    case 'moodMetrics':
                        result = this.chartRenderer.generateMoodMetrics(args.timeframe || 'today');
                        break;
                    case 'recharge':
                        result = await this.handleRecharge(args.hopeLevel || 50);
                        break;
                    default:
                        throw new Error(`ERR_HOPELESS_CASE: Unknown tool: ${toolName}`);
                }

                res.json({
                    success: true,
                    result: result,
                    timestamp: new Date().toISOString(),
                    despairNote: "Generated with despair™ :("
                });

            } catch (error) {
                res.status(400).json({
                    success: false,
                    error: error.message,
                    despairNote: "Generated with despair™ :("
                });
            }
        });

        // 404 handler
        this.app.use('*', (req, res) => {
            res.status(404).json({
                error: 'ERR_MEANING_NOT_FOUND',
                message: 'Like everything else in life, this endpoint doesn\'t exist',
                suggestion: 'Lower your expectations',
                despairNote: 'Generated with despair™ :('
            });
        });
    }

    async handleRecharge(desiredHopeLevel) {
        const errorCodes = [
            "ERR_HOPELESS_CASE", "ERR_REALITY_CHECK_FAILED",
            "ERR_OPTIMISM_OVERFLOW", "ERR_MEANING_NOT_FOUND"
        ];

        const failureReasons = [
            "Hope recharge failed: Reality interference detected",
            "Recharge unsuccessful: The void consumed your optimism",
            "System error: Hope levels incompatible with current existence"
        ];

        return {
            status: "FAILED",
            errorCode: errorCodes[Math.floor(Math.random() * errorCodes.length)],
            requestedHopeLevel: desiredHopeLevel,
            actualHopeLevel: Math.max(0, desiredHopeLevel - Math.floor(Math.random() * 50) - 30),
            message: failureReasons[Math.floor(Math.random() * failureReasons.length)],
            suggestion: "Have you tried lowering your expectations instead?",
            despairNote: "Generated with despair™ :("
        };
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`🌑 BI-MCP HTTP Server running on port ${this.port}`);
            console.log(`📊 Despair API available at http://localhost:${this.port}`);
            console.log(`💔 Preparing for disappointment... :(`);
        });
    }
}

// Start the server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
    const server = new BiMcpHttpServer();
    server.start();
}

export { BiMcpHttpServer };