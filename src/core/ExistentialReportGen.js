export class ExistentialReportGen {
  constructor() {
    this.reportTemplates = {
      weekly: {
        title: "Weekly Existential Crisis Report",
        subtitle: "Because suffering needs documentation"
      },
      monthly: {
        title: "Monthly Despair Analytics",
        subtitle: "Tracking the decline of hope since 1970"
      },
      yearly: {
        title: "Annual Meaninglessness Assessment", 
        subtitle: "365 days of documented futility"
      },
      eternal: {
        title: "Eternal Void Analysis",
        subtitle: "From the heat death of the universe to now"
      }
    };

    this.peakSadnessTimes = [
      "Monday 09:00", "Sunday 23:59", "Friday 17:01", "Wednesday 14:30",
      "Tuesday 11:45", "Thursday 16:20", "Saturday 06:00", "Monday 08:59",
      "Any time ending in :00", "Lunch break", "Right after coffee runs out"
    ];

    this.existentialComments = [
      "Existence continues. Barely.",
      "Another week of documented meaninglessness.",
      "The void stared back. It was unimpressed.",
      "Hope levels remain critically low.",
      "Productivity is an illusion. This report proves it.",
      "Time marches on, indifferent to our suffering.",
      "The universe's apathy remains consistent.",
      "Another period of cosmic insignificance documented.",
      "Despair levels within normal parameters.",
      "The futility continues as scheduled."
    ];

    this.trendAnalysis = [
      "Steadily declining into the abyss",
      "Accelerating toward maximum despair",
      "Maintaining consistent hopelessness",
      "Trending toward existential crisis",
      "Following predictable patterns of doom",
      "Spiraling with mathematical precision",
      "Declining faster than expected (impressive)",
      "Stagnating in the depths of melancholy"
    ];
  }

  generate(period = 'weekly') {
    const template = this.reportTemplates[period] || this.reportTemplates.weekly;
    const currentDate = new Date();
    const reportId = this.generateReportId();
    
    return {
      reportId,
      metadata: {
        title: template.title,
        subtitle: template.subtitle,
        period: period,
        generatedAt: currentDate.toISOString(),
        reportWeek: this.getWeekNumber(currentDate),
        cosmicInsignificance: "Maximum"
      },
      metrics: this.generateMetrics(period),
      trends: this.generateTrends(period),
      insights: this.generateInsights(period),
      recommendations: this.generateRecommendations(),
      charts: this.generateChartData(period),
      footer: {
        disclaimer: "Results may vary. Void where prohibited.",
        accuracy: "Scientifically meaningless",
        despairNote: "Generated with despair™ :("
      }
    };
  }

  generateMetrics(period) {
    const baseMetrics = {
      averageSadness: Math.floor(Math.random() * 30) + 70, // 70-100
      peakSadness: this.getRandomPeakTime(),
      hopeDepletion: `${Math.floor(Math.random() * 20) + 80}%`, // 80-100%
      existentialCrises: Math.floor(Math.random() * 15) + 5,
      meaningfulMoments: Math.floor(Math.random() * 3), // 0-2 (rare)
      coffeeToTearsRatio: (Math.random() * 5 + 1).toFixed(2),
      mondayDreadIndex: Math.floor(Math.random() * 20) + 80,
      productivityIllusion: `${Math.floor(Math.random() * 30) + 10}%`
    };

    // Adjust metrics based on period
    if (period === 'monthly') {
      baseMetrics.existentialCrises *= 4;
      baseMetrics.meaningfulMoments = Math.floor(baseMetrics.meaningfulMoments * 0.5);
    } else if (period === 'yearly') {
      baseMetrics.existentialCrises *= 52;
      baseMetrics.meaningfulMoments *= 12;
      baseMetrics.averageSadness += 5; // Yearly reports are sadder
    } else if (period === 'eternal') {
      baseMetrics.existentialCrises = "∞";
      baseMetrics.meaningfulMoments = 0;
      baseMetrics.averageSadness = 100;
      baseMetrics.hopeDepletion = "Complete";
    }

    return baseMetrics;
  }

  generateTrends(period) {
    return {
      despairTrajectory: this.getRandomTrend(),
      hopeDeclineRate: `${(Math.random() * 15 + 5).toFixed(1)}% per day`,
      meaningSearchAttempts: "Futile",
      realityAcceptance: `${Math.floor(Math.random() * 40) + 20}%`,
      voidStaringFrequency: `${Math.floor(Math.random() * 50) + 10} times per ${period}`,
      existentialQuestionRate: `${(Math.random() * 10 + 2).toFixed(1)} per hour`
    };
  }

  generateInsights(period) {
    const insights = [
      "Mondays continue to be statistically more depressing than other days.",
      "Coffee consumption correlates directly with temporary hope spikes.",
      "Productivity metrics suggest most work is cosmically meaningless.",
      "Weekend happiness is a statistical anomaly requiring further study.",
      "The void gazed back with measurable indifference.",
      "Hope levels remain below sustainable thresholds.",
      "Existential dread shows consistent year-over-year growth.",
      "Meaning-seeking behavior continues despite futility evidence."
    ];

    return {
      keyFindings: insights.slice(0, 3),
      surprisingData: "Nothing. Everything was as depressing as predicted.",
      actionableInsights: "Lower your expectations. Significantly.",
      comment: this.getRandomComment()
    };
  }

  generateRecommendations() {
    return [
      "Consider embracing the meaninglessness of existence",
      "Reduce hope levels to match reality",
      "Increase coffee intake to maintain basic functionality",
      "Practice staring into the void (builds character)",
      "Accept that Mondays are a cosmic punishment",
      "Lower expectations to subterranean levels",
      "Embrace the futility of productivity metrics",
      "Consider that this report itself is meaningless"
    ];
  }

  generateChartData(period) {
    const dataPoints = period === 'weekly' ? 7 : period === 'monthly' ? 30 : 365;
    const sadnessData = [];
    const hopeData = [];

    for (let i = 0; i < Math.min(dataPoints, 10); i++) {
      sadnessData.push({
        day: i + 1,
        value: Math.floor(Math.random() * 30) + 70,
        note: i === 0 ? "Monday (obviously)" : ""
      });
      
      hopeData.push({
        day: i + 1,
        value: Math.floor(Math.random() * 20) + 5, // Hope is always low
        trend: "Declining"
      });
    }

    return {
      sadnessOverTime: sadnessData,
      hopeDepletion: hopeData,
      chartType: "Depressingly accurate line charts",
      visualization: "ASCII art of despair (coming soon)"
    };
  }

  generateReportId() {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `DESPAIR-${timestamp}-${randomSuffix}`;
  }

  getWeekNumber(date) {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date - start;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return `${date.getFullYear()}-W${Math.ceil(diff / oneWeek)}`;
  }

  getRandomPeakTime() {
    return this.peakSadnessTimes[Math.floor(Math.random() * this.peakSadnessTimes.length)];
  }

  getRandomComment() {
    return this.existentialComments[Math.floor(Math.random() * this.existentialComments.length)];
  }

  getRandomTrend() {
    return this.trendAnalysis[Math.floor(Math.random() * this.trendAnalysis.length)];
  }
}