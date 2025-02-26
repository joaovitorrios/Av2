// Dados do quiz
const questions = [
    {
      question: "Qual animal é conhecido como o 'Rei da Selva'?",
      options: ["Tigre", "Leão", "Leopardo", "Guepardo"],
      correct: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 2a1.5 1.5 0 0 0-3 0v.393a2 2 0 0 0 .336 1.105l.748 1.12a2 2 0 0 1 .336 1.104v1.503a1 1 0 0 1-.44.832L5.5 8.5l.662.496a1 1 0 0 1 .338 1.124l-.6 1.8A1 1 0 0 0 6.8 13h2.4a1 1 0 0 0 .9-1.08L10 11l.7-2.1a1 1 0 0 1 .3-.5L12.5 7l1.5 1.4a1 1 0 0 1 .3.5L15 11l-.1.92a1 1 0 0 0 .9 1.08h2.4a1 1 0 0 0 .9-1.08l-.6-1.8a1 1 0 0 1 .337-1.124L19.5 8.5l-.98-.442a1 1 0 0 1-.44-.832V5.723a2 2 0 0 1 .336-1.104l.748-1.12A2 2 0 0 0 19.5 2.393V2a1.5 1.5 0 1 0-3 0v2.353a1 1 0 0 1-.416.81L14.5 6.5l-2-1a1 1 0 0 0-.9 0l-2 1-1.584-1.337A1 1 0 0 1 7.5 4.353V2Z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M8 17h8"/></svg>`
    },
    {
      question: "Qual é o maior animal do mundo?",
      options: ["Elefante Africano", "Baleia Azul", "Girafa", "Lula Colossal"],
      correct: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
    },
    {
      question: "Qual pássaro pode voar para trás?",
      options: ["Águia", "Coruja", "Beija-flor", "Papagaio"],
      correct: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a2 2 0 0 0-2-2h-7a8 8 0 0 0-8 8v3c0 1.1.9 2 2 2Z"/></svg>`
    },
    {
      question: "Como se chama um grupo de leões?",
      options: ["Alcateia", "Bando", "Manada", "Alcateia"],
      correct: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    {
      question: "Qual animal tem a maior expectativa de vida?",
      options: ["Tartaruga de Galápagos", "Elefante", "Baleia da Groenlândia", "Tubarão da Groenlândia"],
      correct: 3,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    {
      question: "Qual é o animal terrestre mais rápido?",
      options: ["Leão", "Guepardo", "Gazela", "Canguru"],
      correct: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="m12 2 10 10-10 10z"/></svg>`
    },
    {
      question: "Qual animal nunca dorme?",
      options: ["Girafa", "Golfinho", "Sapo-touro", "Formiga"],
      correct: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`
    },
    {
      question: "Como se chama um filhote de canguru?",
      options: ["Joey", "Filhote", "Bebê", "Canguruzinho"],
      correct: 0,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 22c-1.798-1.998-2.518-3.995-2.807-5.993"/><path d="m15 2-3 6 3 6"/><path d="m9 2 3 6-3 6"/></svg>`
    },
    {
      question: "Qual animal tem a melhor memória?",
      options: ["Golfinho", "Chimpanzé", "Elefante", "Polvo"],
      correct: 2,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 17.5c1.965 3.276 5.291 2.222 6.5-1.5 1.209 3.722 4.535 4.776 6.5 1.5M4 15h16M4 9h16M4 3h16"/></svg>`
    },
    {
      question: "Qual é o único mamífero que não pode pular?",
      options: ["Preguiça", "Elefante", "Rinoceronte", "Hipopótamo"],
      correct: 1,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 8.71h0a5.004 5.004 0 0 0-7.07-7.07l-1.88-1.88a.996.996 0 0 0-1.41 0l-8.49 8.49a.996.996 0 0 0 0 1.41l1.88 1.88a5.004 5.004 0 0 0 7.07 7.07h0"/><path d="m19 8.71 2.12-2.12a1 1 0 0 0 0-1.41l-4.24-4.24a1 1 0 0 0-1.41 0L13.35 3.06"/><path d="M9.27 16.49a3.001 3.001 0 0 0 4.24 0"/></svg>`
    }
  ];
  
  // Estado do jogo
  let currentQuestion = 0;
  let score = 0;
  let playerName = '';
  
  // Elementos do DOM
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const winScreen = document.getElementById('win-screen');
  const startForm = document.getElementById('start-form');
  const playerNameInput = document.getElementById('player-name');
  const questionCounter = document.getElementById('question-counter');
  const scoreCounter = document.getElementById('score-counter');
  const questionIcon = document.getElementById('question-icon');
  const questionText = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const feedback = document.getElementById('feedback');
  const winnerName = document.getElementById('winner-name');
  const finalScore = document.getElementById('final-score');
  
  // Iniciar o quiz
  startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playerName = playerNameInput.value.trim();
    if (playerName) {
      startScreen.classList.remove('active');
      quizScreen.classList.add('active');
      loadQuestion();
    }
  });
  
  // Carregar pergunta
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    scoreCounter.textContent = `Pontuação: ${score}`;
    questionIcon.innerHTML = question.icon;
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option';
      button.textContent = option;
      button.onclick = () => handleAnswer(index);
      optionsContainer.appendChild(button);
    });
    
    feedback.innerHTML = '';
    feedback.className = 'feedback';
  }
  
  // Manipular resposta
  function handleAnswer(selectedOption) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);
  
    if (selectedOption === question.correct) {
      feedback.className = 'feedback correct';
      feedback.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5h3.5"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5h-3.5"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
        <span>Parabéns! Você acertou!</span>
      `;
      
      setTimeout(() => {
        if (currentQuestion === questions.length - 1) {
          showWinScreen();
        } else {
          currentQuestion++;
          score++;
          loadQuestion();
        }
      }, 1000);
    } else {
      feedback.className = 'feedback incorrect';
      feedback.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>Ops! Resposta incorreta. O quiz será reiniciado.</span>
      `;
      
      setTimeout(() => {
        currentQuestion = 0;
        score = 0;
        loadQuestion();
      }, 1500);
    }
  }
  
  // Mostrar tela de vitória
  function showWinScreen() {
    quizScreen.classList.remove('active');
    winScreen.classList.add('active');
    winnerName.textContent = playerName;
    finalScore.textContent = `Pontuação Final: ${score + 1}/${questions.length}`;
  }
  
  // Reiniciar o jogo
  function resetGame() {
    currentQuestion = 0;
    score = 0;
    playerName = '';
    playerNameInput.value = '';
    winScreen.classList.remove('active');
    startScreen.classList.add('active');
  }