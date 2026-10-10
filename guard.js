// Talentvora - page guard
// Put this on every page that should only be seen after login:
//   <script type="module">
//     import { protectPage } from './guard.js';
//     protectPage();
//   </script>
import { supabase } from './supabase-config.js';
import { logoutUser } from './auth.js';

const AUTH_PAGE = /(^|\/)(login|register)\.html$/i;
const AUTH_TEXT = ['login', 'log in', 'sign in', 'signin', 'register', 'sign up', 'signup'];

function tidyLinks() {
  document.querySelectorAll('a').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('?')[0];
    const text = a.textContent.trim().toLowerCase();

    // Logout links: sign out for real, then go to the login page
    if (text.replace(/[^a-z]/g, '') === 'logout' || a.id === 'logout') {
      a.setAttribute('href', 'login.html');
      a.addEventListener('click', (e) => { e.preventDefault(); logoutUser(); });
      return;
    }
    // Hide any Login / Register / Sign up links once the user is signed in
    if (AUTH_PAGE.test(href) || AUTH_TEXT.includes(text)) {
      a.style.display = 'none';
    }
  });
}

export async function protectPage() {
  document.documentElement.style.visibility = 'hidden'; // avoid flashing protected content

  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    window.location.replace('login.html');
    return null;
  }

  tidyLinks();
  document.documentElement.style.visibility = 'visible';

  // If the session ends (logout in another tab, expiry), go back to login
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') window.location.replace('login.html');
  });

  return data.session;
}
