class SurveyResponse {
    constructor(userId, answers) {
        this.userId = userId;
        this.answers = answers;
        this.timestamp = new Date();
    }
}

module.exports = SurveyResponse;