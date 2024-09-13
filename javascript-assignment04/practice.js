// assignment 04

// problem 01

    function calculateTax(income, expenses) { 
    if (typeof income !== 'number' || typeof expenses !== 'number' || 
        income < 0 || expenses < 0 ||income >=expenses ) {
        return "Invalid Input";
    }
    const savedMoney = income - expenses;
    const tax = savedMoney * 0.20;
    return tax;
    
}
calculateTax(15000,5000)


// problem 02
    function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
        return "Invalid email";
    }
    let parts = email.split('@');
    if (parts.length === 2) {
        let username = parts[0];
        let domainName = parts[1];
        return `${username} sent you an email from ${domainName}`;
    } 
    else {
        return "Invalid email";
    }
}


// problem 03
    function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    let hasDigits = /\d/.test(name);
    return hasDigits;
}

// problem 04

    function calculateFinalScore(obj) {
       if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (testScore > 50 || schoolGrade > 30) {
        return "Invalid Input";
    }
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;
}

// problem 05
    function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid input";
    }
    if (serialNumber <= waitingTimes.length) {
        return "Invalid input";
    }
    let sum = waitingTimes.reduce((acc, time) => acc + time, 0);
    let averageTime = Math.round(sum / waitingTimes.length);
    let remainingPeople = serialNumber - waitingTimes.length - 1;
    let waitingTime = remainingPeople * averageTime;
    return waitingTime;
}







