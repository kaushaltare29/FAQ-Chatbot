const userMessage = [
    ["hi", "hey", "hello"],
    ["what is upsc exam and why is it important"],
    ["can i start preparing for upsc while in 10th and 12th grade"],
    ["what subjects should i choose in 11th and 12th for upsc"],
    ["how many hours should i study daily for upsc while in school"],
    ["how do i manage time effectively for school and upsc preparation"],
    ["what is the minimum age to appear for the upsc"],
    ["can i apply for upsc while in school"],
    ["can i take the upsc exam immediately after 12th grade"],
    ["do i need a degree to appear for upsc"],
    ["who created you", "who made you", "who is your creator"],
    ["what are some books to start upsc preparation in 10th and 12th"],
    ["are ncert textbooks sufficient for upsc preparation"],
    ["how can i access upsc study material and recources online"],
    ["are there any online courses or platform for upsc aspirants in school"],
    ["can you recommend upsc preaparation apps or websites"],
    ["how can i balance school studies and upsc preparation effectively"],
    ["what is the idea study schedule for a student in 10th or 12th grade"],
    ["should i focus more on school exams or upsc mork tests"],
    ["can i choose optional subjects for upsc while in school"],
    ["how should i decide on an optional subjects for upsc"],
    ["what are the upsc exam pattern and how many attempts do i get"],
    ["what is the syllabus for the upsc main examination"],
    ["when should i start answer writing pratice for upsc main"],
    ["how can i improve my writing skills for the upsc essay paper"],
    ["what is the interview stage like in the upsc exam"],
    ["how can i stay updates on upsc exam noticifations and dates"],
    ["can you share success stories of upsc toppers who started early"],
    ["how can i stay motivated throughout my upsc preaparation journey"],
    ["what are the benefits of a career in civil services"],
    ["how can i manage strees during upsc preparation and school exams"],
    ["are there any parttime job opportunities for school going upsc aspirants"],
    ["how can i manage the cost of upsc coaching and study materials"],
    ["should i participate in school clubs and activities while preparing for upsc"],
    ["what are the common mistakes to avoid during upsc preparation"],
    ["are there any scholarships or financial aid options for upsc aspirants in school"],
    ["is the advisable to join a coaching institute for upsc"]
  ];
  const botReply = [
    ["Hi","Heyy"],
    ["Upsc is the Union Service Commission, responsible for recruiting civil servants in india."],
    ["Yes you can start upsc preparation early to build a strong foundation."],
    ["Choose humanities or subjects like history, geography and economics."],
    ["Aim for consistent daily study hours while balancing school."],
    ["Time management is crucial;create a study schedule."],
    ["Minimum age is 21,so you can't apply immeditely after 12th."],
    ["You can apply for upsc while in school, but you must meet age criteria."],
    ["A bachelor's degree is requrired to appear for the upsc."],
    ["Completing 12th grade is insufficient; a degree is required."],
    ["Ushinkar,Tatkare,Shetty and Tare."],
    ["Start with NCERT books and gradually advance to standard upsc study material."],
    ["NCERT books are an essential foundation for upsc."],
    ["Many online platforms offer free upsc study material."],
    ["Numerous online platforms and apps cater to UPSC aspirants."],
    ["Research online platforms and apps for UPSC preparation."],
    ["Create a balanced schedule with dedicated time for both."],
    ["Prioritze school exams while gradually increase upsc preparation."],
    ["Focus more on school exam and integrate UPSC preparation."],
    ["Optional subjects can be chosen after 12th grade"],
    ["Choose an optional subject include history, geography and public administration."],
    ["UPSC has a three-stage exam process with multiple attemps."],
    ["UPSC mains syllabus includes a wide range of topics."],
    ["Start answer writing pratice early with previous year's papers."],
    ["Improve writing skills through regular essay pratice."],
    ["The interview stage evalutes your personality and knowledge"],
    ["Stay updates through the UPSC offical website and news sources."],
    ["Several upsc toppers started their jounery early."],
    ["Motivation comes from setting clear goals and stayong focused."],
    ["A career in civil service offers public opportunities."],
    ["Manage stress through meditation, yoga or exercise."],
    ["Consider freelance or tutoring opportunities"],
    ["Budget wisely and utilize free online resorces."],
    ["Participation in school activities can enhance skills."],
    ["Avoid procrastination and maintain a consistent routine."],
    ["Explore scholarship opportunities available on UPSC official website."],
    ["Coaching institutes can provide guidance but are optional."]
  ];
  
  const alternative = [
    "Clarify your question.",
    "Could you once repeat the question",
    "Recheck your question.",
    "Ask something else...",
    "I didn't understand your question."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye",
        "Bye, See you!",
        "Bye. Take care."
      ],
      ["Good Night", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning!"],
      ["Good Afternoon", "Noon!", "Afternoon!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }