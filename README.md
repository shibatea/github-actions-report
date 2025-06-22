# GitHub Actions テストレポート サンプル

![Tests](https://github.com/[ユーザー名]/github-actions-report/workflows/All%20Tests/badge.svg)
![Coverage](https://img.shields.io/badge/Coverage-85%25-brightgreen.svg)

このリポジトリは、GitHub ActionsでC#とTypeScript（React）のテスト結果を視覚的に表示するサンプルプロジェクトです。

## プロジェクト構造

```
github-actions-report/
├── .github/workflows/    # GitHub Actions ワークフロー
├── src/                  # C# ソースコード
├── tests/               # C# テストコード
├── react-app/           # React アプリケーション
│   ├── src/
│   └── package.json
├── GithubActionsReport.sln
└── README.md
```

## 使用方法

1. このリポジトリをフォーク
2. GitHub Actionsを有効化
3. コミット＆プッシュでテストが自動実行

## 機能

- ✅ C# (xUnit) テストの実行とレポート
- ✅ TypeScript/React (Jest) テストの実行とレポート
- ✅ コードカバレッジの計測と可視化
- ✅ Pull Requestへの自動コメント
- ✅ テスト結果のHTMLレポート生成
