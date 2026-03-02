const defaultConfig = {
  school_name: 'مدرسة بشائر الخير للتعليم الأساسي',
  hero_title: 'منصة مبادرات مدرسة بشائر الخير للتعليم الأساسي',
  hero_subtitle: 'نؤمن بأن المبادرات تصنع الفرق',
  button_text: 'استعرض المبادرات',
  drive_link: 'https://drive.google.com/your-link-here',
  font_size: 16
};

function onConfigChange(config) {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const buttonText = document.getElementById('button-text-display');
  const mainCta = document.getElementById('main-cta');
  const schoolName = document.getElementById('school-name-display');

  if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  if (buttonText) buttonText.textContent = config.button_text || defaultConfig.button_text;
  if (mainCta) mainCta.href = config.drive_link || defaultConfig.drive_link;
  if (schoolName) schoolName.textContent = config.school_name || defaultConfig.school_name;

  document.documentElement.style.fontSize =
    (config.font_size || defaultConfig.font_size) + "px";
}

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

