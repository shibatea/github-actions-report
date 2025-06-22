@echo off
echo 🚀 GitHub Actions テストレポート サンプルプロジェクトのセットアップ
echo.

REM .NET の依存関係をインストール
echo 📦 .NET の依存関係をインストール中...
dotnet restore

REM React アプリの依存関係をインストール
echo 📦 React アプリの依存関係をインストール中...
cd react-app
call npm install
cd ..

REM テストの実行
echo.
echo 🧪 テストを実行中...

REM .NET テスト
echo ▶️  C# テストを実行...
dotnet test --logger "console;verbosity=normal"

REM React テスト
echo ▶️  React テストを実行...
cd react-app
call npm test -- --watchAll=false --coverage
cd ..

echo.
echo ✅ セットアップが完了しました！
echo.
echo 次のステップ:
echo 1. このリポジトリを GitHub にプッシュ
echo 2. GitHub Actions が自動的に実行されます
echo 3. Actions タブでテスト結果を確認できます
