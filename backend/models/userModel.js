const supabase = require("../config/supabaseClient");

// Find by email
async function findByUsername(username) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .maybeSingle();

  if (error) throw error;

  return data;
}

// Accept user
async function acceptUserQuery(id) {
  const { data, error } = await supabase
    .from("users")
    .update({ status: "accepted" })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// Reject user
async function rejectUserQuery(id) {
  const { data, error } = await supabase
    .from("users")
    .update({ status: "rejected" })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// Get users by role and status
async function getUsersByRoleAndStatus(role, status) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("role", role)
    .eq("status", status)
    .order("id", { ascending: true });

  if (error) throw error;

  return data;
}

// Count users by status
async function countUsersByStatus(status) {
  const { count, error } = await supabase
    .from("users")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", status)
    .in("role", ["teacher", "student"]);

  if (error) throw error;

  return count;
}

// Find by ID
async function findById(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

// Create user
async function createUser({
  username,
  password,
  full_name,
  department,
  address,
  role,
}) {
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        username,
        password,
        full_name,
        department,
        address,
        role,
      },
    ])
    .select("id, username, full_name, role, status, is_enabled")
    .single();

  if (error) throw error;

  return data;
}

// Update password
async function updatePassword(id, hashedPassword) {
  const { data, error } = await supabase
    .from("users")
    .update({
      password: hashedPassword,
      updated_at: new Date(),
    })
    .eq("id", id)
    .select("id, username")
    .single();

  if (error) throw error;

  return data;
}

async function pendingUsers() {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("status", "pending")
    .in("role", ["student", "teacher"]);

  if (error) throw error;

  return data;
}

// Disable user
async function disableUserQuery(id) {
  const { data, error } = await supabase
    .from("users")
    .update({ is_enabled: false })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

// Enable user
async function enableUserQuery(id) {
  const { data, error } = await supabase
    .from("users")
    .update({ is_enabled: true })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

module.exports = {
  findByUsername,
  findById,
  createUser,
  acceptUserQuery,
  rejectUserQuery,
  getUsersByRoleAndStatus,
  countUsersByStatus,
  updatePassword,
  pendingUsers,
  disableUserQuery,
  enableUserQuery,
};
