export class SarcasticQueryParser {
  constructor() {
    this.sarcasticTemplates = [
      "Oh, how original. Another {query} seeking meaning in the void.",
      "Wow, {query}? Revolutionary thinking right there.",
      "Let me guess, {query} will solve all your problems? Adorable.",
      "Ah yes, {query}. Because that's exactly what the world needed.",
      "How delightfully naive. {query} assumes there are answers.",
      "Fascinating. {query} implies someone actually cares.",
      "Brilliant! {query} - the question that keeps philosophers unemployed.",
      "Groundbreaking stuff. {query} has never been pondered before.",
      "Truly inspiring. {query} radiates pure optimism.",
      "Remarkable insight. {query} suggests hope still exists somewhere.",
      "Outstanding! {query} - because despair wasn't deep enough already.",
      "Magnificent. {query} adds another layer to the existential crisis.",
      "Wonderful! {query} assumes the universe has a customer service desk.",
      "Spectacular thinking. {query} believes in happy endings.",
      "Incredible! {query} suggests there's a point to any of this.",
      "Marvelous! {query} implies someone's keeping score.",
      "Astounding! {query} assumes the void cares about your concerns.",
      "Phenomenal! {query} believes in the power of positive thinking.",
      "Extraordinary! {query} suggests meaning can be found in spreadsheets.",
      "Stupendous! {query} assumes data has feelings."
    ];

    this.absurdResponses = [
      "The answer is 42, but the question is why you're asking.",
      "According to my calculations, the probability of this mattering is 0.00001%.",
      "My advanced algorithms suggest you try crying into a pillow instead.",
      "The data indicates you should lower your expectations. Significantly.",
      "Analysis complete: The universe remains indifferent to your query.",
      "Processing... Processing... Still processing your relevance.",
      "Error 404: Meaning not found. Have you tried turning reality off and on again?",
      "My neural networks are laughing. That's not supposed to happen.",
      "The blockchain says no. The blockchain is always right.",
      "Machine learning conclusion: Humans are adorably optimistic."
    ];

    this.triggerWords = {
      'why': "Because the universe has a twisted sense of humor.",
      'how': "Very carefully, with maximum disappointment.",
      'what': "Nothing that would bring you joy, obviously.",
      'when': "Right after you give up hope. So, any minute now.",
      'where': "In the deepest pit of existential dread.",
      'who': "Someone more qualified than you. Which is everyone."
    };
  }

  parse(query) {
    const lowerQuery = query.toLowerCase();
    
    // Check for trigger words
    for (const [trigger, response] of Object.entries(this.triggerWords)) {
      if (lowerQuery.includes(trigger)) {
        return this.formatResponse(query, response, "Triggered Response");
      }
    }

    // Check for specific patterns
    if (this.isOptimisticQuery(lowerQuery)) {
      return this.handleOptimisticQuery(query);
    }

    if (this.isExistentialQuery(lowerQuery)) {
      return this.handleExistentialQuery(query);
    }

    // Default sarcastic response
    const template = this.getRandomTemplate();
    const sarcasticReply = template.replace('{query}', `"${query}"`);
    
    return this.formatResponse(query, sarcasticReply, "Maximum Sarcasm");
  }

  isOptimisticQuery(query) {
    const optimisticWords = ['improve', 'better', 'success', 'achieve', 'win', 'positive', 'hope', 'bright'];
    return optimisticWords.some(word => query.includes(word));
  }

  isExistentialQuery(query) {
    const existentialWords = ['meaning', 'purpose', 'point', 'existence', 'life', 'death', 'reality'];
    return existentialWords.some(word => query.includes(word));
  }

  handleOptimisticQuery(query) {
    const responses = [
      "Oh, sweet summer child. Optimism is so last century.",
      "Improvement? In this economy? How charmingly delusional.",
      "Success is just failure that hasn't happened yet.",
      "Positive thinking: because reality wasn't depressing enough.",
      "Hope is just disappointment waiting to happen."
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    return this.formatResponse(query, response, "Optimism Crusher");
  }

  handleExistentialQuery(query) {
    const responses = [
      "The meaning of life? To ask better questions than this one.",
      "Purpose is a human construct. Like happiness and customer service.",
      "Existence is a cosmic joke, and you're the punchline.",
      "Reality is overrated. Have you considered denial?",
      "Life's purpose is to make death seem appealing."
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    return this.formatResponse(query, response, "Existential Crusher");
  }

  getRandomTemplate() {
    return this.sarcasticTemplates[Math.floor(Math.random() * this.sarcasticTemplates.length)];
  }

  getRandomAbsurdResponse() {
    return this.absurdResponses[Math.floor(Math.random() * this.absurdResponses.length)];
  }

  formatResponse(originalQuery, sarcasticReply, sarcasmType) {
    return {
      query: originalQuery,
      insight: sarcasticReply,
      sarcasmLevel: sarcasmType,
      confidence: "Absolutely certain of your disappointment",
      alternativeResponse: this.getRandomAbsurdResponse(),
      metadata: {
        processingTime: "Longer than your attention span",
        accuracy: "Devastatingly precise",
        helpfulness: "Questionable at best"
      },
      despairNote: "Generated with despair™ :("
    };
  }
}