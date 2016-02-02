module.exports = function getFortune(str) {
        var fortunes = ["Life is great", "You will have success", "You will get a great job after this bootcamp", "Money will find you", "You will learn coding!"]
        var randomNum = Math.floor(Math.random() * fortunes.length);
        return (fortunes[(randomNum)])
}