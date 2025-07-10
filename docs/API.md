# Agent Store API 文档 v1.0

---

## 1. 概述

### 1.1 基础信息
- **Base URL**: `https://api.agentstore.com/v1`
- **认证方式**: Bearer Token (JWT)
- **数据格式**: JSON
- **字符编码**: UTF-8

### 1.2 通用响应格式
```json
{
  "success": true,
  "data": {},
  "message": "操作成功",
  "timestamp": "2025-01-XXTXX:XX:XXZ"
}
```

### 1.3 错误响应格式
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述",
    "details": {}
  },
  "timestamp": "2025-01-XXTXX:XX:XXZ"
}
```

### 1.4 通用状态码
| 状态码 | 说明 |
| ------ | ---- |
| 200 | 成功 |
| 201 | 创建成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 429 | 请求频率限制 |
| 500 | 服务器内部错误 |

---

## 2. 认证相关 API

### 2.1 用户登录
**POST** `/auth/login`

**请求参数**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "user_id": "uuid",
      "email": "user@example.com",
      "nickname": "用户昵称",
      "avatar": "https://example.com/avatar.jpg"
    }
  }
}
```

### 2.2 OAuth 登录
**POST** `/auth/oauth/{provider}`

**路径参数**:
- `provider`: `github` | `google` | `wechat`

**请求参数**:
```json
{
  "code": "oauth_code",
  "state": "state_string"
}
```

### 2.3 刷新 Token
**POST** `/auth/refresh`

**请求头**:
```
Authorization: Bearer {refresh_token}
```

### 2.4 用户登出
**POST** `/auth/logout`

**请求头**:
```
Authorization: Bearer {access_token}
```

---

## 3. Agent 目录与搜索 API

### 3.1 获取 Agent 列表
**GET** `/agents`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| page | integer | 否 | 页码，默认 1 |
| limit | integer | 否 | 每页数量，默认 20，最大 100 |
| category | string | 否 | 分类筛选 |
| tags | string[] | 否 | 标签筛选 |
| price_tier | string | 否 | 价格类型：free, freemium, paid |
| source_type | string | 否 | 源码类型：open, closed |
| sort_by | string | 否 | 排序：popular, latest, rating |
| search | string | 否 | 关键词搜索 |

**响应**:
```json
{
  "success": true,
  "data": {
    "agents": [
      {
        "agent_id": "uuid",
        "name": "Agent名称",
        "description": "简短描述",
        "tags": ["标签1", "标签2"],
        "price_tier": "free",
        "source_type": "open",
        "health_score": 0.85,
        "media_count": 15,
        "playbook_count": 3,
        "created_at": "2025-01-XXTXX:XX:XXZ"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "total_pages": 8
    }
  }
}
```

### 3.2 获取 Agent 详情
**GET** `/agents/{agent_id}`

**路径参数**:
- `agent_id`: Agent UUID

**响应**:
```json
{
  "success": true,
  "data": {
    "agent_id": "uuid",
    "name": "Agent名称",
    "description": "详细描述",
    "tags": ["标签1", "标签2"],
    "price_tier": "free",
    "source_type": "open",
    "api_endpoint": "https://api.example.com",
    "demo_url": "https://demo.example.com",
    "health_score": 0.85,
    "media_sources": {
      "wechat": "公众号ID",
      "twitter": "Twitter账号",
      "youtube": "频道ID"
    },
    "created_at": "2025-01-XXTXX:XX:XXZ",
    "updated_at": "2025-01-XXTXX:XX:XXZ"
  }
}
```

### 3.3 获取分类列表
**GET** `/categories`

**响应**:
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "uuid",
        "name": "分类名称",
        "description": "分类描述",
        "agent_count": 25,
        "icon": "icon-class"
      }
    ]
  }
}
```

---

## 4. 智能匹配对话 API

### 4.1 开始匹配对话
**POST** `/match/start`

**请求参数**:
```json
{
  "user_query": "我需要一个能帮我写代码的AI助手",
  "session_id": "optional_session_id"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "session_id": "uuid",
    "conversation_id": "uuid",
    "next_question": "请告诉我您主要使用什么编程语言？",
    "clarification_questions": [
      "您主要使用什么编程语言？",
      "您的预算范围是多少？",
      "您希望是开源还是闭源解决方案？"
    ]
  }
}
```

### 4.2 回答澄清问题
**POST** `/match/clarify`

**请求参数**:
```json
{
  "session_id": "uuid",
  "conversation_id": "uuid",
  "answers": {
    "programming_language": "Python",
    "budget": "free",
    "source_type": "open"
  }
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "session_id": "uuid",
    "conversation_id": "uuid",
    "is_complete": true,
    "recommendations": [
      {
        "agent_id": "uuid",
        "name": "推荐Agent名称",
        "match_score": 0.92,
        "match_reasons": [
          "支持Python开发",
          "免费使用",
          "开源项目"
        ],
        "description": "简短描述"
      }
    ],
    "next_question": null
  }
}
```

### 4.3 获取匹配历史
**GET** `/match/history`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

**请求头**:
```
Authorization: Bearer {access_token}
```

---

## 5. Playbook 管理 API

### 5.1 获取 Playbook 列表
**GET** `/playbooks`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| agent_id | string | 否 | 指定Agent的Playbook |
| tags | string[] | 否 | 标签筛选 |
| media_type | string | 否 | 媒体类型：text, video |
| author_type | string | 否 | 作者类型：official, user |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

**响应**:
```json
{
  "success": true,
  "data": {
    "playbooks": [
      {
        "playbook_id": "uuid",
        "agent_id": "uuid",
        "title": "Playbook标题",
        "media_type": "text",
        "tags": ["标签1", "标签2"],
        "steps_summary": "步骤概要",
        "author_type": "official",
        "verified": true,
        "clicks": 150,
        "success_runs": 120,
        "created_at": "2025-01-XXTXX:XX:XXZ"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "total_pages": 3
    }
  }
}
```

### 5.2 获取 Playbook 详情
**GET** `/playbooks/{playbook_id}`

**路径参数**:
- `playbook_id`: Playbook UUID

**响应**:
```json
{
  "success": true,
  "data": {
    "playbook_id": "uuid",
    "agent_id": "uuid",
    "title": "Playbook标题",
    "media_type": "text",
    "tags": ["标签1", "标签2"],
    "steps_markdown": "# 步骤1\n详细说明...",
    "video_url": "https://example.com/video.mp4",
    "author_type": "official",
    "verified": true,
    "clicks": 150,
    "success_runs": 120,
    "created_at": "2025-01-XXTXX:XX:XXZ",
    "updated_at": "2025-01-XXTXX:XX:XXZ"
  }
}
```

### 5.3 提交 Playbook
**POST** `/playbooks`

**请求头**:
```
Authorization: Bearer {access_token}
```

**请求参数**:
```json
{
  "agent_id": "uuid",
  "title": "Playbook标题",
  "media_type": "text",
  "tags": ["标签1", "标签2"],
  "steps_markdown": "# 步骤1\n详细说明...",
  "video_url": "https://example.com/video.mp4"
}
```

### 5.4 Playbook 反馈
**POST** `/playbooks/{playbook_id}/feedback`

**路径参数**:
- `playbook_id`: Playbook UUID

**请求参数**:
```json
{
  "helpful": true,
  "comment": "可选的评论"
}
```

---

## 6. 媒体内容管理 API

### 6.1 获取媒体内容列表
**GET** `/media`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| agent_id | string | 否 | 指定Agent的媒体内容 |
| source_type | string | 否 | 来源类型：wechat, twitter, youtube |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

**响应**:
```json
{
  "success": true,
  "data": {
    "media": [
      {
        "media_id": "uuid",
        "agent_id": "uuid",
        "title": "媒体标题",
        "content": "内容摘要",
        "source_type": "wechat",
        "source_url": "https://example.com/article",
        "published_at": "2025-01-XXTXX:XX:XXZ",
        "created_at": "2025-01-XXTXX:XX:XXZ"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "total_pages": 5
    }
  }
}
```

### 6.2 提交媒体链接
**POST** `/media/submit`

**请求头**:
```
Authorization: Bearer {access_token}
```

**请求参数**:
```json
{
  "agent_id": "uuid",
  "url": "https://example.com/article",
  "title": "链接标题",
  "description": "用户描述"
}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "submission_id": "uuid",
    "status": "pending",
    "message": "提交成功，等待审核"
  }
}
```

### 6.3 获取提交历史
**GET** `/media/submissions`

**请求头**:
```
Authorization: Bearer {access_token}
```

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| status | string | 否 | 状态：pending, approved, rejected |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

---

## 7. 用户账户 API

### 7.1 获取用户信息
**GET** `/user/profile`

**请求头**:
```
Authorization: Bearer {access_token}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "user_id": "uuid",
    "email": "user@example.com",
    "nickname": "用户昵称",
    "avatar": "https://example.com/avatar.jpg",
    "created_at": "2025-01-XXTXX:XX:XXZ",
    "stats": {
      "favorites_count": 15,
      "submissions_count": 5,
      "playbooks_count": 2
    }
  }
}
```

### 7.2 更新用户信息
**PUT** `/user/profile`

**请求头**:
```
Authorization: Bearer {access_token}
```

**请求参数**:
```json
{
  "nickname": "新昵称",
  "avatar": "https://example.com/new-avatar.jpg"
}
```

### 7.3 收藏管理
**POST** `/user/favorites`

**请求头**:
```
Authorization: Bearer {access_token}
```

**请求参数**:
```json
{
  "agent_id": "uuid",
  "action": "add" // add 或 remove
}
```

### 7.4 获取收藏列表
**GET** `/user/favorites`

**请求头**:
```
Authorization: Bearer {access_token}
```

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

### 7.5 获取调用历史
**GET** `/user/history`

**请求头**:
```
Authorization: Bearer {access_token}
```

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| page | integer | 否 | 页码 |
| limit | integer | 否 | 每页数量 |

---

## 8. 管理后台 API

### 8.1 Agent 审核
**GET** `/admin/agents/pending`

**请求头**:
```
Authorization: Bearer {admin_token}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "agents": [
      {
        "agent_id": "uuid",
        "name": "Agent名称",
        "description": "描述",
        "submitted_by": "user@example.com",
        "submitted_at": "2025-01-XXTXX:XX:XXZ"
      }
    ]
  }
}
```

**PUT** `/admin/agents/{agent_id}/review`

**请求参数**:
```json
{
  "action": "approve", // approve 或 reject
  "reason": "审核理由"
}
```

### 8.2 Playbook 审核
**GET** `/admin/playbooks/pending`

**PUT** `/admin/playbooks/{playbook_id}/review`

### 8.3 媒体链接审核
**GET** `/admin/media/submissions`

**PUT** `/admin/media/submissions/{submission_id}/review`

### 8.4 获取统计数据
**GET** `/admin/stats`

**查询参数**:
| 参数 | 类型 | 必填 | 说明 |
| ---- | ---- | ---- | ---- |
| period | string | 否 | 统计周期：day, week, month |
| start_date | string | 否 | 开始日期 |
| end_date | string | 否 | 结束日期 |

**响应**:
```json
{
  "success": true,
  "data": {
    "dau": 1250,
    "conversion_rate": 0.15,
    "total_agents": 150,
    "total_playbooks": 300,
    "pending_reviews": 25,
    "content_update_frequency": 0.8
  }
}
```

---

## 9. 数据导出 API

### 9.1 导出用户数据
**GET** `/user/export`

**请求头**:
```
Authorization: Bearer {access_token}
```

**响应**:
```json
{
  "success": true,
  "data": {
    "download_url": "https://example.com/export/user-data-2025-01-XX.json",
    "expires_at": "2025-01-XXTXX:XX:XXZ"
  }
}
```

### 9.2 删除用户数据
**DELETE** `/user/data`

**请求头**:
```
Authorization: Bearer {access_token}
```

---

## 10. 错误码说明

| 错误码 | 说明 |
| ------ | ---- |
| AUTH_INVALID_TOKEN | Token无效或已过期 |
| AUTH_INSUFFICIENT_PERMISSIONS | 权限不足 |
| AGENT_NOT_FOUND | Agent不存在 |
| PLAYBOOK_NOT_FOUND | Playbook不存在 |
| MEDIA_NOT_FOUND | 媒体内容不存在 |
| USER_NOT_FOUND | 用户不存在 |
| INVALID_REQUEST_PARAMS | 请求参数错误 |
| RATE_LIMIT_EXCEEDED | 请求频率超限 |
| CONTENT_TOO_LARGE | 内容过大 |
| DUPLICATE_SUBMISSION | 重复提交 |
| REVIEW_ALREADY_PROCESSED | 已审核过 |

---

## 11. 限流规则

| API 端点 | 限制 | 说明 |
| -------- | ---- | ---- |
| 所有 API | 1000次/小时 | 基础限流 |
| 搜索 API | 100次/分钟 | 搜索限流 |
| 匹配对话 | 50次/分钟 | 对话限流 |
| 文件上传 | 10次/小时 | 上传限流 |

---

## 12. Webhook 事件

### 12.1 支持的事件类型
- `agent.approved`: Agent审核通过
- `agent.rejected`: Agent审核拒绝
- `playbook.published`: Playbook发布
- `media.updated`: 媒体内容更新

### 12.2 Webhook 配置
**POST** `/webhooks`

**请求参数**:
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["agent.approved", "playbook.published"],
  "secret": "webhook_secret"
}
```

---

> **版本记录**
> - v1.0 (2025-01-XX) 基于PRD v0.2创建的首版API文档 