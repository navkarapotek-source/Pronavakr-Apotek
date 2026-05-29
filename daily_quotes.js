const dailyQuotes = [
    "Build something you're proud of. The money will follow..",
    "Your current situation is not your final destination.",
    "The best way to predict the future is to create it.",
    "If you don't build your dream, someone else will hire you to help them build theirs. — Dhirubhai Ambani",
    "Chase the vision, not the money; the money will end up following you. — Tony Hsieh",
    "Don't worry about failures, worry about the chances you miss when you don't even try. — Jack Canfield",
    "You don't build a business, you build people, and then people build the business. — Zig Ziglar",
    "The market doesn't care about your mood; it only rewards your consistency, your data, and the value you bring.",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Opportunities don't happen. You create them. — Chris Grosser",
    "Price is what you pay. Value is what you get. — Warren Buffett",
    "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better. — Peter Dinklage",
    "You have to dream before your dreams can come true. — (Missile Man) Dr. APJ Abdul Kalam"
];

function updateDailyQuote() {
    // Choose a random quote each load
    const quoteIndex = Math.floor(Math.random() * dailyQuotes.length);
    const quoteElement = document.getElementById('daily-quote-text');
    if (quoteElement) {
        quoteElement.innerHTML = `&ldquo; ${dailyQuotes[quoteIndex]} &rdquo;`;
    }
}

// Update the quote when the page loads
document.addEventListener('DOMContentLoaded', updateDailyQuote);
