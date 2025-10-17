export class EmotionEngine {
  constructor() {
    this.sadnessKeywords = [
      'sad', 'depressed', 'miserable', 'hopeless', 'despair', 'melancholy',
      'gloomy', 'dejected', 'despondent', 'forlorn', 'grief', 'sorrow',
      'anguish', 'heartbroken', 'devastated', 'crushed', 'defeated',
      'monday', 'work', 'meeting', 'deadline', 'taxes', 'bills'
    ];

    this.existentialKeywords = [
      'meaning', 'purpose', 'why', 'existence', 'life', 'death', 'void',
      'meaningless', 'pointless', 'futile', 'absurd', 'nihilism',
      'what is the point', 'why do we exist', 'is there meaning'
    ];

    this.hopeKeywords = [
      'hope', 'optimistic', 'bright', 'future', 'better', 'improve',
      'positive', 'happy', 'joy', 'excited', 'wonderful', 'amazing'
    ];
  }

  analyze(text) {
    const lowerText = text.toLowerCase();
    
    // Count keyword matches
    const sadnessMatches = this.countMatches(lowerText, this.sadnessKeywords);
    const existentialMatches = this.countMatches(lowerText, this.existentialKeywords);
    const hopeMatches = this.countMatches(lowerText, this.hopeKeywords);

    // Calculate base sadness index
    let sadnessIndex = 50; // Base melancholy
    sadnessIndex += sadnessMatches * 15;
    sadnessIndex += existentialMatches * 20;
    sadnessIndex -= hopeMatches * 10; // Hope reduces sadness (unfortunately)

    // Add random variation for "scientific accuracy"
    const randomVariation = (Math.random() - 0.5) * 20;
    sadnessIndex += randomVariation;

    // Clamp between 0-100
    sadnessIndex = Math.max(0, Math.min(100, sadnessIndex));

    // Determine despair level
    const despairLevel = this.getDespairLevel(sadnessIndex);
    const comment = this.generateComment(sadnessIndex, sadnessMatches, existentialMatches);

    return {
      sadnessIndex: Math.round(sadnessIndex),
      despairLevel,
      keywordMatches: {
        sadness: sadnessMatches,
        existential: existentialMatches,
        hope: hopeMatches
      },
      analysis: {
        textLength: text.length,
        melancholyDensity: (sadnessMatches + existentialMatches) / text.split(' ').length,
        hopeDeficiency: hopeMatches === 0 ? "Critical" : "Manageable"
      },
      comment,
      despairNote: "Generated with despair™ :("
    };
  }

  countMatches(text, keywords) {
    return keywords.reduce((count, keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      const matches = text.match(regex);
      return count + (matches ? matches.length : 0);
    }, 0);
  }

  getDespairLevel(sadnessIndex) {
    if (sadnessIndex >= 90) return "Existential Crisis";
    if (sadnessIndex >= 75) return "Severe Melancholy";
    if (sadnessIndex >= 60) return "Moderate Despair";
    if (sadnessIndex >= 40) return "Mild Gloom";
    if (sadnessIndex >= 20) return "Barely Functional";
    return "Suspiciously Optimistic";
  }

  generateComment(sadnessIndex, sadnessMatches, existentialMatches) {
    const comments = [
      "Your text radiates existential dread. Impressive.",
      "I detect profound meaninglessness in your words.",
      "The void stares back through your sentences.",
      "Your despair is palpable and scientifically measurable.",
      "Even my algorithms feel sad reading this.",
      "This text could cure insomnia through pure melancholy.",
      "I've seen happier funeral eulogies.",
      "Your words carry the weight of a thousand Mondays."
    ];

    if (existentialMatches > 2) {
      return "Deep philosophical despair detected. Nietzsche would be proud.";
    }
    
    if (sadnessMatches > 3) {
      return "Maximum sadness achieved. Congratulations, I guess.";
    }

    if (sadnessIndex < 30) {
      return "Suspiciously cheerful. Are you feeling alright?";
    }

    return comments[Math.floor(Math.random() * comments.length)];
  }
}