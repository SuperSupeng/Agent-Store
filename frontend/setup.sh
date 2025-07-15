#!/bin/bash

echo "🚀 开始设置 Agent Store Frontend..."

# 检查 Node.js 是否安装
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js 18+"
    echo "访问 https://nodejs.org 下载安装"
    exit 1
fi

# 检查 npm 是否安装
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装，请先安装 npm"
    exit 1
fi

echo "✅ Node.js 和 npm 已安装"

# 安装依赖
echo "📦 安装项目依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功"
else
    echo "❌ 依赖安装失败"
    exit 1
fi

# 创建 .env.local 文件（如果需要）
if [ ! -f .env.local ]; then
    echo "📝 创建环境变量文件..."
    cat > .env.local << EOF
# Agent Store Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo "✅ 环境变量文件创建成功"
fi

echo ""
echo "🎉 设置完成！"
echo ""
echo "运行以下命令启动开发服务器："
echo "  npm run dev"
echo ""
echo "然后在浏览器中打开 http://localhost:3000"
echo ""
echo "其他有用的命令："
echo "  npm run build  - 构建生产版本"
echo "  npm run start  - 启动生产服务器"
echo "  npm run lint   - 运行代码检查" 