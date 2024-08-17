const questionBank = [
    { id: 1, difficulty: 1, question: "1+1=?", options: ["1", "2", "3", "4"], answer: 1 },
    { id: 2, difficulty: 1, question: "2+2=?", options: ["2", "3", "4", "5"], answer: 2 },
    { id: 3, difficulty: 1, question: "3-1=?", options: ["1", "2", "3", "4"], answer: 2 },
    { id: 4, difficulty: 1, question: "5-3=?", options: ["1", "2", "3", "4"], answer: 2 },
    { id: 5, difficulty: 2, question: "2+3=?", options: ["3", "4", "5", "6"], answer: 3 },
    { id: 6, difficulty: 2, question: "7-2=?", options: ["4", "5", "6", "7"], answer: 2 },
    { id: 7, difficulty: 2, question: "6/2=?", options: ["2", "3", "4", "5"], answer: 2 },
    { id: 8, difficulty: 2, question: "9-4=?", options: ["3", "4", "5", "6"], answer: 2 },
    { id: 9, difficulty: 3, question: "3*3=?", options: ["6", "7", "8", "9"], answer: 3 },
    { id: 10, difficulty: 3, question: "5*4=?", options: ["15", "20", "25", "30"], answer: 2 },
    { id: 11, difficulty: 3, question: "8/2=?", options: ["2", "3", "4", "5"], answer: 3 },
    { id: 12, difficulty: 3, question: "12-4=?", options: ["6", "7", "8", "9"], answer: 3 },
    { id: 13, difficulty: 4, question: "6*6=?", options: ["30", "36", "42", "48"], answer: 2 },
    { id: 14, difficulty: 4, question: "15/3=?", options: ["3", "4", "5", "6"], answer: 3 },
    { id: 15, difficulty: 4, question: "9*4=?", options: ["32", "36", "40", "44"], answer: 2 },
    { id: 16, difficulty: 4, question: "20/5=?", options: ["3", "4", "5", "6"], answer: 3 },
    { id: 17, difficulty: 5, question: "12*12=?", options: ["144", "154", "164", "174"], answer: 1 },
    { id: 18, difficulty: 5, question: "25-10=?", options: ["10", "15", "20", "25"], answer: 2 },
    { id: 19, difficulty: 5, question: "14+9=?", options: ["20", "21", "22", "23"], answer: 2 },
    { id: 20, difficulty: 5, question: "30/6=?", options: ["4", "5", "6", "7"], answer: 2 },
    { id: 21, difficulty: 6, question: "13*13=?", options: ["156", "169", "182", "195"], answer: 2 },
    { id: 22, difficulty: 6, question: "144/12=?", options: ["10", "11", "12", "13"], answer: 3 },
    { id: 23, difficulty: 6, question: "15*15=?", options: ["200", "210", "225", "240"], answer: 3 },
    { id: 24, difficulty: 6, question: "20*11=?", options: ["210", "220", "230", "240"], answer: 2 },
    { id: 25, difficulty: 1, question: "7-2=?", options: ["4", "5", "6", "7"], answer: 2 },
    { id: 26, difficulty: 1, question: "4+1=?", options: ["4", "5", "6", "7"], answer: 2 },
    { id: 27, difficulty: 1, question: "8-3=?", options: ["4", "5", "6", "7"], answer: 2 },
    { id: 28, difficulty: 1, question: "3+1=?", options: ["3", "4", "5", "6"], answer: 2 },
    { id: 29, difficulty: 2, question: "8-3=?", options: ["5", "6", "7", "8"], answer: 1 },
    { id: 30, difficulty: 2, question: "4+4=?", options: ["7", "8", "9", "10"], answer: 2 },
    { id: 31, difficulty: 2, question: "6/3=?", options: ["1", "2", "3", "4"], answer: 3 },
    { id: 32, difficulty: 2, question: "5+2=?", options: ["6", "7", "8", "9"], answer: 2 },
    { id: 33, difficulty: 3, question: "4*5=?", options: ["15", "20", "25", "30"], answer: 2 },
    { id: 34, difficulty: 3, question: "7+8=?", options: ["14", "15", "16", "17"], answer: 3 },
    { id: 35, difficulty: 3, question: "9-4=?", options: ["4", "5", "6", "7"], answer: 3 },
    { id: 36, difficulty: 3, question: "12/3=?", options: ["3", "4", "5", "6"], answer: 4 },
    { id: 37, difficulty: 4, question: "8*7=?", options: ["54", "56", "58", "60"], answer: 2 },
    { id: 38, difficulty: 4, question: "21-9=?", options: ["10", "11", "12", "13"], answer: 3 },
    { id: 39, difficulty: 4, question: "24/6=?", options: ["3", "4", "5", "6"], answer: 2 },
    { id: 40, difficulty: 4, question: "18+15=?", options: ["32", "33", "34", "35"], answer: 2 },
    { id: 41, difficulty: 5, question: "48/8=?", options: ["5", "6", "7", "8"], answer: 2 },
    { id: 42, difficulty: 5, question: "12*11=?", options: ["130", "132", "134", "136"], answer: 2 },
    { id: 43, difficulty: 5, question: "100-25=?", options: ["70", "75", "80", "85"], answer: 2 },
    { id: 44, difficulty: 5, question: "13+27=?", options: ["39", "40", "41", "42"], answer: 1 },
    { id: 45, difficulty: 6, question: "16*14=?", options: ["216", "224", "232", "240"], answer: 2 },
    { id: 46, difficulty: 6, question: "72/8=?", options: ["8", "9", "10", "11"], answer: 2 },
    { id: 47, difficulty: 6, question: "30*12=?", options: ["360", "370", "380", "390"], answer: 1 },
    { id: 48, difficulty: 6, question: "45+56=?", options: ["99", "100", "101", "102"], answer: 1 },
    { id: 49, difficulty: 6, question: "8*9=?", options: ["71", "72", "73", "74"], answer: 2 },
    { id: 50, difficulty: 6, question: "35*12=?", options: ["410", "420", "430", "440"], answer: 2 }
];

let currentDifficulty = 3;
let answeredQuestions = [];
let currentQuestionIndex = 0;
let currentQuestion = null;

function startTest() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('test-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= 10) {
        showResults();
        return;
    }

    currentQuestion = selectQuestion();
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = currentQuestion.question;

    let optionsHtml = '';
    currentQuestion.options.forEach((option, index) => {
        optionsHtml += `<button onclick="answerQuestion(${index})">${option}</button>`;
    });
    document.getElementById('options').innerHTML = optionsHtml;

    // 更新當前難度顯示
    document.getElementById('current-difficulty').textContent = currentDifficulty;
}

function selectQuestion() {
    let availableQuestions = questionBank.filter(q => q.difficulty === currentDifficulty && !answeredQuestions.some(a => a.id === q.id));
    while (availableQuestions.length === 0) {
        currentDifficulty = Math.max(1, currentDifficulty - 1); // 降低難度，直到找到題目
        availableQuestions = questionBank.filter(q => q.difficulty === currentDifficulty && !answeredQuestions.some(a => a.id === q.id));
        if (availableQuestions.length === 0 && currentDifficulty === 1) break; // 如果難度已降到1且沒有題目，則退出
    }
    let question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    return question;
}

function answerQuestion(answerIndex) {
    let isCorrect = answerIndex === currentQuestion.answer;

    // 儲存當前難度和答題結果
    answeredQuestions.push({ id: currentQuestion.id, isCorrect, initialDifficulty: currentQuestion.difficulty });

    if (isCorrect) {
        currentQuestion.difficulty = Math.max(1, currentQuestion.difficulty - 1);
        currentDifficulty = Math.min(5, currentDifficulty + 1);
    } else {
        currentQuestion.difficulty = Math.min(6, currentQuestion.difficulty + 1);
        currentDifficulty = Math.max(1, currentDifficulty - 1);
    }

    // 更新問題的最終難度
    answeredQuestions[answeredQuestions.length - 1].finalDifficulty = currentQuestion.difficulty;

    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.getElementById('test-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-difficulty').textContent = currentDifficulty;

    let reviewHtml = '';
    let difficultyChangesHtml = '<h3>題目難度變化</h3>';
    answeredQuestions.forEach((questionData, index) => {
        let question = questionBank.find(q => q.id === questionData.id);
        let resultText = questionData.isCorrect ? "正確" : "錯誤";
        reviewHtml += `<p onclick="showQuestionDetails(${index})">問題 ${index + 1} - 題目ID: ${question.id} - 最終難度: ${questionData.finalDifficulty} - ${resultText}</p>`;

        difficultyChangesHtml += `<p>問題 ${index + 1} (ID: ${question.id}) - 初始難度: ${questionData.initialDifficulty} - 最終難度: ${questionData.finalDifficulty}</p>`;
    });
    document.getElementById('question-review').innerHTML = reviewHtml;
    document.getElementById('difficulty-changes').innerHTML = difficultyChangesHtml;
}

function showQuestionDetails(index) {
    let questionData = answeredQuestions[index];
    let question = questionBank.find(q => q.id === questionData.id);
    let correctAnswer = question.options[question.answer];
    let userAnswer = questionData.isCorrect ? correctAnswer : 'N/A';
    alert(`問題: ${question.question}\n你的答案: ${userAnswer}\n正確答案: ${correctAnswer}\n結果: ${questionData.isCorrect ? "正確" : "錯誤"}\n當前難度: ${questionData.finalDifficulty}`);
}

function restartTest() {
    currentDifficulty = 3;
    answeredQuestions = [];
    currentQuestionIndex = 0;
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

function resetQuestionDifficulties() {
    // 建立一個問題 ID 到初始難度的映射
    let difficultyMap = new Map(questionBank1.map(q => [q.id, q.difficulty]));

    // 遍歷 questionBank，更新每個問題的難度
    questionBank.forEach(q => {
        if (difficultyMap.has(q.id)) {
            q.difficulty = difficultyMap.get(q.id); // 將難度設置為初始值
        }
    });

    // 更新當前難度為 3（可以根據需要設置）
    currentDifficulty = 3;

    // 顯示重置成功的提示
    alert('所有題目難度已重置！');
}

// 初始化
document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('restart-btn').addEventListener('click', restartTest);
document.getElementById('reset-difficulty-btn').addEventListener('click', resetQuestionDifficulties);
