class SurveyResponse {
    constructor(userId, answers) {
        this.userId = userId;
        this.answers = {
            name: answers.name,
            favoriteCharacter: answers.favoriteCharacter,
            favoriteMovie: answers.favoriteMovie,
            rating: answers.rating,
            favoriteVillain: answers.favoriteVillain,
            batGadget: answers.batGadget,
            batmanEra: answers.batmanEra,
            batmanQuote: answers.batmanQuote,
        };
        this.timestamp = new Date();
    }
}

module.exports = SurveyResponse;