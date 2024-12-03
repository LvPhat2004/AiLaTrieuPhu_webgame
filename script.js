const questions = [
    // Câu hỏi dễ (độ khó 1)
    {
        question: "Thủ đô của Việt Nam là gì?",
        answers: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Con vật nào sau đây không phải là động vật có vú?",
        answers: ["Cá sấu", "Khỉ", "Voi", "Hổ"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đâu là tên một bãi biển nổi tiếng ở Đà Nẵng?",
        answers: ["Mỹ Khê", "Cát Bà", "Đồ Sơn", "Sầm Sơn"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Việt Nam có bao nhiêu tỉnh thành?",
        answers: ["63", "64", "65", "66"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Tác giả của truyện Kiều là ai?",
        answers: ["Nguyễn Du", "Hồ Xuân Hương", "Nguyễn Trãi", "Nguyễn Bỉnh Khiêm"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Loài hoa nào là quốc hoa của Việt Nam?",
        answers: ["Hoa Sen", "Hoa Mai", "Hoa Đào", "Hoa Hồng"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đâu là món ăn truyền thống của Việt Nam trong ngày Tết?",
        answers: ["Bánh chưng", "Pizza", "Sushi", "Hamburger"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Quốc kỳ Việt Nam có màu gì?",
        answers: ["Đỏ sao vàng", "Vàng sao đỏ", "Xanh sao vàng", "Đỏ sao trắng"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Dân tộc nào có dân số đông nhất Việt Nam?",
        answers: ["Kinh", "Tày", "Thái", "Mường"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Sông nào dài nhất Việt Nam?",
        answers: ["Sông Mê Kông", "Sông Hồng", "Sông Đà", "Sông Lô"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đâu là món ăn nổi tiếng của Huế?",
        answers: ["Bún bò Huế", "Phở", "Bún chả", "Mì Quảng"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Việt Nam có chung đường biên giới với bao nhiêu quốc gia?",
        answers: ["3", "4", "5", "6"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đâu là món ăn đặc trưng của Hà Nội?",
        answers: ["Phở", "Bún riêu", "Bún bò", "Mì Quảng"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Tết Trung Thu thường diễn ra vào tháng mấy âm lịch?",
        answers: ["Tháng 8", "Tháng 7", "Tháng 9", "Tháng 6"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Quốc hoa của Nhật Bản là gì?",
        answers: ["Hoa Anh Đào", "Hoa Cúc", "Hoa Sen", "Hoa Tulip"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đâu là loại trái cây đặc sản của Đồng Tháp?",
        answers: ["Xoài", "Sầu riêng", "Chôm chôm", "Măng cụt"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đội tuyển bóng đá nào đã vô địch World Cup 2022?",
        answers: ["Argentina", "Pháp", "Brazil", "Đức"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đội tuyển nào đã vô địch World Cup nhiều lần nhất?",
        answers: ["Brazil", "Đức", "Italy", "Argentina"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Cầu thủ nào đã giành nhiều Quả Bóng Vàng nhất?",
        answers: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Giải VĐQG nào được coi là hấp dẫn nhất thế giới?",
        answers: ["Premier League", "La Liga", "Serie A", "Bundesliga"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "CLB nào vô địch Champions League nhiều nhất?",
        answers: ["Real Madrid", "AC Milan", "Bayern Munich", "Liverpool"],
        correct: 0,
        difficulty: 1
    },
    {
        question: "Đội tuyển Việt Nam đã vô địch AFF Cup bao nhiêu lần?",
        answers: ["2 lần", "3 lần", "1 lần", "4 lần"],
        correct: 0,
        difficulty: 1
    },

    // Câu hỏi trung bình (độ khó 2)
    {
        question: "World Cup đầu tiên được tổ chức ở quốc gia nào?",
        answers: ["Uruguay", "Brazil", "Pháp", "Ý"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Ai là cầu thủ ghi nhiều bàn thắng nhất trong lịch sử World Cup?",
        answers: ["Miroslav Klose", "Ronaldo", "Pele", "Just Fontaine"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Đội bóng nào đã vô địch Premier League mùa 2015/16 một cách bất ngờ?",
        answers: ["Leicester City", "Manchester City", "Chelsea", "Manchester United"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Cầu thủ nào ghi bàn nhiều nhất lịch sử Champions League?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raul"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Đội tuyển nào vô địch EURO 1992 dù không được dự giải từ đầu?",
        answers: ["Đan Mạch", "Hà Lan", "Đức", "Pháp"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Đội tuyển nào đã thắng trận với tỷ số cách biệt lớn nhất trong lịch sử World Cup?",
        answers: ["Hungary", "Đức", "Brazil", "Tây Ban Nha"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Cầu thủ nào là người duy nhất vô địch World Cup cả với tư cách cầu thủ và HLV?",
        answers: ["Franz Beckenbauer", "Zinedine Zidane", "Diego Maradona", "Johan Cruyff"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Năm nào diễn ra trận đấu được gọi là 'Thảm họa Maracana'?",
        answers: ["1950", "1958", "1962", "1970"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "Ai là cầu thủ trẻ nhất từng ghi bàn trong một trận chung kết World Cup?",
        answers: ["Pele", "Kylian Mbappe", "Michael Owen", "Diego Maradona"],
        correct: 0,
        difficulty: 2
    },
    {
        question: "CLB nào là đội đầu tiên vô địch cả ba giải đấu châu Âu (C1, C2, C3)?",
        answers: ["Juventus", "Bayern Munich", "Ajax", "Barcelona"],
        correct: 0,
        difficulty: 2
    },

    // Câu hỏi khó (độ khó 3)
    {
        question: "Đâu là nguyên lý thứ hai của nhiệt động lực học?",
        answers: ["Entropy luôn tăng", "Năng lượng bảo toàn", "Áp suất tỷ lệ nghịch với thể tích", "Nhiệt độ tỷ lệ thuận với áp suất"],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Phương trình nào mô tả sự phân rã phóng xạ?",
        answers: ["N = N₀e^(-λt)", "E = mc²", "F = ma", "PV = nRT"],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Đâu là đơn vị đo cường độ ánh sáng?",
        answers: ["Candela", "Lumen", "Lux", "Watt"],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Hiện tượng nào xảy ra khi ánh sáng đi qua hai khe Young?",
        answers: ["Giao thoa", "Khúc xạ", "Phản xạ", "Tán sắc"],
        correct: 0,
        difficulty: 3
    },
    {
        question: "Đâu là tên của phương trình mô tả chuyển động của sóng?",
        answers: ["Wave equation", "Schrödinger equation", "Maxwell equation", "Boltzmann equation"],
        correct: 0,
        difficulty: 3
    }
];

let currentQuestion = 0;
let currentMoney = 0;
const moneyLevels = [
    200000, 400000, 600000, 1000000, 2000000,
    3000000, 6000000, 10000000, 14000000, 22000000,
    30000000, 40000000, 60000000, 85000000, 150000000
];

// Thêm biến để lưu trữ các modal
let alertModal, audienceModal, callModal, phoneModal;

// Khởi tạo các modal khi trang load
document.addEventListener('DOMContentLoaded', function() {
    alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
    audienceModal = new bootstrap.Modal(document.getElementById('audienceModal'));
    callModal = new bootstrap.Modal(document.getElementById('callModal'));
    phoneModal = new bootstrap.Modal(document.getElementById('phoneModal'));
    initGame();
});

// Hàm hiển thị thông báo
function showAlert(title, message) {
    document.getElementById('alertTitle').textContent = title;
    document.getElementById('alertMessage').textContent = message;
    alertModal.show();
}

// Xáo trộn câu hỏi theo độ khó
function shuffleQuestions() {
    // Chia câu hỏi theo độ khó
    const easyQuestions = questions.filter(q => q.difficulty === 1);
    const mediumQuestions = questions.filter(q => q.difficulty === 2);
    const hardQuestions = questions.filter(q => q.difficulty === 3);

    // Xáo trộn từng mảng
    shuffleArray(easyQuestions);
    shuffleArray(mediumQuestions);
    shuffleArray(hardQuestions);

    // Ghép lại theo thứ tự độ khó
    questions.length = 0; // Xóa mảng cũ
    questions.push(...easyQuestions.slice(0, 5));
    questions.push(...mediumQuestions.slice(0, 5));
    questions.push(...hardQuestions.slice(0, 5));
}

// Hàm xáo trộn mảng
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Khởi tạo game
function initGame() {
    currentQuestion = 0;
    currentMoney = 0;
    enableAllHelps();
    shuffleQuestions();
    
    // Kiểm tra số lượng câu hỏi
    if (questions.length === 0) {
        showAlert('Lỗi', 'Không có câu hỏi nào trong kho câu hỏi!');
        return;
    }
    
    // Hiển thị câu hỏi đầu tiên
    const question = questions[currentQuestion];
    document.querySelector('.question-number').textContent = `Câu hỏi số ${currentQuestion + 1}`;
    document.querySelector('.question-text').textContent = question.question;
    
    // Hiển thị các đáp án
    const answers = document.querySelectorAll('.answer-btn');
    answers.forEach((answer, index) => {
        const answerText = answer.querySelector('.answer-text');
        if (answerText) {
            answerText.textContent = question.answers[index];
        }
        answer.classList.remove('correct', 'wrong');
        answer.disabled = false;
        answer.style.visibility = 'visible';
    });

    // Cập nhật bảng tiền
    updateMoneyBoard();
}

// Cập nhật hiển thị câu hỏi
function updateQuestion() {
    if (currentQuestion >= questions.length) {
        showAlert('Chúc mừng', 'Bạn đã hoàn thành tất cả câu hỏi!');
        return;
    }

    const question = questions[currentQuestion];
    document.querySelector('.question-number').textContent = `Câu hỏi số ${currentQuestion + 1}`;
    document.querySelector('.question-text').textContent = question.question;
    
    const answers = document.querySelectorAll('.answer-btn');
    answers.forEach((answer, index) => {
        const answerText = answer.querySelector('.answer-text');
        if (answerText) {
            answerText.textContent = question.answers[index];
        }
        answer.classList.remove('correct', 'wrong');
        answer.disabled = false;
        answer.style.visibility = 'visible';
    });

    // Cập nhật bảng tiền
    updateMoneyBoard();
}

// Cập nhật bảng tiền thưởng
function updateMoneyBoard() {
    const moneyItems = document.querySelectorAll('.money-item');
    moneyItems.forEach((item, index) => {
        item.classList.remove('active');
        if (14 - index === currentQuestion) {
            item.classList.add('active');
        }
    });
}

// Xử lý khi chọn đáp án
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const answers = document.querySelectorAll('.answer-btn');
    
    answers.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        answers[selectedIndex].classList.add('correct');
        currentMoney = moneyLevels[currentQuestion];
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                updateQuestion();
            } else {
                showAlert('Chúc Mừng', 
                    `Bạn đã chiến thắng và nhận được ${formatMoney(currentMoney)} VND`);
                initGame();
            }
        }, 2000);
    } else {
        answers[selectedIndex].classList.add('wrong');
        answers[question.correct].classList.add('correct');
        
        setTimeout(() => {
            const guaranteedMoney = getGuaranteedMoney();
            showAlert('Game Over', 
                `Bạn ra về với ${formatMoney(guaranteedMoney)} VND`);
            initGame();
        }, 2000);
    }
}

// Lấy số tiền đảm bảo
function getGuaranteedMoney() {
    if (currentQuestion >= 10) return moneyLevels[9]; // 22.000.000
    if (currentQuestion >= 5) return moneyLevels[4];  // 2.000.000
    return 0;
}

// Format số tiền
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN');
}

// Xử lý quyền trợ giúp 50:50
function help5050() {
    const question = questions[currentQuestion];
    const answers = document.querySelectorAll('.answer-btn');
    let wrongAnswers = [];
    
    // Tìm các đáp án sai
    answers.forEach((answer, index) => {
        if (index !== question.correct) {
            wrongAnswers.push(index);
        }
    });
    
    // Xáo trộn và chọn 2 đáp án sai để ẩn
    shuffleArray(wrongAnswers);
    wrongAnswers.slice(0, 2).forEach(index => {
        answers[index].style.visibility = 'hidden';
    });
    
    document.getElementById('5050').disabled = true;
}

// Xử lý quyền trợ giúp khán giả
function helpAudience() {
    const question = questions[currentQuestion];
    let percentages = [];
    
    // Hiển thị câu hỏi và đáp án trong modal
    document.getElementById('audienceQuestion').textContent = question.question;
    const answersContainer = document.getElementById('audienceAnswers');
    answersContainer.innerHTML = ''; // Xóa nội dung cũ
    
    const labels = ['A', 'B', 'C', 'D'];
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'audience-answer';
        answerDiv.innerHTML = `<span>${labels[index]}</span>${answer}`;
        answersContainer.appendChild(answerDiv);
    });

    // Tính toán phần trăm cho các đáp án
    for (let i = 0; i < 4; i++) {
        if (i === question.correct) {
            percentages[i] = Math.floor(Math.random() * 20) + 60; // 60-80%
        } else {
            percentages[i] = Math.floor(Math.random() * 20); // 0-20%
        }
    }
    
    const total = percentages.reduce((a, b) => a + b, 0);
    percentages = percentages.map(p => Math.round((p / total) * 100));
    
    // Hiển thị modal
    audienceModal.show();
    
    // Reset progress bars về 0%
    const progressBars = ['A', 'B', 'C', 'D'];
    progressBars.forEach(letter => {
        const progressBar = document.getElementById(`progress${letter}`);
        const percentValue = progressBar.parentElement.previousElementSibling.querySelector('.percent-value');
        progressBar.style.width = '0%';
        percentValue.textContent = '0%';
    });
    
    // Animation cho progress bars
    setTimeout(() => {
        progressBars.forEach((letter, index) => {
            const progressBar = document.getElementById(`progress${letter}`);
            const percentValue = progressBar.parentElement.previousElementSibling.querySelector('.percent-value');
            progressBar.style.width = percentages[index] + '%';
            percentValue.textContent = percentages[index] + '%';
        });
    }, 500);
    
    document.getElementById('audience').disabled = true;
}

// Xử lý quyền trợ giúp phỏng vấn
function helpInterview() {
    const question = questions[currentQuestion];
    
    // Hiển thị câu hỏi và đáp án trong modal
    document.getElementById('interviewQuestion').textContent = question.question;
    const answersContainer = document.getElementById('interviewAnswers');
    answersContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'audience-answer';
        answerDiv.innerHTML = `<span>${labels[index]}</span>${answer}`;
        answersContainer.appendChild(answerDiv);
    });

    // Tạo các câu trả lời ngẫu nhiên cho 3 khán giả
    const responses = [
        generateResponse(question, 0.7), // Khán giả 1: độ chính xác cao
        generateResponse(question, 0.5), // Khán giả 2: độ chính xác trung bình
        generateResponse(question, 0.3)  // Khán giả 3: độ chính xác thấp
    ];

    // Hiển thị modal
    callModal.show();

    // Reset nội dung
    document.getElementById('answer1').textContent = "...";
    document.getElementById('answer2').textContent = "...";
    document.getElementById('answer3').textContent = "...";

    // Hiển thị từng câu trả lời với độ trễ
    setTimeout(() => {
        document.getElementById('answer1').textContent = responses[0];
    }, 1000);

    setTimeout(() => {
        document.getElementById('answer2').textContent = responses[1];
    }, 2000);

    setTimeout(() => {
        document.getElementById('answer3').textContent = responses[2];
    }, 3000);

    document.getElementById('call').disabled = true;
}

// Xử lý quyền trợ giúp gọi điện
function helpCall() {
    const question = questions[currentQuestion];
    
    // Hiển thị câu hỏi và đáp án trong modal
    document.getElementById('phoneQuestion').textContent = question.question;
    const answersContainer = document.getElementById('phoneAnswers');
    answersContainer.innerHTML = '';
    
    const labels = ['A', 'B', 'C', 'D'];
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'audience-answer';
        answerDiv.innerHTML = `<span>${labels[index]}</span>${answer}`;
        answersContainer.appendChild(answerDiv);
    });

    // Tạo câu trả lời từ người thân
    const confidence = Math.random();
    let message;
    
    if (confidence > 0.6) { // Tăng tỉ lệ search Google từ 15% lên 40%
        message = `Bố/mẹ đang search Google... Đáp án đúng là ${String.fromCharCode(65 + question.correct)} nha con! Chính xác 100% luôn đó!`;
    } else if (confidence > 0.4) { // 20%
        message = `Con yêu, bố/mẹ khá chắc chắn đáp án là ${String.fromCharCode(65 + question.correct)}. Hãy tin tưởng bố/mẹ nhé!`;
    } else if (confidence > 0.2) { // 20%
        message = `Bố/mẹ nghĩ đáp án có thể là ${String.fromCharCode(65 + question.correct)}, nhưng con nên suy nghĩ kỹ thêm.`;
    } else { // 20%
        message = "Xin lỗi con yêu, câu này hơi khó với bố/mẹ. Con hãy dựa vào kiến thức của mình nhé!";
    }

    // Hiển thị modal
    phoneModal.show();

    // Ẩn phần hội thoại, hiện animation gọi điện
    document.querySelector('.conversation').classList.add('d-none');
    document.querySelector('.calling-animation').classList.remove('d-none');

    // Sau 2 giây hiển thị "Đã kết nối"
    setTimeout(() => {
        document.querySelector('.calling-status').textContent = "Đã kết nối!";
    }, 2000);

    // Sau 2 giây nữa hiển thị "Đang search Google..." nếu là trường hợp search
    setTimeout(() => {
        if (confidence > 0.6) { // Cập nhật điều kiện tương ứng
            document.querySelector('.calling-status').textContent = "Đang search Google...";
        }
    }, 4000);

    // Sau 2 giây nữa hiển thị cuộc trò chuyện
    setTimeout(() => {
        document.querySelector('.calling-animation').classList.add('d-none');
        document.querySelector('.conversation').classList.remove('d-none');
        document.getElementById('relativeMessage').textContent = message;
        document.getElementById('wishMessage').textContent = "Chúc con may mắn! ❤️";
    }, 6000);

    document.getElementById('change').disabled = true;
}

// Hàm tạo câu trả lời ngẫu nhiên cho phỏng vấn
function generateResponse(question, accuracy) {
    const random = Math.random();
    const correctAnswer = String.fromCharCode(65 + question.correct);
    
    if (random < accuracy) {
        // Trả lời đúng với các mức độ tự tin khác nhau
        const responses = [
            `Tôi nghĩ chắc chắn là ${correctAnswer}`,
            `Theo tôi thì đáp án ${correctAnswer} có vẻ hợp lý nhất`,
            `Tôi đoán là ${correctAnswer}, nhưng không chắc lắm`,
            `Có thể là ${correctAnswer}`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    } else {
        // Trả lời sai hoặc không chắc chắn
        const wrongAnswers = ['A', 'B', 'C', 'D'].filter(a => a !== correctAnswer);
        const wrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
        const responses = [
            `Tôi nghĩ là ${wrongAnswer}, nhưng không chắc lắm`,
            `Câu này hơi khó, nhưng có thể là ${wrongAnswer}`,
            `Tôi không chắc chắn lắm`,
            `Xin lỗi, tôi không biết câu trả lời`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Bật lại tất cả các quyền trợ giúp
function enableAllHelps() {
    document.getElementById('5050').disabled = false;
    document.getElementById('audience').disabled = false;
    document.getElementById('call').disabled = false;
    document.getElementById('change').disabled = false;
    
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.style.visibility = 'visible';
    });
}

// Thêm event listeners
document.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.getAttribute('data-index'));
        checkAnswer(index);
    });
});

document.getElementById('5050').addEventListener('click', help5050);
document.getElementById('audience').addEventListener('click', helpAudience);
document.getElementById('call').addEventListener('click', helpInterview);
document.getElementById('change').addEventListener('click', helpCall);

// Khởi tạo game khi trang web load xong
document.addEventListener('DOMContentLoaded', initGame); 