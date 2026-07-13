# 项目上下文

## Dependencies
- @supabase/supabase-js - Supabase 客户端，用于云服务数据库操作

## Architecture
- 单页作品集网站（Vanilla JS + HTML + Tailwind CSS）
- 云服务：Meoo Cloud (Supabase) 提供 PostgreSQL 数据库
- 表结构：contact_messages 存储联系表单提交数据

## Patterns / Constraints
- 所有图片引用必须使用 CDN URL，禁止本地路径
- 详情页响应式布局：PC端双列网格，移动端单列
- RLS 策略命名：英文 snake_case，格式 `<scope>_<action>_<table>`
- 写操作必须校验影响行数，RLS 拦截时 error 为 null
- 详情页模态框需添加 detail-award-badge 显示奖项图标

## What Didn't Work
- ❌ 使用 nth-of-type 选择器定位模块 → 改用 data-reveal 属性选择器精确定位
- ❌ .word 类 white-space: pre 阻止换行 → 改为 white-space: normal
