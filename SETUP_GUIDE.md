# GitHub Actions テストレポート セットアップガイド

## 📋 前提条件

- .NET 8.0 SDK
- Node.js 20.x
- Git
- GitHub アカウント

## 🚀 クイックスタート

### 1. 依存関係のインストール

Windows の場合:
```batch
setup.bat
```

macOS/Linux の場合:
```bash
chmod +x setup.sh
./setup.sh
```

### 2. GitHub リポジトリの作成

1. GitHub で新しいリポジトリを作成
2. このプロジェクトをプッシュ:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[ユーザー名]/github-actions-report.git
git push -u origin main
```

### 3. GitHub Actions の確認

1. GitHub リポジトリの "Actions" タブを開く
2. ワークフローが自動的に実行されます
3. 各ワークフローをクリックして詳細を確認

## 📊 レポートの確認方法

### テスト結果の表示

1. **Checks タブ**: PR やコミットのページで確認
2. **Actions サマリー**: 各ワークフロー実行の Summary セクション
3. **アーティファクト**: カバレッジレポートのダウンロード

### Pull Request でのレポート

PR を作成すると自動的に:
- テスト結果がコメントとして追加
- カバレッジレポートが表示
- ステータスチェックが実行

## 🛠️ カスタマイズ

### テストの追加

**C# テスト**:
- `tests/` フォルダに新しいテストクラスを追加
- xUnit の属性を使用: `[Fact]`, `[Theory]`

**React テスト**:
- `react-app/src/__tests__/` にテストファイルを追加
- `*.test.tsx` または `*.spec.tsx` の命名規則を使用

### ワークフローの変更

`.github/workflows/` 内のYAMLファイルを編集:
- `all-tests.yml`: 統合テスト
- `dotnet-test.yml`: C# 専用テスト
- `react-test.yml`: React 専用テスト

### カバレッジ閾値の設定

React の場合 (`package.json`):
```json
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

## 📈 高度な機能

### GitHub Pages でのレポート公開

1. リポジトリの Settings → Pages
2. Source を "GitHub Actions" に設定
3. ワークフローに Pages デプロイステップを追加

### Codecov 統合

1. [Codecov](https://codecov.io) でアカウント作成
2. リポジトリを連携
3. `CODECOV_TOKEN` をシークレットに追加

### カスタムバッジ

README.md に追加:
```markdown
![Tests](https://github.com/[ユーザー名]/[リポジトリ名]/workflows/All%20Tests/badge.svg)
![Coverage](https://codecov.io/gh/[ユーザー名]/[リポジトリ名]/branch/main/graph/badge.svg)
```

## 🐛 トラブルシューティング

### よくある問題

**テストが失敗する場合**:
- 依存関係が正しくインストールされているか確認
- `dotnet restore` と `npm install` を再実行

**GitHub Actions が実行されない場合**:
- Actions が有効になっているか確認
- ワークフローファイルの構文エラーをチェック

**カバレッジが表示されない場合**:
- テスト実行時に `--coverage` フラグが含まれているか確認
- レポートジェネレーターの設定を確認

## 📚 参考リンク

- [GitHub Actions ドキュメント](https://docs.github.com/ja/actions)
- [xUnit ドキュメント](https://xunit.net/)
- [Jest ドキュメント](https://jestjs.io/ja/)
- [Codecov ドキュメント](https://docs.codecov.com/)
