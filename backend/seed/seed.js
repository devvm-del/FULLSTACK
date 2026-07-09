require("dotenv").config();

const bcrypt = require("bcrypt");

const supabase = require("../config/supabaseClient");

async function seedAdmin() {
  try {
    const email = "admin";
    const password = "123456";
    const full_name = "System Admin";
    const role = "admin";
    const department = "";
    const address = "";
    const status = "accepted";

    // 1. Check if admin already exists
    const { data: existingAdmin, error: findError } =
      await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    if (findError) {
      throw findError;
    }

    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // 3. Insert admin
    const { error: insertError } = await supabase
      .from("users")
      .insert([
        {
          email,
          password: hashedPassword,
          full_name,
          department,
          address,
          role,
          status,
        },
      ]);

    if (insertError) {
      throw insertError;
    }

    console.log("✅ Admin seeded successfully!");
    console.log("📧 Email: admin");
    console.log("🔑 Password: 123456");

    process.exit(0);

  } catch (err) {
    console.error(
      "❌ Seed error:",
      err.message
    );

    process.exit(1);
  }
}

seedAdmin();