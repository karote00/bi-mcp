export class MoodChartRenderer {
  constructor() {
    this.chartThemes = {
      despair: {
        colors: ["#000000", "#1a1a1a", "#333333", "#4d4d4d"],
        style: "Monochromatic melancholy",
        mood: "Appropriately bleak"
      },
      existential: {
        colors: ["#2c2c2c", "#404040", "#595959", "#737373"],
        style: "Grayscale grief", 
        mood: "Void-like"
      },
      hopeless: {
        colors: ["#0d0d0d", "#262626", "#404040", "#595959"],
        style: "Darkness descending",
        mood: "Perfectly pessimistic"
      }
    };

    this.asciiCharts = {
      sadnessLine: [
        "Sadness Over Time (Higher = More Accurate)",
        "100 |████████████████████████████████",
        " 90 |██████████████████████████████  ",
        " 80 |████████████████████████████    ",
        " 70 |██████████████████████████      ",
        " 60 |████████████████████████        ",
        " 50 |██████████████████████          ",
        " 40 |████████████████████            ",
        " 30 |██████████████████              ",
        " 20 |████████████████                ",
        " 10 |██████████████                  ",
        "  0 |████████████                    ",
        "    +--------------------------------",
        "    Mon Tue Wed Thu Fri Sat Sun"
      ],
      hopeDepletion: [
        "Hope Depletion Chart (Lower = More Realistic)",
        " 20 |██                              ",
        " 18 |████                            ",
        " 16 |██████                          ",
        " 14 |████████                        ",
        " 12 |██████████                      ",
        " 10 |████████████                    ",
        "  8 |██████████████                  ",
        "  6 |████████████████                ",
        "  4 |██████████████████              ",
        "  2 |████████████████████            ",
        "  0 |████████████████████████████████",
        "    +--------------------------------",
        "    Jan Feb Mar Apr May Jun Jul Aug"
      ]
    };
  }

  generateMoodMetrics(timeframe) {
    const theme = this.getRandomTheme();
    const metrics = this.calculateMoodMetrics(timeframe);
    const charts = this.generateCharts(timeframe);
    
    return {
      timeframe: timeframe,
      theme: theme,
      metrics: metrics,
      visualization: {
        charts: charts,
        chartType: "Depressingly accurate data visualization",
        renderingEngine: "ASCII Art of Despair™",
        colorScheme: theme.colors,
        accessibility: "Optimized for the colorblind (emotionally)"
      },
      trends: this.generateTrendAnalysis(timeframe),
      insights: this.generateVisualizationInsights(),
      metadata: {
        generatedAt: new Date().toISOString(),
        accuracy: "Devastatingly precise",
        usefulness: "Questionable",
        hopeInspiring: false
      },
      despairNote: "Generated with despair™ :("
    };
  }

  calculateMoodMetrics(timeframe) {
    const baseMetrics = {
      overallMood: this.getRandomMood(),
      sadnessIndex: Math.floor(Math.random() * 30) + 70,
      hopeDepletion: `${Math.floor(Math.random() * 20) + 80}%`,
      existentialCrisis: this.getRandomCrisisLevel(),
      mondayDreadFactor: (Math.random() * 3 + 2).toFixed(1),
      coffeeToSadnessRatio: (Math.random() * 2 + 0.5).toFixed(2),
      voidStaringTime: `${Math.floor(Math.random() * 120) + 30} minutes`,
      meaningSearchAttempts: Math.floor(Math.random() * 50) + 10,
      realityAcceptanceLevel: `${Math.floor(Math.random() * 40) + 20}%`
    };

    // Adjust based on timeframe
    if (timeframe === 'today') {
      baseMetrics.todaySpecific = {
        morningDread: "Severe",
        lunchOptimism: "Briefly flickered",
        afternoonCrash: "Spectacular",
        eveningReflection: "Regrettable"
      };
    } else if (timeframe === 'week') {
      baseMetrics.weeklyPattern = {
        mondayImpact: "Devastating",
        wednesdayHump: "More like a cliff",
        fridayRelief: "Temporary illusion",
        weekendDenial: "Professionally executed"
      };
    }

    return baseMetrics;
  }

  generateCharts(timeframe) {
    const sadnessChart = this.generateSadnessChart(timeframe);
    const hopeChart = this.generateHopeChart(timeframe);
    
    return {
      sadnessOverTime: {
        type: "Line chart of inevitable decline",
        data: sadnessChart,
        ascii: this.asciiCharts.sadnessLine,
        interpretation: "Trending upward (unfortunately)"
      },
      hopeDepletion: {
        type: "Bar chart of diminishing returns",
        data: hopeChart,
        ascii: this.asciiCharts.hopeDepletion,
        interpretation: "Approaching zero asymptotically"
      },
      existentialDread: {
        type: "Pie chart of life's meaninglessness",
        data: [
          { label: "Work stress", value: 35, color: "#1a1a1a" },
          { label: "Existential questions", value: 25, color: "#2d2d2d" },
          { label: "Monday dread", value: 20, color: "#404040" },
          { label: "Coffee withdrawal", value: 15, color: "#595959" },
          { label: "False hope", value: 5, color: "#737373" }
        ],
        ascii: "○ (It's all just a circle of despair)",
        interpretation: "Everything contributes to the void"
      }
    };
  }

  generateSadnessChart(timeframe) {
    const dataPoints = timeframe === 'today' ? 24 : timeframe === 'week' ? 7 : 30;
    const data = [];
    
    for (let i = 0; i < dataPoints; i++) {
      let value = Math.floor(Math.random() * 30) + 70;
      
      // Monday is always worse
      if (timeframe === 'week' && i === 0) {
        value = Math.max(value, 85);
      }
      
      // Morning hours are worse for daily
      if (timeframe === 'today' && i >= 6 && i <= 10) {
        value += Math.floor(Math.random() * 15);
      }
      
      data.push({
        period: i,
        sadnessLevel: Math.min(100, value),
        note: this.getSadnessNote(i, timeframe)
      });
    }
    
    return data;
  }

  generateHopeChart(timeframe) {
    const dataPoints = timeframe === 'today' ? 24 : timeframe === 'week' ? 7 : 30;
    const data = [];
    
    for (let i = 0; i < dataPoints; i++) {
      let value = Math.floor(Math.random() * 25) + 5; // Hope is always low
      
      // Friday has slightly more hope (false hope)
      if (timeframe === 'week' && i === 4) {
        value = Math.min(value + 10, 30);
      }
      
      data.push({
        period: i,
        hopeLevel: value,
        trend: value > 20 ? "Dangerously high" : "Appropriately low",
        reality: "Will be crushed soon"
      });
    }
    
    return data;
  }

  generateTrendAnalysis(timeframe) {
    return {
      sadnessTrend: "Consistently upward (as expected)",
      hopeTrend: "Declining toward realistic levels",
      overallDirection: "Spiraling into the abyss",
      prediction: "More of the same, but worse",
      confidence: "Absolutely certain of disappointment",
      timeToRecovery: "Heat death of the universe",
      recommendedAction: "Embrace the inevitable"
    };
  }

  generateVisualizationInsights() {
    const insights = [
      "Charts confirm what we already knew: everything is terrible",
      "Data visualization makes the despair more aesthetically pleasing",
      "Graphs prove that hope is statistically insignificant",
      "Visual analysis reveals the mathematical precision of misery",
      "Charts show that sadness follows predictable patterns",
      "Data confirms the universe's indifference to human suffering"
    ];
    
    return {
      keyInsight: insights[Math.floor(Math.random() * insights.length)],
      dataQuality: "Depressingly accurate",
      visualClarity: "Crystal clear despair",
      actionability: "Confirms inaction is best action"
    };
  }

  getSadnessNote(index, timeframe) {
    if (timeframe === 'week') {
      const days = ['Monday (obviously)', 'Tuesday blues', 'Wednesday wall', 'Thursday thoughts', 'Friday false hope', 'Saturday sadness', 'Sunday scaries'];
      return days[index] || '';
    }
    
    if (timeframe === 'today') {
      if (index >= 6 && index <= 9) return 'Morning dread';
      if (index >= 12 && index <= 13) return 'Lunch optimism crash';
      if (index >= 17 && index <= 18) return 'Evening existential crisis';
    }
    
    return '';
  }

  getRandomTheme() {
    const themes = Object.keys(this.chartThemes);
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    return this.chartThemes[randomTheme];
  }

  getRandomMood() {
    const moods = [
      "Bleak", "Despondent", "Melancholic", "Existentially challenged",
      "Cosmically insignificant", "Moderately hopeless", "Severely realistic",
      "Appropriately pessimistic", "Functionally depressed", "Optimally sad"
    ];
    return moods[Math.floor(Math.random() * moods.length)];
  }

  getRandomCrisisLevel() {
    const levels = [
      "Ongoing", "Escalating", "Critical", "Maximum", "Beyond measurement",
      "Professionally managed", "Expertly maintained", "Artistically crafted"
    ];
    return levels[Math.floor(Math.random() * levels.length)];
  }
}