#!/bin/bash

echo "🚀 GitHub Actions テストレポート サンプルプロジェクトのセットアップ"
echo ""

# .NET の依存関係をインストール
echo "📦 .NET の依存関係をインストール中..."
dotnet restore

# React アプリの依存関係をインストール
echo "📦 React アプリの依存関係をインストール中..."
cd react-app
npm install
cd ..

# テストの実行
echo ""
echo "🧪 テストを実行中..."

# .NET テスト
echo "▶️  C# テストを実行..."
dotnet test --logger "console;verbosity=normal"

# React テスト
echo "▶️  React テストを実行..."
cd react-app
npm test -- --watchAll=false --coverage
cd ..

echo ""
echo "✅ セットアップが完了しました！"
echo ""
echo "次のステップ:"
echo "1. このリポジトリを GitHub にプッシュ"
echo "2. GitHub Actions が自動的に実行されます"
echo "3. Actions タブでテスト結果を確認できます"
