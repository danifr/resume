document.addEventListener('DOMContentLoaded', function() {
  var cmd = 'whoami';
  var output = 'Multi-skilled software engineer with a demonstrated experience deploying and running services in production. I am an open-source enthusiast and I actively participate in the open source community.';
  var cmdEl = document.getElementById('typed-cmd');
  var outEl = document.getElementById('typed-text');
  var cursor = document.getElementById('cursor');
  var i = 0, j = 0;

  function typeCmd() {
    if (i < cmd.length) {
      cmdEl.textContent += cmd.charAt(i++);
      setTimeout(typeCmd, 80);
    } else {
      setTimeout(typeOutput, 500);
    }
  }

  function typeOutput() {
    cursor.style.display = 'none';
    if (j < output.length) {
      outEl.textContent += output.charAt(j++);
      setTimeout(typeOutput, 18);
    } else {
      cursor.style.display = 'inline';
      outEl.appendChild(cursor);
    }
  }

  typeCmd();

  // Dark/light mode toggle
  var toggle = document.getElementById('theme-toggle');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) { document.body.classList.add('dark'); document.documentElement.classList.add('dark'); }
  toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.documentElement.classList.toggle('dark');
    document.body.classList.toggle('light');
    document.documentElement.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌑';
  });
});
