const API_URL = "http://localhost:5000";

export async function loginUser(username, password) {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Login failed");

  return data; 
}

export async function registerUser(
  username,
  password,
  full_name,
  department,
  address,
  role
) {
  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      full_name,
      department,
      address,
      role,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
}

export const signOut = () => {
  localStorage.removeItem("token"); 
  window.location.href = "/login";  
};

