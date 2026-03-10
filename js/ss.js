const defaultConfig = {
  school_name: 'مدرسة بشائر الخير للتعليم الأساسي',
  hero_title: 'منصة مبادرات مدرسة بشائر الخير للتعليم الأساسي',
  hero_subtitle: 'نؤمن بأن المبادرات تصنع الفرق',
  button_text: 'استعرض المبادرات',
  drive_link: 'https://drive.google.com/drive/folders/184OtMMIDcvGMd93jC7ypacA12yi9z6ng',
  font_size: 16
};

function onConfigChange(config) {

  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const buttonText = document.getElementById('button-text-display');
  const schoolName = document.getElementById('school-name-display');

  if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  if (buttonText) buttonText.textContent = config.button_text || defaultConfig.button_text;
  if (schoolName) schoolName.textContent = config.school_name || defaultConfig.school_name;

}

/* ===== PASSWORD SYSTEM ===== */

const button = document.getElementById("main-cta");
const modal = document.getElementById("password-modal");

button.addEventListener("click", function(){

modal.style.display = "flex";

});

function checkPassword(){

const pass = document.getElementById("password-input").value;

if(pass === "12341234"){

window.open("https://drive.google.com/drive/folders/184OtMMIDcvGMd93jC7ypacA12yi9z6ng","_blank");

}else{

document.getElementById("password-error").innerText="كلمة المرور غير صحيحة";

}

}