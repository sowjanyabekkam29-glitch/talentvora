import { supabase } from './supabase-config.js';

export async function registerUser({ fullName, email, password, skills, interests }) {
  // skills / interests are comma-separated text; a database trigger turns them into arrays
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName, skills, interests } },
  });
  return { data, error };
}

export async function loginUser(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function logoutUser() {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
}

// Call at the top of protected pages (dashboard, profile, talent, ...)
export async function requireLogin() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) window.location.href = 'login.html';
  return data.session;
}
