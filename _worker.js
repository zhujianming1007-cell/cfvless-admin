// ===============================
// corrected_worker.js
// ===============================

// 仅展示需要改动的两段代码，其余保持不变
// ---------------------------------------------------
// 1️⃣ 登录验证时使用 `hashed_password` 而不是 `password`
/*
   原始代码（示例）：
   if (!user || user.password !== hashedPassword) {
       // 登录失败
   }
*/
if (!user || user.hashed_password !== hashedPassword) {
    // 登录失败处理（保持原来逻辑）
}

// ---------------------------------------------------
// 2️⃣ 注册时插入 `hashed_password` 字段
/*
   原始代码（示例）：
   await env.DB.prepare(
       'INSERT INTO users (username, password, user_uuid) VALUES (?, ?, ?)'
   ).bind(username, hashedPassword, userUuid).run();
*/
await env.DB.prepare(
    'INSERT INTO users (username, hashed_password, user_uuid) VALUES (?, ?, ?)'
).bind(username, hashedPassword, userUuid).run();

// ---------------------------------------------------
// 其余代码请保持原样（从您仓库的完整 _worker.js 复制全部内容）
// 只要确保这两处已改为上面的写法，就能解决登录后页面空白的问题。