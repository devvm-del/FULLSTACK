export async function updatePassword(data) {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:5000/api/admin/changePassword", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update password");
  }

  return result;
}