const API_URL = "http://localhost:5000";

export async function pendingUsers() {
  const response = await fetch(`${API_URL}/api/user/pendingUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error");
  }

  return data;
}

export async function pendingTeacher() {
  const response = await fetch(`${API_URL}/api/user/pendingTeacher`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error");
  }

  return data;
}

export async function acceptedTeacher() {
  const response = await fetch(`${API_URL}/api/user/acceptedTeacher`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error");
  }

  return data;
}

export async function pendingStudent() {
  const response = await fetch(`${API_URL}/api/user/pendingStudent`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error");
  }

  return data;
}

export async function acceptedStudent() {
  const response = await fetch(`${API_URL}/api/user/acceptedStudent`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error");
  }

  return data;
}

export async function acceptedUserCount() {
  const response = await fetch(
    `${API_URL}/api/user/acceptedUserCount`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch count");
  }

  return data;
}


export async function pendingUserCount() {
  const response = await fetch(
    `${API_URL}/api/user/pendingUserCount`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch count");
  }

  return data;
}

export async function rejectedUserCount() {
  const response = await fetch(
    `${API_URL}/api/user/rejectedUserCount`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch count");
  }

  return data;
}

// ACCEPT USER
export async function acceptUser(id) {
  const response = await fetch(`${API_URL}/api/user/acceptUser/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to accept user");
  }

  return data;
}

// REJECT USER
export async function rejectUser(id) {
  const response = await fetch(`${API_URL}/api/user/rejectUser/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to reject user");
  }

  return data;
}

export async function enableUser(id) {
  const response = await fetch(`${API_URL}/api/user/enableUser/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to enable user");
  }

  return data;
}

export async function disableUser(id) {
  const response = await fetch(`${API_URL}/api/user/disableUser/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to disable user");
  }

  return data;
}

