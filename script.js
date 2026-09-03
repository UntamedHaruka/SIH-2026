// Smooth section navigation
function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
}

// Interactive safety scenario
let score = 100;
let answered = false;

function chooseAnswer(choice, button){
  if(answered) return;
  answered = true;

  const buttons = document.querySelectorAll(".choice-list button");
  buttons.forEach(b => b.disabled = true);

  if(choice === 3){
    button.classList.add("correct");
    score = 100;
    document.getElementById("feedback").className = "feedback good";
    document.getElementById("feedback").textContent =
      "✓ Correct. Keep a safe distance, raise the alarm and report/isolate the electrical hazard.";
    document.getElementById("scoreMessage").textContent = "Excellent safety decision.";
  }else{
    button.classList.add("wrong");
    score = 55;
    document.getElementById("feedback").className = "feedback bad";
    document.getElementById("feedback").textContent =
      "✕ Unsafe decision. An exposed electrical cable can cause shock or fire. Do not touch or approach it unnecessarily.";
    document.getElementById("scoreMessage").textContent = "Review electrical hazard procedures.";
  }

  document.getElementById("score").textContent = score;
  document.getElementById("scoreBar").style.width = score + "%";
}

// Reveal-on-scroll animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
