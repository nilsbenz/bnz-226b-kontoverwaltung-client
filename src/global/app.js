export default function toggleDarkMode(init = false) {
  let theme = localStorage.getItem('theme') || 'bright';
  if(init) {
    if(theme === 'bright') {
      setBrightMode();
    } else {
      setDarkMode();
    }
  } else {
    if(theme === 'bright') {
      localStorage.setItem('theme', 'dark');
      setDarkMode();
    } else {
      localStorage.setItem('theme', 'bright');
      setBrightMode();
    }
  }
}

function setBrightMode() {
  document.documentElement.style.setProperty('--primary', '#204E5F');
  document.documentElement.style.setProperty('--primaryDark', '#173945');
  document.documentElement.style.setProperty('--primaryLight', '#3A8DAB');
  document.documentElement.style.setProperty('--onPrimary', '#FFFFFF');
  document.documentElement.style.setProperty('--secondary', '#EEEEEE');
  document.documentElement.style.setProperty('--secondaryDark', '#DDDDDD');
  document.documentElement.style.setProperty('--secondaryLight', '#FFFFFF');
  document.documentElement.style.setProperty('--onSecondary', '#000000');
}

function setDarkMode() {
  document.documentElement.style.setProperty('--primary', '#9B3737');
  document.documentElement.style.setProperty('--primaryDark', '#B43C3C');
  document.documentElement.style.setProperty('--primaryLight', '#822C2C');
  document.documentElement.style.setProperty('--onPrimary', '#000000');
  document.documentElement.style.setProperty('--secondary', '#222222');
  document.documentElement.style.setProperty('--secondaryDark', '#333333');
  document.documentElement.style.setProperty('--secondaryLight', '#111111');
  document.documentElement.style.setProperty('--onSecondary', '#CCCCCC');
}
