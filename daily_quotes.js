const dailyQuotes = [
    "I don't believe in taking right decisions. I take decisions and then make them right. — Ratan Tata",
    "Successful people are simply those with successful habits. — Brian Tracy",
    "Desire is a contract you make with yourself to be unhappy until you get what you want. — Naval Ravikant",
    "Small daily improvements create stunning results. — Robin Sharma",
    "Think big, think fast, think ahead. Ideas are no one's monopoly. — Dhirubhai Ambani",
    "You do not rise to the level of your goals. You fall to the level of your systems. — James Clear",
    "Happiness is not a destination, it is a direction. It is not tomorrow, it is today. — Gaur Gopal Das",
    "The biggest risk in life is not taking any risk. The only way to fail is to not try. — Ankur Warikoo",
    "People don’t buy what you do, they buy why you do it. — Simon Sinek"
];

function updateDailyQuote() {
    let idx = parseInt(localStorage.getItem('qIdx') || '0', 10);
    const quoteElement = document.getElementById('daily-quote-text');
    if (quoteElement) {
        quoteElement.innerHTML = `&ldquo; ${dailyQuotes[idx]} &rdquo;`;
    }
    localStorage.setItem('qIdx', ((idx + 1) % dailyQuotes.length).toString());
}

// Update the quote when the page loads
document.addEventListener('DOMContentLoaded', updateDailyQuote);
